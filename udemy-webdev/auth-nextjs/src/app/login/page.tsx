"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    console.log("Signup Click");
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="py-10 px-7 min-w-sm rounded-3xl border">
        <div className="text-center mb-10">
          <h1 className="text-4xl mb-2 font-semibold tracking-wide">Login</h1>
          <p className="text-md tracking-wider">
            Please Fill the Information below
          </p>
        </div>
        <form onSubmit={handleSubmit}>
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

          <button className="mt-8 w-full bg-white text-black pt-[10px] pb-[9px] rounded-lg text-xl font-bold">
            Login
          </button>
          <p className="mt-5 text-center text-stone-400">
            Not Have Account?{" "}
            <Link href={"/signup"} className="underline text-stone-50">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
