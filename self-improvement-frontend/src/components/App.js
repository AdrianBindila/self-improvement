import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./modules/auth/Login";
import Register from "./modules/auth/Register"
import AdminPanel from "./modules/admin/AdminPanel";
import Tasks from "./modules/tasks/Tasks";
import Blog from "./modules/blog/Blog";
import Hydration from "./modules/hydration/Hydration";

import Composer from "./modules/blog/components/Composer";
import Dashboard from "./modules/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/*" element={<AdminPanel />} />
        <Route path="/tasks/*" element={<Tasks />} />
        <Route path="/blog/" element={<Blog />} />
        <Route path="/blog/compose" element={<Composer />} />
        <Route path="/hydration" element={<Hydration />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
