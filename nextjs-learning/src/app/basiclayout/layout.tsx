import Link from "next/link";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col text-white bg-[#0A0A0A]">
      {/* Header */}
      <header className="py-3 border-b border-gray-100">
        <nav className="flex items-center justify-between px-10">
          <h1 className="text-3xl font-bold">Basic Layout</h1>
          <ul className="flex space-x-5">
            <li>
              <Link href="/basiclayout">Homepage</Link>
            </li>
            <li>
              <Link href="/basiclayout/about">About</Link>
            </li>
            <li>
              <Link href="/basiclayout/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      {/* Main */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 p-5 border-r border-gray-100">
          <h1>Categories</h1>
          <ul>
            <li>
              <Link href="/basiclayout">- Technology</Link>
            </li>
            <li>
              <Link href="/basiclayout/about">- Design</Link>
            </li>
            <li>
              <Link href="/basiclayout/about">- Business</Link>
            </li>
          </ul>
        </aside>
        {/* Main Container */}
        <main className="flex-1 p-5">
          <div>{children}</div>
        </main>
      </div>
      {/* Footer */}
      <footer className="text-center border-t border-gray-100">
        © 2025 Lokendra Nath. All rights reserved.
      </footer>
    </div>
  );
};
export default Layout;
