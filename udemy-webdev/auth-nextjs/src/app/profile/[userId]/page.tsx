"use client";

import axios from "axios";
import { Loader2 } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export const UserProfilePage = () => {
  const params = useParams();
  const userId = params?.userId;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!userId) return;
    const fetchUser = async () => {
      try {
        const res = await axios.get(`/api/users/${userId}`);
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setError(res.data.error);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="ml-3 size-10 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        {error}
      </div>
    );
  }

  if (!user)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div>User Not Found</div>
      </div>
    );

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Full Name: {user.fullName}</h1>
      <h2 className="text-xl font-bold">Email: {user.email}</h2>
      <p>UserId: {user.id}</p>
    </div>
  );
};
export default UserProfilePage;
