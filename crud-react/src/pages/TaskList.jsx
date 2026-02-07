import { useState, useEffect } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(saved);
  }, []);

  const deleteTask = (id) => {
    const filtered = tasks.filter((t) => t.id !== id);
    setTasks(filtered);
    localStorage.setItem("tasks", JSON.stringify(filtered));
  };

  const editTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    const newTitle = prompt("Edit task title", task.title);
    const newDesc = prompt("Edit task description", task.description);
    if (newTitle !== null && newDesc !== null) {
      const updated = tasks.map((t) =>
        t.id === id ? { ...t, title: newTitle, description: newDesc } : t
      );
      setTasks(updated);
      localStorage.setItem("tasks", JSON.stringify(updated));
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-3xl space-y-6">
        <h2 className="text-4xl font-extrabold text-center text-[#424874]">Task List</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="bg-[#DCD6F7] p-6 rounded-3xl shadow-lg hover:shadow-2xl transition flex flex-col justify-between"
            >
              <div>
                <h3 className="font-semibold text-xl text-[#424874] mb-2">{task.title}</h3>
                <p className="text-[#424874] text-sm mb-2">{task.description}</p>
                <span className="text-xs bg-[#A6B1E1] text-[#424874] px-2 py-1 rounded-full">
                  Created: {task.createdAt}
                </span>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  className="px-3 py-1 bg-[#424874] text-[#DCD6F7] rounded hover:bg-[#A6B1E1] transition text-sm"
                  onClick={() => editTask(task.id)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-sm"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
