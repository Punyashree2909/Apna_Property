import express from "express";
import ContactMessage from "../models/ContactMessage.js";

const router = express.Router();

// 🟢 Create a new contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newMessage = new ContactMessage({ name, email, phone, subject, message });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully", data: newMessage });
  } catch (error) {
    res.status(500).json({ message: "Error sending message", error });
  }
});

// 🟣 Get all messages (admin)
router.get("/", async (req, res) => {
  try {
    const messages = await ContactMessage.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Error fetching messages", error });
  }
});

export default router;
