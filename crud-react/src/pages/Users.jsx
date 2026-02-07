import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(saved);
  }, []);

  const addUser = () => {
    if (!name) return;
    const newUser = { id: crypto.randomUUID(), name };
    const updated = [...users, newUser];
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
    setName("");
  };

  const deleteUser = (id) => {
    const filtered = users.filter((u) => u.id !== id);
    setUsers(filtered);
    localStorage.setItem("users", JSON.stringify(filtered));
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl p-6 bg-[#DCD6F7] rounded-3xl shadow-2xl space-y-4">
        <h2 className="text-4xl font-extrabold text-center text-[#424874] mb-4">Users</h2>

        <div className="flex gap-2 mb-4">
          <input
            className="flex-1 p-3 rounded-lg border border-[#CACFD6] focus:ring-2 focus:ring-[#A6B1E1]"
            placeholder="Add new user"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="bg-[#424874] text-[#DCD6F7] px-4 rounded-lg hover:bg-[#A6B1E1]"
            onClick={addUser}
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="bg-[#A6B1E1] text-[#424874] rounded-xl p-4 flex justify-between items-center shadow hover:shadow-lg transition"
            >
              {user.name}
              <button
                className="bg-red-500 px-2 py-1 rounded text-white hover:bg-red-600 text-sm"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
