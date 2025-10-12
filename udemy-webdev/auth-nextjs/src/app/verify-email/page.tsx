"use client";
export const dynamic = "force-dynamic";
import axios, { AxiosError } from "axios";
import { Loader2, MailCheckIcon, MailXIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [token, setToken] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const verifyUserEmail = useCallback(async () => {
    if (!token) return;

    setStatus("loading");
    setMessage("");

    try {
      const { data } = await axios.post("/api/users/verifyemail", { token });
      const msg = data?.message ?? "Email verified successfully";
      toast.success(msg);
      setMessage(msg);
      setStatus("success");
      setTimeout(() => router.push("/login"), 2000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const axiosErr = error as AxiosError<any>;
      const msg =
        axiosErr?.response?.data?.error ??
        axiosErr?.message ??
        "Something went wrong";
      toast.error(msg);
      setMessage(msg);
      setStatus("error");
    }
  }, [token, router]);

  // Read token from URL once
  useEffect(() => {
    const urlToken = searchParams.get("token");
    if (!urlToken) {
      setMessage("Verification token not found in the URL.");
      setStatus("error");
      return;
    }
    setToken(urlToken);
  }, [searchParams]);

  useEffect(() => {
    if (token) verifyUserEmail();
  }, [token, verifyUserEmail]);

  if (status === "loading" || status === "idle") {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center space-y-3">
        <Loader2 className="size-10 animate-spin" />
        <p className="text-sm text-gray-600">
          Verifying your email — please wait...
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      {status === "success" ? (
        <div className="flex flex-col items-center">
          <MailCheckIcon className="mb-6 h-20 w-20 text-green-500" />
          <h1 className="mb-3 text-4xl font-bold">Email Verified</h1>
          <p className="mb-6 text-center text-lg tracking-wider">{message}</p>
          <Link
            href="/login"
            className="rounded-lg bg-white px-4 py-2 text-lg font-semibold text-black"
          >
            Go to Login
          </Link>
        </div>
      ) : status === "error" ? (
        <div className="flex flex-col items-center">
          <MailXIcon className="mb-6 h-20 w-20 text-red-500" />
          <h1 className="mb-3 text-3xl font-bold text-red-600">
            Verification Failed
          </h1>
          <p className="mb-4 max-w-md text-center text-sm text-gray-600">
            {message || "Something went wrong while verifying your email."}
          </p>
        </div>
      ) : null}
    </div>
  );
}
