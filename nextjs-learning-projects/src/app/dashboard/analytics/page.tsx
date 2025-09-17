import { ArrowDownRight, ArrowUpRight } from "lucide-react";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    { title: "Active Users", value: "1,200", change: "-8%", isPositive: false },
    {
      title: "Website Visits",
      value: "6,200",
      change: "+5%",
      isPositive: true,
    },
    { title: "New Sign-Ups", value: "350", change: "+18%", isPositive: true },
  ];
  const websiteVisits = metrics.find((m) => m.title === "Website Visits");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-4 pb-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent mb-10 text-center">
          Analytics Dashboard
        </h1>
        {/* Overview Matrix Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-white rounded-lg
                 shadow-md p-6 border-l-4 ${
                   metric.isPositive ? "border-green-500" : "border-red-500"
                 }`}
            >
              <div>
                <h3 className="text-lg font-semibold tracking-wider text-gray-700">
                  {metric.title}
                </h3>
                <p className="text-3xl  text-black font-bold">{metric.value}</p>
              </div>
              <div className="text-right">
                <p
                  className={`border px-2 flex rounded-full ${
                    metric.isPositive
                      ? "text-green-700 bg-green-100"
                      : "text-red-700 bg-red-100"
                  }`}
                >
                  {metric.change}
                  {metric.isPositive ? (
                    <ArrowUpRight width={20} />
                  ) : (
                    <ArrowDownRight width={20} />
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Chart Section (Placeholder for Graph) */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Total Revenue
          </h2>
          <div className="bg-gray-100 rounded-lg h-72">Chart Placeholder</div>
        </div>
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Website Traffic
          </h2>
          <div className="bg-gray-100 rounded-lg h-72">Chart Placeholder</div>
        </div>
        {/* Recent Activitis */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Recent Activities
          </h2>
          <ul className="space-y-4">
            <li
              className="flex items-center justify-between bg-white
             rounded-lg shadow-md py-2 px-6"
            >
              <div>
                <h3 className="text-lg text-gray-700 font-semibold">
                  User Ragistration
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  New User SignIn (till - 2026-07-24)
                </p>
              </div>
              <div>
                <p className="text-lg text-green-700 font-bold">+50 Users</p>
              </div>
            </li>
            <li
              className="flex items-center justify-between bg-white
             rounded-lg shadow-md py-2 px-6"
            >
              <div>
                <h3 className="text-lg text-gray-700 font-semibold">
                  Sales Increase
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Sales Grew by 16% on 2026-07-24
                </p>
              </div>
              <div>
                <p className="text-lg text-green-700 font-bold">+$2,400</p>
              </div>
            </li>
            <li
              className="flex items-center justify-between bg-white
             rounded-lg shadow-md py-2 px-6"
            >
              <div>
                <h3 className="text-lg text-gray-700 font-semibold">
                  Website Search Traffic
                </h3>
                <p className="text-sm text-gray-600 font-light">
                  Website Search Decrease by -5% on 2026-09-23
                </p>
              </div>
              <div>
                <p className="text-lg text-red-700 font-bold">-1567 Visits</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Analytics;
