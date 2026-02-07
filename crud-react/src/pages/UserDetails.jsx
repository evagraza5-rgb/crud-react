import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || []
    const found = users.find((u) => u.id === id)
    setUser(found)
  }, [id])

  if (!user) {
    return <p className="p-6">User not found.</p>
  }

  return (
    <div className="p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-700">{user.email}</p>
      </div>
    </div>
  )
}

export default UserDetails
