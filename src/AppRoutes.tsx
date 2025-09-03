import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Planes from "./pages/Planes";
import DepartmentPage from "./pages/Departments";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/team-vaayushastra-2025/" element={<Home />} />
      <Route path="/team-vaayushastra-2025/about" element={<About />} />
      <Route path="/team-vaayushastra-2025/departments/:slug" element={<DepartmentPage />} />
      <Route path="/team-vaayushastra-2025/support-us" element={<Support />} />
      <Route path="/team-vaayushastra-2025/planes" element={<Planes />} />
    </Routes>
  );
}

export default AppRoutes;
