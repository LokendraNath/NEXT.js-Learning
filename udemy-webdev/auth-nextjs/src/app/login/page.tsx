"use client";

import axios from "axios";
import { Eye, EyeClosedIcon, Loader } from "lucide-react";
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
  const [isPassVisible, setIsPassVisible] = useState(false);

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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="min-w-sm rounded-3xl border px-7 py-10">
        <div className="mb-10 text-center">
          <h1 className="mb-2 text-4xl font-semibold tracking-wide">Login</h1>
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
              className="w-full border-b p-2 text-lg outline-none"
            />
          </div>
          <div className="relative mb-3">
            <input
              type="password"
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
            className={`mt-8 flex w-full items-center justify-center rounded-lg pt-[10px] pb-[9px] text-xl font-bold ${
              isbuttonDisabled
                ? "bg-gray-800 text-gray-600"
                : "cursor-pointer bg-white text-black"
            }`}
            disabled={loading || isbuttonDisabled}
            onClick={onLogin}
          >
            {loading ? <Loader className="size-7 animate-spin" /> : "Login"}
          </button>

          <Link href="/forget-password" className="mt-5 flex justify-center">
            <button className="cursor-pointer text-center text-stone-400 hover:underline">
              Forget Password
            </button>
          </Link>

          <p className="mt-5 text-center text-stone-400">
            Not Have Account?{" "}
            <Link href={"/signup"} className="text-stone-50 underline">
              SignUp
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
