import express from "express";
import Payment from "../models/Payment.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🟢 Create new payment
router.post("/", verifyToken, async (req, res) => {
  try {
    const { booking, amount, paymentType, transactionId } = req.body;

    const payment = new Payment({
      booking,
      user: req.user.id,
      amount,
      paymentType,
      transactionId,
      paymentStatus: "Completed"
    });

    await payment.save();
    res.status(201).json({ message: "Payment recorded successfully", payment });
  } catch (error) {
    res.status(500).json({ message: "Error recording payment", error });
  }
});

// 🟣 Get all payments
router.get("/", verifyToken, async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate("user", "fullName email")
      .populate({
        path: "booking",
        populate: { path: "property", select: "title location" }
      });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching payments", error });
  }
});

// 🔵 Get my payments
router.get("/my-payments", verifyToken, async (req, res) => {
  try {
    const payments = await Payment.find({ user: req.user.id })
      .populate({
        path: "booking",
        populate: { path: "property", select: "title location" }
      });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user payments", error });
  }
});

export default router;
