const UserProfilePage = ({ params }: { params: { userId: string } }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">
        UserId:{" "}
        <span className="bg-orange-400 text-black p-3 rounded-xl">
          {params.userId}
        </span>
      </h1>
    </div>
  );
};
export default UserProfilePage;
