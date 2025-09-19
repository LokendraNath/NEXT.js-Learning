import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ul className="mb-10">
        <li>
          <Link href="/login/loginadmin">Login As Admin</Link>
        </li>
        <li>
          <Link href="/login/loginuser">Login As User</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};
export default Layout;
