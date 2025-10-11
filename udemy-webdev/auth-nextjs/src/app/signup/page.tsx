"use client";

import axios from "axios";
import { Eye, EyeClosedIcon, Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import validator from "validator";

const SignupPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isbuttonDisabled, setIsButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.fullName.length > 0 &&
      user.password.length > 0
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [user]);

  //* Handle SignUp
  const onSignUp = async () => {
    if (validator.isEmpty(user.fullName.trim())) {
      toast.error("Full Name is required");
      return;
    }
    if (!validator.isEmail(user.email)) {
      toast.error("Invalid Email Address");
      return;
    }

    // 🔹 Password validation: minimum 6 characters (example)
    if (!validator.isLength(user.password, { min: 6 })) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      toast.success(response.data.message || "SignUp Successfully");
      console.log("Signup Success", response.data);
      router.push(`/check-email?email=${encodeURIComponent(user.email)}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response && err.response?.data?.error) {
        toast.error(
          err.response?.data?.error || "Email Already Exits, Please Login",
        );
        console.log(err.response?.data?.error);
      } else {
        toast.error("Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="min-w-sm rounded-3xl border px-7 py-10">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-semibold tracking-wide">SignUp</h1>
          <p className="text-md tracking-wider">
            Please Fill the Information below
          </p>
        </div>
        <div>
          <div className="mb-3">
            <input
              type="text"
              id="fullName"
              placeholder="Full Name"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              className="w-full border-b p-2 text-lg outline-none placeholder:tracking-wider"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full border-b p-2 text-lg outline-none"
            />
          </div>
          <div className="relative mb-3">
            <input
              type={`${isPassVisible ? "text" : "password"}`}
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full border-b p-2 text-lg outline-none"
            />
            {user.password.length > 0 && (
              <button
                className="absolute top-3 right-3"
                onClick={() => setIsPassVisible((prev) => !prev)}
              >
                {isPassVisible ? (
                  <EyeClosedIcon className="size-5 cursor-pointer" />
                ) : (
                  <Eye className="size-5 cursor-pointer" />
                )}
              </button>
            )}
          </div>
          <button
            className={`mt-5 flex w-full items-center justify-center rounded-lg pt-[10px] pb-[9px] text-xl font-bold ${
              loading
                ? "bg-gray-800 text-gray-600"
                : "cursor-pointer bg-white text-black"
            }`}
            disabled={loading}
            onClick={onSignUp}
          >
            {loading ? (
              <Loader className="size-5 animate-spin text-white" />
            ) : (
              "SignUp"
            )}
          </button>
          <p className="mt-5 text-center text-stone-400">
            Already Have Account?{" "}
            <Link href={"/login"} className="text-stone-50 underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
