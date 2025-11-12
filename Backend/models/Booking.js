import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property",
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  visitDate: { type: Date, required: true },
  visitTime: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Cancelled"],
    default: "Pending"
  },
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Booking", bookingSchema);
