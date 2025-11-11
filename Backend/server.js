import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Base test route
app.get("/", (req, res) => {
  res.send("Backend setup running successfully 🚀");
});

// // (Future routes)
// // import propertyRoutes from "./routes/propertyRoutes.js";
// // app.use("/api/properties", propertyRoutes);



app.get("/create-test", async (req, res) => {
  try {
    const mongoose = await import("mongoose");
    const Test = mongoose.model("Test", new mongoose.Schema({ name: String }));
    await Test.create({ name: "Hello MongoDB" });
    res.send("Test document created successfully ✅");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating test document");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));