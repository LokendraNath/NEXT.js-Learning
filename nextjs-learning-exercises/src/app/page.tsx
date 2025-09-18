"use client";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is use Router Exercise</h1>
      <button
        className="btn bg-purple-500"
        onClick={() => router.push("/page1")}
      >
        Go To Page1
      </button>
    </div>
  );
};
export default Home;
