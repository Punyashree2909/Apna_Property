import express from "express";
import Lead from "../models/Lead.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🟢 Create new lead
router.post("/", verifyToken, async (req, res) => {
  try {
    const { property, name, email, phone, message } = req.body;

    const newLead = new Lead({
      property,
      name,
      email,
      phone,
      message,
      user: req.user.id
    });

    await newLead.save();
    res.status(201).json({ message: "Lead created successfully", lead: newLead });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating lead", error });
  }
});

// 🟣 Get all leads (admin/agent)
router.get("/", verifyToken, async (req, res) => {
  try {
    const leads = await Lead.find()
      .populate("property", "title price location")
      .populate("user", "fullName email");
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: "Error fetching leads", error });
  }
});

// 🔵 Get single lead
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
      .populate("property", "title location")
      .populate("user", "fullName email");
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: "Error fetching lead", error });
  }
});

// 🔴 Delete lead (for admin/agent)
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: "Lead not found" });
    await lead.deleteOne();
    res.json({ message: "Lead deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting lead", error });
  }
});

export default router;
