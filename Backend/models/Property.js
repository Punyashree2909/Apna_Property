import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  location: String,
  propertyType: {
    type: String,
    enum: ["Apartment", "Villa", "Plot", "Studio"],
    required: true
  },
  status: { type: String, enum: ["Available", "Sold", "Rented"], default: "Available" },
  imageUrls: [String],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Property", propertySchema);
