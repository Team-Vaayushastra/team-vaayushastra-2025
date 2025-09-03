import Insta from "../assets/social-media/instagram.svg"
import Twitter from "../assets/social-media/twitter.svg"
import Fb from "../assets/social-media/facebook.svg"
import In from "../assets/social-media/linkedin.svg"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white w-full py-10 px-6 overflow-hidden">
      {/* Background text */}
      <h1 className="absolute inset-0 flex items-center justify-center md:text-[4rem] text-[3rem] font-bold text-white/15 tracking-widest select-none pointer-events-none">
        Dream. Build. Fly.
      </h1>

      {/* Footer content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-10 md:mx-20">
        {/* Left */}
        <div className="flex flex-col gap-2">
          <h2 className="md:text-xl text-lg  font-semibold">
            Team Vaayushastra
          </h2>
          <Link
            to="/Vaayu-Website/about"
            className="md:text-sm text-xs text-gray-400 hover:text-white transition"
          >
            About
          </Link>
          <Link
            to="/Vaayu-Website/support-us"
            className="md:text-sm text-xs text-gray-400 hover:text-white transition"
          >
            Support
          </Link>
          <Link
            to="#contact-us"
            className="md:text-sm text-xs text-gray-400 hover:text-white transition"
          >
            Contact
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5">
          <h2 className="md:text-xl text-lg font-semibold">Follow Us:</h2>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/teamvaayushastra/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-8 md:h-8 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-pink-500/40 "
            >
              <img
                src={Insta}
                alt="Instagram"
                className="w-5 h-5 object-contain"
              />
            </a>

            <a
              href="https://x.com/vaayushastra"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-8 md:h-8 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-sky-500/40 "
            >
              <img
                src={Twitter}
                alt="Twitter"
                className="w-5 h-5 object-contain"
              />
            </a>

            <a
              href="https://www.facebook.com/TeamVaayushastra/"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-8 md:h-8 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600/40 "
            >
              <img src={Fb} alt="Facebook" className="w-5 h-5 object-contain" />
            </a>

            <a
              href="https://www.linkedin.com/company/team-vaayushastra-crce/?originalSubdomain=in"
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-8 md:h-8 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500/40 "
            >
              <img src={In} alt="LinkedIn" className="w-5 h-5 object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom note */}
      <p className="relative z-10 text-center text-gray-500 text-sm sm:text-xs mt-6 xs:mt-4">
        © 2025 Team Vaayushastra. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
