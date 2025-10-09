import { connectDB } from "@/config/db";
import User from "@/modals/usersModal";

const UserProfilePage = async ({ params }: { params: { userId: string } }) => {
  await connectDB();

  const { userId } = params;

  const user = await User.findById(userId).select("-password");

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center">
        User Not Found
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Full Name: {user.fullName}</h1>
      <h2 className="text-xl font-bold">Email: {user.email}</h2>
      <p>UserId: {user._id.toString()}</p>
    </div>
  );
};
export default UserProfilePage;
