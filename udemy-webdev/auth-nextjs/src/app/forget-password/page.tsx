"use client";
import axios from "axios";
import { KeyRound, Loader, Mail } from "lucide-react";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import toast from "react-hot-toast";

export default function ForgetPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please Enter a Valid Email");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/users/forget-password", { email });
      toast.success(res.data.message || "Forget Link Send Successfully");
      setSuccess(true);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Failed To Send Forget Link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex min-w-sm flex-col items-center justify-center rounded-3xl px-5 py-5 shadow-sm shadow-white">
        <KeyRound className="mb-8 size-15" />
        <h1 className="mb-10 text-5xl font-bold">Forget Passoword?</h1>
        {success ? (
          <p className="flex space-x-3 text-lg text-green-500">
            Email has been send. Check Your Mail{" "}
            <Mail size={20} className="ml-3" />
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            <div className="mb-3">
              <label htmlFor="email" className="text-sm tracking-widest">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="h-13 w-full rounded-lg border pl-3 text-xl outline-none"
                autoFocus
              />
            </div>
            <button
              className="mb-5 flex h-10 w-1/2 cursor-pointer items-center justify-center rounded-lg bg-white pt-[10px] pb-[9px] text-[18px] font-bold text-black"
              disabled={loading}
              type="submit"
              // onClick={onLogin}
            >
              {loading ? (
                <Loader className="size-[18px] animate-spin" />
              ) : (
                "Send Email"
              )}
            </button>
            <Link
              href="/login"
              className="cursor-pointer text-sm hover:underline"
            >
              Back To Login
            </Link>
          </form>
        )}
      </div>
    </div>
  );
}
