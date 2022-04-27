import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import Register from "./Register";
import AdminPanel from "./AdminPanel";
import Tasks from "./modules/tasks/Tasks";
import Blog from "./modules/blog/Blog";
import Hydration from "./modules/hydration/Hydration";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/tasks/*" element={<Tasks />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/hydration/*" element={<Hydration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
