// pages/About.tsx
import SplashCursor from "@/components/backgrounds/SplashCursor";
import Navbar from "@/components/Navbar";
import SupportUsButton from "@/components/SupportUsButton";
import Footer from "@/sections/Footer";
import TeamGallery from "@/sections/TeamGallery";
import Team2024 from "../assets/group-photos/2024/team pic.jpg";

const galleryImages = [Team2024];

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
        <p className="text-lg md:text-xl max-w-2xl">
          Team Vaayushastra was established in the year 2012 to represent Fr.
          Conceicao Rodrigues College of Engineerin in the SAE Aero Design
          Competition. Since that year, we have participated annually in the
          advanced class of the SAE Aero Design Competition, held in the United
          States, 9 times.
        </p>
        <p className="text-lg md:text-xl max-w-2xl">
          We have been one of the most consistent teams by finishing in the
          worldwide top 10 rankings, 7 times. The team is formed by 30
          undergraduate students from different departments of the college who
          have the aptitude and interest conducive to the competition.
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
