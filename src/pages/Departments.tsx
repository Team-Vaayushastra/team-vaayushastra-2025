// src/pages/DepartmentPage.tsx
import { useParams } from "react-router-dom";
import DeptHero from "../sections/DeptHero";
import Team from "../sections/DeptMembers";
import { departmentData } from "../data/department";
import SubDepartments from "@/sections/SubDepartments";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import SupportUsButton from "@/components/SupportUsButton";

const DepartmentPage = () => {
  const { slug } = useParams();
  const department = slug ? departmentData[slug] : null;
  console.log("Department slug:", slug);

  if (!department) {
    return (
      <div className="p-10 text-center text-red-500 text-xl">
        Department not found
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div
        className={`bg-gradient-to-r from-blue-500 to-black min-h-screen text-white`}
      >
        {department.hero && (
          <DeptHero
            title={department.hero.heading}
            paragraphs={department.hero.paragraphs}
            image={department.image}
          />
        )}

        <div
          className={`container mx-auto max-w-7xl py-10 text-center bg-${department.color} backdrop-blur rounded-md`}
        >
          <p className="text-xl md:text-3xl px-20 font-semibold font-montserrat">
            {department.description}
          </p>
        </div>

        <SubDepartments
          subDepartments={department.subDepartments}
          sectionTitle={`Departments in ${department.title}`}
        />
        <Team team={department.team} />
      </div>
      <SupportUsButton />
      <Footer />
    </div>
  );
};

export default DepartmentPage;
