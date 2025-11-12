import express from "express";
import Booking from "../models/Booking.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🟢 Create new booking (protected)
router.post("/", verifyToken, async (req, res) => {
  try {
    const { property, visitDate, visitTime, notes } = req.body;

    const booking = new Booking({
      property,
      user: req.user.id,
      visitDate,
      visitTime,
      notes
    });

    await booking.save();
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
});

// 🟣 Get all bookings (admin/agent)
router.get("/", verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("property", "title location price")
      .populate("user", "fullName email");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
});

// 🔵 Get user's bookings
router.get("/my-bookings", verifyToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate("property", "title location price");
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user bookings", error });
  }
});

// 🔴 Cancel booking
router.put("/cancel/:id", verifyToken, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) return res.status(404).json({ message: "Booking not found" });

    booking.status = "Cancelled";
    await booking.save();

    res.json({ message: "Booking cancelled successfully", booking });
  } catch (error) {
    res.status(500).json({ message: "Error cancelling booking", error });
  }
});

export default router;
