"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckEmailPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEmail(params.get("email"));
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Mail className="mb-10 size-20" />
      <h1 className="mb-5 text-4xl font-bold">Please Verify Your Email</h1>
      <p className="mb-8 text-center text-lg tracking-wider md:max-w-xl">
        We’ve sent a verification link to{" "}
        <span className="underline">{email}</span>, Click the link in the email
        to verify your account.
      </p>
      <Link href="#">
        <button className="flex rounded-lg bg-white px-4 py-2 text-xl font-semibold text-black">
          <span>Check Your Email</span> <ArrowUpRight className="ml-2 size-6" />
        </button>
      </Link>
    </div>
  );
}
