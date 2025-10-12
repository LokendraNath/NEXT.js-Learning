"use client";
export const dynamic = "force-dynamic";

import axios from "axios";
import { Eye, EyeClosedIcon, KeyRoundIcon, Loader } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function UpdatePasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isNewPassVisible, setIsPassVisible] = useState(false);
  const [isCnfrmPassVisible, setIsConfirmPassVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit() {
    if (newPassword !== confirmPassword) {
      setError("Password Is Not Match");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await axios.post("/api/users/update-password", {
        token,
        newPassword,
      });
      toast.success(response?.data?.message || "Password Updated Successfully");
      if (response.data.success) {
        setSuccess(true);
      }
      setTimeout(() => {
        router.push("/login");
      }, 2000);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.error);
      // console.log("data-", response?.data?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <KeyRoundIcon className="mb-5 size-10" />

        <h1 className="mb-10 text-4xl font-bold">Update Password</h1>
        <div className="flex min-w-sm flex-col items-center justify-center px-10">
          {!success ? (
            <>
              <div className="relative w-full">
                <input
                  type={`${isNewPassVisible ? "text" : "password"}`}
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mb-3 w-full rounded-xl border p-2 pl-3 text-lg outline-none"
                />
                {newPassword.length > 0 && (
                  <button
                    className="absolute top-3 right-3"
                    onClick={() => setIsPassVisible((prev) => !prev)}
                  >
                    {isNewPassVisible ? (
                      <EyeClosedIcon className="size-5 cursor-pointer" />
                    ) : (
                      <Eye className="size-5 cursor-pointer" />
                    )}
                  </button>
                )}
              </div>
              <div className="relative w-full">
                <input
                  type={`${isCnfrmPassVisible ? "text" : "password"}`}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  className="w-full rounded-xl border p-2 pl-3 text-lg outline-none"
                />
                {confirmPassword.length > 0 && (
                  <button
                    className="absolute top-3 right-3"
                    onClick={() => setIsConfirmPassVisible((prev) => !prev)}
                  >
                    {isCnfrmPassVisible ? (
                      <EyeClosedIcon className="size-5 cursor-pointer" />
                    ) : (
                      <Eye className="size-5 cursor-pointer" />
                    )}
                  </button>
                )}
              </div>
              {error.length > 0 && (
                <p className="mt-3 text-center text-red-500">{error}</p>
              )}
              <button
                className="mt-8 flex w-60 cursor-pointer items-center justify-center self-center rounded-lg bg-white pt-[10px] pb-[9px] text-xl font-bold text-black"
                disabled={loading}
                onClick={handleSubmit}
              >
                {loading ? (
                  <Loader className="size-7 animate-spin" />
                ) : (
                  "Update Password"
                )}
              </button>
            </>
          ) : (
            <>
              <h1 className="text-lg text-green-500">
                Password Updated Successfull, Go To Login Page
              </h1>
              <Link
                href="/login"
                className="mt-8 flex w-60 cursor-pointer items-center justify-center self-center rounded-lg bg-white pt-[10px] pb-[9px] text-xl font-bold text-black"
              >
                Go To Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
