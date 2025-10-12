import { connectDB } from "@/config/db";
import User from "@/modals/usersModal";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  context: { params: Promise<{ userId: string }> },
) {
  try {
    await connectDB();

    const { userId } = await context.params;
    const user = await User.findById(userId).select("-password");
    console.log(user);
    if (!user) {
      return NextResponse.json(
        { success: false, error: "User Not Found" },
        { status: 404 },
      );
    }

    const fetchUserData = {
      id: user._id.toString(),
      fullName: user.fullName,
      email: user.email,
    };
    return NextResponse.json(
      { success: true, user: fetchUserData },
      { status: 201 },
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message, success: false },
      { status: 500 },
    );
  }
}
