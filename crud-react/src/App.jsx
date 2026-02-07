import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TaskList from "./pages/TaskList";
import Users from "./pages/Users";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen w-full bg-[#D6E5E3] font-sans">
      <Navbar />
      <div className="pt-28 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskList />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
