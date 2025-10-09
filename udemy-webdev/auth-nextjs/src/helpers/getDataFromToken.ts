import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface TokenPayload {
  id: string;
}

export const getDataFromToken = async (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    if (!token) {
      throw new Error("Token Not Found");
    }

    const decodedToken = jwt.verify(
      token,
      process.env.TOKEN_SECRET!
    ) as TokenPayload;
    return decodedToken.id;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    throw new Error("Invalid Or Expiry Token");
  }
};
