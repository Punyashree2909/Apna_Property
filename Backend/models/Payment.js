import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  booking: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Booking"
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  amount: { type: Number, required: true },
  paymentType: {
    type: String,
    enum: ["Booking Fee", "Rent", "Deposit"],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ["Pending", "Completed", "Failed"],
    default: "Pending"
  },
  paymentDate: { type: Date, default: Date.now },
  transactionId: { type: String }
});

export default mongoose.model("Payment", paymentSchema);
