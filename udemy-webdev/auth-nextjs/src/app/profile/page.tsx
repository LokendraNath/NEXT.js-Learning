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
      <div className="min-h-screen flex items-center justify-center">
        <Loader className="ml-3 size-10 animate-spin" />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-5">Profile Page</h1>

      {userData ? (
        <Link
          href={`/profile/${userData._id}`}
          className="border p-2 flex flex-col items-center justify-center cursor-pointer"
        >
          <h1 className="text-2xl font-bold">Email: {userData.email}</h1>
          <h3 className="test-xl">FullName: {userData.fullName}</h3>
        </Link>
      ) : (
        <h1 className="text-center text-xl font-bold text-red-600 flex items-center my-5">
          Nothing
        </h1>
      )}
      <button
        onClick={handleLogout}
        className="p-2 bg-red-500 text-lg rounded-lg mt-5 cursor-pointer hover:bg-red-800"
      >
        LogOut
      </button>
      <button className="p-2 bg-red-500 text-lg rounded-lg mt-5 cursor-pointer hover:bg-red-800">
        Get User Data
      </button>
    </div>
  );
};
export default ProfilePage;
