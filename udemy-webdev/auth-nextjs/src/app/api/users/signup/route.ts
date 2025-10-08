import { connectDB } from "@/config/db";
import User from "@/modals/usersModal.js";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { fullName, email, password } = reqBody;

    console.log(reqBody);

    // Check if User Already Exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User Already Exits" },
        { status: 400 }
      );
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create New User
    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();

    return NextResponse.json(
      { message: "User Create Succussfully", success: true, savedUser },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
