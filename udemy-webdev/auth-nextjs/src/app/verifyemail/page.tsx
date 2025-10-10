"use client";
import axios from "axios";
import { MailCheckIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const [token, setToken] = useState("");
  const [verify, setVerify] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });
      setVerify(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = searchParams.get("token");
    if (urlToken) {
      setToken(urlToken || "");
    }
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <MailCheckIcon className="size-20 mb-10 text-green-500" />
      <h1 className="text-4xl font-bold mb-3">Email Verified</h1>
      <p className="text-lg mb-10 text-center tracking-wider">
        Your Email Address was Successfully Verified
      </p>
      <Link href="/login">
        <button className="bg-white text-xl font-semibold px-4 text-black cursor-pointer py-2 rounded-lg">
          Go To Login
        </button>
      </Link>
    </div>
  );
}
