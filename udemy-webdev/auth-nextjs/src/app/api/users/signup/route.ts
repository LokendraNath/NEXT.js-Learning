import { connectDB } from "@/config/db";
import { sendEmail } from "@/helpers/mailer";
import User from "@/modals/usersModal.js";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await connectDB();
  try {
    const reqBody = await request.json();
    const { fullName, email, password } = reqBody;

    // Check if User Already Exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "Email Already Exits, Please Login" },
        { status: 400 },
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

    // Email Verification
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    // Safe Response
    return NextResponse.json(
      {
        message: "SignUp Successfully",
        success: true,
        user: {
          _id: savedUser._id,
          fullName: savedUser.fullName,
          email: savedUser.email,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
