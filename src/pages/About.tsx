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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-center px-6">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-sky-500/30 to-blue-700/20 blur-3xl animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-sky-500/30 animate-spin-slow" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-blue-400/40 animate-spin-slower" />

        <div className="relative z-10 max-w-3xl flex flex-col gap-6">
          <h1 className="text-6xl md:text-7xl font-extrabold text-blue-500 drop-shadow-xl">
            Team Vaayushastra
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 font-medium tracking-wide">
            FR CRCE Aero Design Team
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Inspiring{" "}
            <span className="text-sky-400 font-semibold">innovation</span>,{" "}
            <span className="text-sky-400 font-semibold">teamwork</span>, and{" "}
            <span className="text-sky-400 font-semibold">excellence</span> in
            aerospace competitions since 2012.
          </p>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            With{" "}
            <span className="text-sky-400 font-semibold">
              7 global Top 10 finishes
            </span>
            , our 30-member team continues to push the boundaries of
            student-driven aerospace engineering.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="/#contact-us"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-700 to-purple-600 hover:-translate-y-1 text-white font-semibold shadow-lg transition"
            >
              Contact Us
            </a>
          </div>
        </div>
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
