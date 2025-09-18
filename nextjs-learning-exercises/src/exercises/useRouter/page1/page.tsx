"use client";
import { useRouter } from "next/navigation";

const Page1 = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome To Page 1</h1>
      <button className="btn bg-green-500" onClick={() => router.back()}>
        Back
      </button>
      <button className="btn bg-blue-500" onClick={() => router.push("/page2")}>
        Page2
      </button>
    </div>
  );
};
export default Page1;
