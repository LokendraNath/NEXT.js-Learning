"use client";

import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [isbuttonDisabled, setIsButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      if (response.data.success) {
        toast.success(response.data.message);
        router.push("/profile");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      if (err.response) {
        toast.error(err.response?.data?.error || "Login Failed");
      } else {
        toast.error("Something went wrong!, Please Try Again Later");
      }
    } finally {
      setLoading(false);
    }
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
        <div>
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

          <button
            className={`w-full mt-8  pt-[10px] pb-[9px] rounded-lg text-xl font-bold flex items-center justify-center ${
              isbuttonDisabled
                ? "bg-gray-800 text-gray-600"
                : "bg-white text-black cursor-pointer"
            }`}
            disabled={loading || isbuttonDisabled}
            onClick={onLogin}
          >
            {loading ? <Loader className="size-7 animate-spin" /> : "Login"}
          </button>
          <p className="mt-5 text-center text-stone-400">
            Not Have Account?{" "}
            <Link href={"/signup"} className="underline text-stone-50">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
