import mongoose from "mongoose";
import { NextResponse } from "next/server";
const MONGO_URI = process.env.MONGO_URI!;

let isConnected = false;

export const connectDB = async () => {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    isConnected = true;
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed", error);
    throw new Error("MongoDB Connection Error");
  }
};
