import {
  CircleCheck,
  CircleCheckBig,
  CircleIcon,
  EditIcon,
  Trash2Icon,
} from "lucide-react";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      title: "Finish project report",
      description: "Complete the final report for the project and submit it.",
      status: "In Progress",
      dueDate: "2025-02-18",
    },
    {
      id: 2,
      title: "Update website content",
      description: "Revise the homepage text to reflect recent changes.",
      status: "Pending",
      dueDate: "2025-02-20",
    },
    {
      id: 3,
      title: "Team meeting",
      description: "Discuss the project milestones and progress with the team.",
      status: "Completed",
      dueDate: "2025-02-15",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-700 to-blue-800 bg-clip-text text-transparent mb-8 text-center">
          Tasks
        </h1>

        {/* Task List Section */}
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center justify-between bg-white rounded-lg 
              shadow-md p-6 border-l-4 mb-4 ${
                task.status === "Completed" && "opacity-70"
              }`}
            style={{
              borderColor:
                task.status === "Completed"
                  ? "green"
                  : task.status === "In Progress"
                  ? "yellow"
                  : "red",
            }}
          >
            <div className="flex flex-col">
              <h1 className="text-xl font-semibold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {task.title}
              </h1>
              <p className="text-sm text-gray-500 mt-2">{task.description}</p>
              <p className="text-sm text-gray-500 mt-2">
                Due Data: {task.dueDate}
              </p>
            </div>
            <div className="flex space-x-6">
              <span
                className={`px-4 py-2 text-center text-sm rounded-xl font-semibold border ${
                  task.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : task.status === "In Progress"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {task.status}
              </span>
              <button className="cursor-pointer ">
                {task.status === "Completed" ? (
                  <CircleCheckBig className="text-green-600" />
                ) : task.status === "In Progress" ? (
                  <CircleIcon className="text-yellow-600" />
                ) : (
                  <CircleIcon className="text-red-600" />
                )}
              </button>
              <button
                className="px-2 text-white bg-blue-600
                 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <EditIcon />
              </button>
              <button
                className="px-2 text-white bg-red-600
                 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Trash2Icon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tasks;
