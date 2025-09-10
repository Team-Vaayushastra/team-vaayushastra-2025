import Plane3D, { Plane } from "@/components/Plane3D";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="h-vh w-full bg-gradient-to-b from-blue-500 to-black text-white">
      <div className="relative max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-center px-6 md:px-12 pt-20 md:mt-0">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left max-w-2xl gap-4 z-10">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-semibold mb-5"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Team Vaayushastra
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-3xl font-hepta"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            We Are...
          </motion.h2>

          <motion.p
            className="text-base md:text-lg font-hepta leading-relaxed mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            A crew of passionate engineering students building advanced RC
            aircrafts since 2012. United by our love for aviation, we design,
            innovate, and take flight beyond limits.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-600 hover:-translate-y-1 rounded-lg hover:bg-blue-700 transition cursor-pointer text-sm md:text-base"
              onClick={() => navigate("/about")}
            >
              Know More
            </button>
          </motion.div>
        </div>

        {/* 3D Plane / Visual */}
        <div className="relative w-full lg:w-[75%] h-[300px] md:h-[400px] lg:h-[600px] mt-10 lg:mt-0 flex justify-center items-cente bg-transparent">
          <div className="hidden lg:block absolute inset-0 bg-transparent">
            <Plane3D />
            {/* <Plane /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
