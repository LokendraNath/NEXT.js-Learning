import { connectDB } from "@/config/db";
import User from "@/modals/usersModal";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { useState } from "react";

export const POST = async (request: NextRequest) => {
  await connectDB();
  try {
    const { token, newPassword } = await request.json();

    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 400 });
    }

    // Hash
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    await user.save();

    return NextResponse.json(
      {
        message: "Password Updated Successfully",
        success: true,
      },
      { status: 200 },
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 },
    );
  }
};
