import { connectDB } from "@/config/db";
import { sendEmail } from "@/helpers/mailer";
import User from "@/modals/usersModal";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  await connectDB();
  const reqBody = await request.json();
  const { email } = reqBody;

  try {
    const user = await User.findOne({ email }).select("_id");
    if (!user) {
      return NextResponse.json({ error: "User Not Found" }, { status: 401 });
    }
    const userId = user._id.toString();

    await sendEmail({ email, emailType: "RESET", userId });

    return NextResponse.json(
      { message: "Password Reset Email Send Succeefully", success: true },
      { status: 201 },
    );

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
};
