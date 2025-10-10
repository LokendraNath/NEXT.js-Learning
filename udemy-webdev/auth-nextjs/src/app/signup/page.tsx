"use client";

import axios from "axios";
import { Loader } from "lucide-react";
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
      toast.success(response.data.message || "SignUp Successfully");
      console.log("Signup Success", response.data);
      router.push(`/check-email?email=${encodeURIComponent(user.email)}`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response && err.response?.data?.error) {
        toast.error(
          err.response?.data?.error || "Email Already Exits, Please Login"
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
                ? "block text-center text-red-600 text-sm tracking-wider mt-3"
                : "hidden"
            }`}
          >
            Please Enter All Feilds
          </p>
          <button
            className={`w-full mt-5  pt-[10px] pb-[9px] rounded-lg text-xl font-bold flex items-center justify-center ${
              loading
                ? "bg-gray-800 text-gray-600"
                : "bg-white text-black cursor-pointer"
            }`}
            disabled={loading || isbuttonDisabled}
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
