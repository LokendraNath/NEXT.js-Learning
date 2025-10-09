import { connectDB } from "@/config/db";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/modals/usersModal";
import { NextRequest, NextResponse } from "next/server";

connectDB();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);
    const matchUser = await User.findById(userId).select("-password");
    if (!matchUser) {
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    }

    return NextResponse.json(matchUser);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
