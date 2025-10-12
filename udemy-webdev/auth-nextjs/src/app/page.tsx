/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay (like API)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="ml-3 size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl">Welcome To Home Page</h1>
      <Link href="/profile">
        <button className="mt-5 cursor-pointer rounded-lg bg-green-500 p-3 font-bold">
          Go To Profile
        </button>
      </Link>
    </div>
  );
};
export default page;
