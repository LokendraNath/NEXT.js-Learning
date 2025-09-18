import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex justify-between px-10">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="space-x-3">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </div>
      </ul>
    </nav>
  );
};
export default Navbar;
