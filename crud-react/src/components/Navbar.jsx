import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#424874] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-[#DCD6F7] font-extrabold text-2xl">Task App</span>
        <div className="flex gap-6 text-sm">
          {["/", "/tasks", "/users", "/about"].map((path, i) => {
            const names = ["Home", "Tasks", "Users", "About"];
            return (
              <NavLink
                key={i}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#A6B1E1] font-bold"
                    : "text-[#DCD6F7] hover:text-[#A6B1E1] transition"
                }
              >
                {names[i]}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
