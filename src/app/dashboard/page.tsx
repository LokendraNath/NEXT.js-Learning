import {
  LayoutDashboardIcon,
  PanelTopIcon,
  PaperclipIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4 sm:mb-0">
              DashBoard
            </h1>
          </Link>
          <p className="text-lg text-gray-600 mt-3">
            Welcome back! Here you can manage your tasks, view analytics, and
            make adjustments.
          </p>
        </div>
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Task Card */}
          <Link
            href="dashboard/tasks"
            className="bg-blue-100 hover:bg-blue-200 p-6 rounded-xl
             shadow-md hover:shadow-xl transition-all duration-200
              ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-blue-800">Tasks</h2>
              <span className="text-blue-500 text-2xl">
                <PanelTopIcon />
              </span>
            </div>
            <p className="text-stone-600 mt-5">
              View, organize, and manage your daily tasks.
            </p>
          </Link>
          {/* Analytics Card */}
          <Link
            href="dashboard/analytics"
            className="bg-green-100 hover:bg-green-200 p-6 rounded-xl
             shadow-md hover:shadow-xl transition-all duration-200
              ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-green-800">
                Analytics
              </h2>
              <span className="text-green-500 text-2xl">
                <LayoutDashboardIcon />
              </span>
            </div>
            <p className="text-stone-600 mt-5">
              Gain insights into your performance and trends.
            </p>
          </Link>
          {/* Settings Card */}
          <Link
            href="dashboard/settings"
            className="bg-gray-100 hover:bg-gray-200 p-6 rounded-xl
             shadow-md hover:shadow-xl transition-all duration-200
              ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-800">Settings</h2>
              <span className="text-gray-500 text-2xl">
                <SettingsIcon />
              </span>
            </div>
            <p className="text-gray-700 mt-5">
              Customize and tweak your dashboard settings.
            </p>
          </Link>
          {/* Users Card */}
          <Link
            href="dashboard/users"
            className="bg-yellow-100 hover:bg-yellow-200 p-6 rounded-xl
             shadow-md hover:shadow-xl transition-all duration-200
              ease-in-out transform hover:scale-105"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-yellow-800">Users</h2>
              <span className="text-yellow-500 text-2xl">
                <UserIcon />
              </span>
            </div>
            <p className="text-yellow-700 mt-5">
              View and manage your user base. For Grow Your Business
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
