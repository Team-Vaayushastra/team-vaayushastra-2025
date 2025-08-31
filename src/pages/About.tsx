// pages/About.tsx
import SplashCursor from "@/components/backgrounds/SplashCursor";
import Navbar from "@/components/Navbar";
import SupportUsButton from "@/components/SupportUsButton";
import Footer from "@/sections/Footer";
import TeamGallery from "@/sections/TeamGallery";
import Team2024 from "../assets/group-photos/2024/team pic.jpg"

const galleryImages = [
  Team2024
];


const About = () => {
  return (
    <div className="relative bg-black text-white">
      <Navbar />
      <SplashCursor />

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center gap-6 px-4 md:px-0">
        <h1 className="text-5xl md:text-6xl font-bold text-sky-400">
          Team Vaayushastra
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">FR CRCE Team</p>
        <p className="text-lg md:text-xl max-w-2xl">
          Our motive is to inspire innovation, teamwork, and excellence in
          aerospace engineering competitions.
        </p>
      </section>

      {/* Team Members Section */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <TeamGallery images={galleryImages} />
      </section>
      <SupportUsButton />

      <Footer />
    </div>
  );
};

export default About;
