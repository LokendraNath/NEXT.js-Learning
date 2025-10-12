"use client";

import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserData {
  _id: string;
  fullName?: string;
  email?: string;
}

const ProfilePage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<null | UserData>(null);
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success(response.data.message);
      router.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Logout Failed");
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/users/me");
        setUserData(res.data);

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        toast.error("Failed To Featch User");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader className="ml-3 size-10 animate-spin" />
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-5 text-5xl">Profile Page</h1>

      {userData ? (
        <Link
          href={`/profile/${userData._id}`}
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border p-2"
        >
          <h1 className="test-2xl">Welcome {userData.fullName} 👋</h1>
          <h3 className="text-xl font-bold">{userData.email}</h3>
        </Link>
      ) : (
        <h1 className="my-5 flex items-center text-center text-xl font-bold text-red-600">
          Nothing
        </h1>
      )}
      <button
        onClick={handleLogout}
        className="mt-5 cursor-pointer rounded-lg bg-red-500 p-2 text-lg hover:bg-red-800"
      >
        LogOut
      </button>
    </div>
  );
};
export default ProfilePage;
