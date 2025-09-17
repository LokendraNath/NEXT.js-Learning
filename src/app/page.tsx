import {
  ArrowUpRight,
  LayoutDashboard,
  LucideSquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100
       flex flex-col items-center justify-center p-6"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-6">
          Welcome To Dashboard App 🙏🙏
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Manage your tasks, track analytics, and stay organized with our
          powerful dashboard.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center bg-indigo-600
           text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-900
            transition-colors shadow-lg hover:shadow-xl"
        >
          Go to Dashboard <ArrowUpRight className="ml-2" width={20} />
        </Link>
      </div>
    </div>
  );
};
export default Home;
