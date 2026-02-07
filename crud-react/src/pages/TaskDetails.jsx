import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const found = savedTasks.find((t) => t.id === id);
    setTask(found);
  }, [id]);

  if (!task) {
    return (
      <div className="flex justify-center mt-10">
        <div className="bg-[#DCD6F7] p-6 rounded-xl shadow-lg text-[#424874]">
          <p className="text-center">Task not found.</p>
          <Link
            to="/tasks"
            className="mt-4 inline-block text-[#A6B1E1] hover:underline"
          >
            Back to Task List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-xl bg-[#DCD6F7] rounded-3xl p-8 shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-[#424874] mb-6">
          {task.title}
        </h2>

        <div className="bg-[#CACFD6] rounded-xl p-6 text-[#424874] space-y-3">
          <p className="text-lg">{task.description || "No details provided."}</p>
          {task.assignedUser && (
            <p>
              <strong>Assigned to:</strong> {task.assignedUser}
            </p>
          )}
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`font-semibold ${
                task.status === "Done"
                  ? "text-green-600"
                  : task.status === "In Progress"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {task.status}
            </span>
          </p>
          <p>
            <strong>Due Date:</strong> {task.date}
          </p>
          <p className="text-sm text-gray-500">
            Created: {task.createdAt}
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/tasks"
            className="text-[#A6B1E1] hover:underline font-semibold"
          >
            ← Back to Task List
          </Link>
        </div>
      </div>
    </div>
  );
}
