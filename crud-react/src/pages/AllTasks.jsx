import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function AllTasks() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tasks")) || []
    setTasks(saved)
  }, [])

  const addTask = () => {
    if (!title) return

    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      createdAt: new Date().toLocaleDateString(),
    }

    const updated = [...tasks, newTask]
    setTasks(updated)
    localStorage.setItem("tasks", JSON.stringify(updated))
    setTitle("")
    setDescription("")
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Tasks</h1>

      {/* Add Task Card */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="font-semibold mb-4">Add New Task</h2>
        <input
          className="border rounded-lg p-2 w-full mb-3"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border rounded-lg p-2 w-full mb-3"
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add Task
        </button>
      </div>

      {/* Task Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <Link
            key={task.id}
            to={`/tasks/${task.id}`}
            className="bg-white rounded-xl border p-4 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-1">
              {task.title}
            </h3>
            <p className="text-sm text-gray-500">
              Created: {task.createdAt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AllTasks
