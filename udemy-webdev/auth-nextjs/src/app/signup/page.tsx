"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [isbuttonDisabled, setIsButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

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
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
      toast.success("SignUp Successfully");
      console.log("Signup Success", response.data);
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log("Error in Signup", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="py-10 px-7 min-w-sm rounded-3xl border">
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-2 font-semibold tracking-wide">SignUp</h1>
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
              className="w-full border-b p-2 outline-none text-lg placeholder:tracking-wider"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="w-full border-b p-2 outline-none text-lg"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full border-b p-2 outline-none text-lg"
            />
          </div>
          <p
            className={`${
              isbuttonDisabled
                ? "block text-center text-red-600 text-sm tracking-wider mt-8"
                : "hidden"
            }`}
          >
            Please Enter All Feilds
          </p>
          <button
            className={`w-full  pt-[10px] pb-[9px] rounded-lg text-xl font-bold ${
              loading
                ? "bg-gray-800 text-gray-600 mt-3"
                : "bg-white text-black mt-8 cursor-pointer"
            }`}
            disabled={loading || isbuttonDisabled}
            onClick={onSignUp}
          >
            Sign Up
          </button>
          <p className="mt-5 text-center text-stone-400">
            Already Have Account?{" "}
            <Link href={"/login"} className="underline text-stone-50">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default SignupPage;
