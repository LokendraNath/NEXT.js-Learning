"use client";
import { useRouter } from "next/navigation";

const Page2 = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome To Page2</h1>
      <button className="btn bg-green-500" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
};
export default Page2;
