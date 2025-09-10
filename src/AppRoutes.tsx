import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Support from "./pages/Support";
import Planes from "./pages/Planes";
import DepartmentPage from "./pages/Departments";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/departments/:slug" element={<DepartmentPage />} />
      <Route path="/support-us" element={<Support />} />
      <Route path="/planes" element={<Planes />} />
    </Routes>
  );
}

export default AppRoutes;
