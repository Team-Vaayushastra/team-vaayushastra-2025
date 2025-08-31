import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { departmentData } from "../data/department";

const ScrollStory = () => {
  const sections = Object.values(departmentData);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollTimeout.current) return;

    if (e.deltaY > 0) {
      // scroll down → next department
      setActiveIndex((prev) => Math.min(prev + 1, sections.length - 1));
    } else {
      // scroll up → previous department
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }

    // Add a short delay to slow down scroll
    scrollTimeout.current = setTimeout(() => {
      scrollTimeout.current = null;
    }, 600);
  };

  const activeSection = sections[activeIndex];

  return (
    <section
      className="flex max-w-7xl mx-auto px-5 h-[70%] lg:h-100"
      onWheel={handleWheel}
    >
      {/* Left Image */}
      <div className="hidden md:block w-1/3 sticky top-0 h-full flex items-center justify-center bg-black">
        <img
          src={activeSection.image}
          alt={activeSection.title}
          className="h-full rounded-xl shadow-xl object-contain transition-all duration-700"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-2/3 h-full px-4 flex flex-col justify-center">
        <div
          className={`flex flex-col justify-between transition-colors duration-700 ${activeSection.bgColor} rounded-2xl p-6`}
        >
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              {activeSection.title}
            </h2>
            <p className="text-base md:text-lg mb-6">
              {activeSection.description}
            </p>

            {/* Subdepartments */}
            <div className="flex flex-wrap sm:flex-nowrap space-x-4 mb-6">
              {activeSection.subDepartments?.map((sub, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center mb-4 sm:mb-0"
                >
                  <div className="w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden border-2 border-white shadow-lg mb-2">
                    <img
                      src={sub.image}
                      alt={sub.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="md:text-sm text-xs font-medium">
                    {sub.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => navigate(`/departments/${activeSection.id}`)}
            className="mt-auto px-3 py-1.5 md:px-4 md:py-3 bg-gradient-to-r from-black to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition md:text-sm text-xs"
          >
            Explore Department
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
