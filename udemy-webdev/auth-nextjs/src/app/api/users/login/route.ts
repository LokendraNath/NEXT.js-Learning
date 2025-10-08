import { connectDB } from "@/config/db";
import User from "@/modals/usersModal.js";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // Check If User Exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User Does Not Exits" },
        { status: 400 }
      );
    }

    // Check If Password is Correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
