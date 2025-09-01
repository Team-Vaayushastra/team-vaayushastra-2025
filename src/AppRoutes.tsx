import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Planes from "./pages/Planes";
import DepartmentPage from "./pages/Departments";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/Vaayu-Website/" element={<Home />} />
      <Route path="/Vaayu-Website/about" element={<About />} />
      <Route path="/Vaayu-Website/departments/:slug" element={<DepartmentPage />} />
      <Route path="/Vaayu-Website/support-us" element={<Support />} />
      <Route path="/Vaayu-Website/planes" element={<Planes />} />
    </Routes>
  );
}

export default AppRoutes;
