"use client";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();

  return (
    <div>
      <h1>This is about section</h1>
      <button className="btn bg-yellow-300" onClick={() => router.back()}>
        Back
      </button>
    </div>
  );
};
export default About;
