"use client";

import axios from "axios";
import { Loader, Loader2 } from "lucide-react";
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
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      const response = await axios.get("/api/users/logout");
      toast.success(response.data.message);
      router.push("/login");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Logout Failed");
    } finally {
      setLogoutLoading(false);
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
        <Loader2 className="ml-3 size-10 animate-spin" />
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-5 text-4xl">Profile Page</h1>

      {userData ? (
        <button
          onClick={() => router.push(`/profile/${userData._id}`)}
          className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border px-10 py-5"
        >
          <h1 className="text-4xl">Welcome, {userData.fullName} 👋</h1>
          <h3 className="text-xl font-bold">{userData.email}</h3>
          <p className="mt-3 text-sm text-green-500">
            Note: Click Here For View User Profile
          </p>
        </button>
      ) : (
        <h1 className="my-5 flex items-center text-center text-xl font-bold text-red-600">
          Nothing
        </h1>
      )}
      <button
        onClick={handleLogout}
        className="mt-5 flex cursor-pointer rounded-lg bg-red-500 p-2 text-lg hover:bg-red-800"
      >
        {logoutLoading ? <Loader className="size-7 animate-spin" /> : "LogOut"}
      </button>
    </div>
  );
};
export default ProfilePage;
