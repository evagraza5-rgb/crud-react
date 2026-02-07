import { useState, useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignedUser, setAssignedUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const addTask = () => {
    if (!title || !date) {
      alert("Please fill in both title and due date.");
      return;
    }

    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      date,
      assignedUser,
      status: "Pending",
      createdAt: new Date().toLocaleDateString(),
    };

    const saved = JSON.parse(localStorage.getItem("tasks")) || [];
    saved.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(saved));

    setTitle("");
    setDescription("");
    setDate("");
    setAssignedUser("");
    alert("Task added!");
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md bg-[#DCD6F7] p-10 rounded-3xl shadow-2xl space-y-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#424874] mb-6">
          Add Task
        </h2>

        <input
          className="w-full mb-3 p-3 rounded-lg border border-[#CACFD6] focus:ring-2 focus:ring-[#A6B1E1]"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="w-full mb-3 p-3 rounded-lg border border-[#CACFD6] focus:ring-2 focus:ring-[#A6B1E1]"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          className="w-full mb-3 p-3 rounded-lg border border-[#CACFD6] focus:ring-2 focus:ring-[#A6B1E1]"
          value={assignedUser}
          onChange={(e) => setAssignedUser(e.target.value)}
        >
          <option value="">Assign to user</option>
          {users.map((u) => (
            <option key={u.id} value={u.name}>
              {u.name}
            </option>
          ))}
        </select>
        <textarea
          className="w-full mb-4 p-3 rounded-lg border border-[#CACFD6] focus:ring-2 focus:ring-[#A6B1E1]"
          placeholder="Details"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className="w-full bg-[#424874] text-[#DCD6F7] py-3 rounded-lg hover:bg-[#A6B1E1] font-semibold transition"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}
