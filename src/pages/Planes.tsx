import AchievementCard from "@/components/AchievementCard";

import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import SupportUsButton from "@/components/SupportUsButton";

import achievements from "../data/planes"

const Planes = () => {
  return (
    <div className="h-auto bg-gradient-to-r from-blue-600 to-black">
      <Navbar />
      <h1 className="text-5xl font-bold text-center text-white pt-20">
        Our Planes
      </h1>

      <div className="h-full space-y-20 py-20 px-10">
        {achievements.map((plane, index) => (
          <AchievementCard
            key={plane.title}
            image={plane.image}
            title={plane.title}
            description={plane.description}
            animationDelay={index * 0.8}
          />
        ))}
      </div>

      <SupportUsButton />

      <Footer />
    </div>
  );
};

export default Planes;
