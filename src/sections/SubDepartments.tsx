import React from "react";

export type SubDepartment = {
  title: string;
  description: string;
  image?: string;
};

type SubDepartmentsProps = {
  subDepartments?: SubDepartment[];
  sectionTitle?: string; // Optional: allows custom section title
};

const SubDepartments: React.FC<SubDepartmentsProps> = ({
  subDepartments = [],
  sectionTitle,
}) => {
  if (subDepartments.length === 0) return null;

  return (
    <section id="departments" className="py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto">
        {sectionTitle && (
          <h3 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-white">
            {sectionTitle}
          </h3>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {subDepartments.map((dept, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 rounded-xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              {dept.image && (
                <div className="flex justify-center mb-6">
                  <img
                    src={dept.image}
                    alt={dept.title}
                    className="w-42 h-32 md:w-60 md:h-40 object-cover rounded-sm border-4 border-white shadow-lg transform hover:scale-105 transition duration-500"
                  />
                </div>
              )}

              {/* Text */}
              <h4 className="text-lg md:text-xl font-semibold mb-3 text-white">
                {dept.title}
              </h4>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {dept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubDepartments;
