"use client";
import { useRouter } from "next/navigation";

const Portfolio = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is my portfolio</h1>
      <button className="btn bg-teal-500" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
};
export default Portfolio;
