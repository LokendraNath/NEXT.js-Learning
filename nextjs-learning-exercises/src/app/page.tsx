import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus,
        quam!
      </p>

      <Link href={"/dashboard"}>Go To Dashboard</Link>
    </div>
  );
};
export default Home;
