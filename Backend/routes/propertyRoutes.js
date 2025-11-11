import express from "express";
import Property from "../models/Property.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Property (protected)
router.post("/", verifyToken, async (req, res) => {
  try {
    const property = new Property({ ...req.body, owner: req.user.id });
    await property.save();
    res.status(201).json({ message: "Property added successfully", property });
  } catch (error) {
    res.status(500).json({ message: "Error adding property", error });
  }
});

// Get all properties
router.get("/", async (req, res) => {
  const properties = await Property.find().populate("owner", "fullName email");
  res.json(properties);
});

// Get single property by ID
router.get("/:id", async (req, res) => {
  const property = await Property.findById(req.params.id).populate("owner", "fullName email");
  if (!property) return res.status(404).json({ message: "Property not found" });
  res.json(property);
});

// Delete property (only owner)
router.delete("/:id", verifyToken, async (req, res) => {
  const property = await Property.findById(req.params.id);
  if (!property) return res.status(404).json({ message: "Property not found" });

  if (property.owner.toString() !== req.user.id)
    return res.status(403).json({ message: "Not authorized" });

  await property.deleteOne();
  res.json({ message: "Property deleted successfully" });
});

export default router;
