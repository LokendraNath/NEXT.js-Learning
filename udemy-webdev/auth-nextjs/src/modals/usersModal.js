import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: { type: String, require: [true, "Please Provide a Fullname"] },
  email: { type: String, require: [true, "Please Provide a Email"] },
  password: { type: String, require: [true, "Please Provide a Password"] },
  isVerified: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models["users"] || mongoose.model("users", UserSchema);

export default User;
