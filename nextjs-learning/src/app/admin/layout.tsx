import Link from "next/link";
import { ReactNode } from "react";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="py-3 bg-gray-900 text-white">
        <nav className="flex items-center justify-between px-10">
          <h1>Admin Page</h1>
          <ul className="flex space-x-3">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Portfolio</Link>
            </li>
            <li>
              <Link href="/users">Login as User</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-gray-800 w-64 text-white">
          <ul>
            <li>
              <Link href="/admin/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/admin/users">Users</Link>
            </li>
            <li>
              <Link href="/admin/settings">Settings</Link>
            </li>
          </ul>
        </aside>
        {/* Main */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};
export default AdminLayout;
