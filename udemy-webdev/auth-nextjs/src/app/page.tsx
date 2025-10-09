import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl">Next Js Auth</h1>
      <Link href="/profile">
        <button className="bg-green-500 p-3 mt-5 rounded-lg font-bold cursor-pointer">
          Go To Profile
        </button>
      </Link>
    </div>
  );
};
export default page;
