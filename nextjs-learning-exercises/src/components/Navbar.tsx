import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <h1>Logo</h1>
      <ul className="space-x-3">
        <Link href="/">Home</Link>
        <Link href="/sales">Sales</Link>
        <Link href="/users">Users</Link>
        <Link href={"/profile"}>Profile</Link>
      </ul>
    </nav>
  );
};
export default Navbar;
