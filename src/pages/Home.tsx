// src/pages/Home.tsx
import { ChartLineDots } from "@/components/LineChart";
import Navbar from "@/components/Navbar";
import SupportUsButton from "@/components/SupportUsButton";
import Competitions from "@/sections/Competitions";
import ContactUs from "@/sections/ContactUs";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import ScrollStory from "@/sections/ScrollStory";
import { useNavigate } from "react-router-dom";
import Ranks from "../assets/ranks.png"

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-100vw bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="max-w-6xl text-center mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 font-hepta">
          Rankings
        </h2>
        {/* <ChartLineDots /> */}
        <div className="md:pt-5">
          <img
            src={Ranks}
            alt="Description of image"
            className="w-[90vw] max-w-[1000px] min-w-[300px] h-auto object-cover mx-auto rounded-xl "
          />
        </div>
        <button
          className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-700 to-purple-600 rounded-lg hover:-translate-y-1 transition cursor-pointer text-sm md:text-base"
          onClick={() => navigate("/planes")}
        >
          <p className="font-semibold text-white">Click to see our Planes</p>
        </button>
      </div>
      <Competitions />
      <h1 className="text-3xl md:text-5xl font-semibold text-white text-center font-hepta my-5 md:my-20">
        Departments
      </h1>
      <ScrollStory />
      <div id="contact-us">
        <ContactUs />
      </div>
      <SupportUsButton />
      <Footer />
    </div>
  );
}
