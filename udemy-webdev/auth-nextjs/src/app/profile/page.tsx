"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      toast.success(response.data.message);
      router.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl">Profile Page</h1>
      <button
        onClick={handleLogout}
        className="p-2 bg-red-500 text-lg rounded-lg mt-5 cursor-pointer hover:bg-red-800"
      >
        LogOut
      </button>
    </div>
  );
};
export default ProfilePage;
