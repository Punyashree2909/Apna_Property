import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true
  },
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  message: { type: String },
  status: { type: String, enum: ["New", "Contacted", "Closed"], default: "New" },
  createdAt: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } // who created the lead
});

export default mongoose.model("Lead", leadSchema);
