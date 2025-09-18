"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => router.push("/about")}
        className="btn bg-green-400"
      >
        Go To About
      </button>
      <button
        onClick={() => router.push("/portfolio")}
        className="btn bg-red-600"
      >
        Go To Portfolio
      </button>
    </div>
  );
};
export default Home;
