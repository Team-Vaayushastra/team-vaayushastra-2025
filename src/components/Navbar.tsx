import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "/logo.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur shadow-lg p-2">
      <div className="flex justify-between items-center px-6 py-3 text-white">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
          <h1 className="text-lg font-semibold font-montserrat">
            Team Vaayushastra
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link to="/" className="hover:text-sky-300 transition-colors">
              Home
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 hover:text-sky-300 transition-colors focus:outline-none"
            >
              Departments
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute top-full mt-2 w-48 bg-black/30 backdrop-blur-md shadow-lg rounded-md p-3 z-70">
                <Link
                  to="/departments/avionics"
                  className="block px-2 py-1 rounded hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  Avionics
                </Link>
                <Link
                  to="/departments/design"
                  className="block px-2 py-1 rounded hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  Design
                </Link>
                <Link
                  to="/departments/media_marketing"
                  className="block px-2 py-1 rounded hover:bg-white/10 transition"
                  onClick={() => setOpen(false)}
                >
                  Media & Marketing
                </Link>
              </div>
            )}
          </li>

          <li>
            <Link to="/planes" className="hover:text-sky-400 transition-colors">
              Planes
            </Link>
          </li>
          {/* <li>
            <Link to="/about" className="hover:text-sky-400 transition-colors">
              About Us
            </Link>
          </li> */}
          <li>
            <Link
              to="/support-us"
              className="hover:text-sky-400 transition-colors"
            >
              Support Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden text-white focus:outline-none"
        >
          {mobileMenu ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-black/30 backdrop-blur-md px-6 py-4">
          <ul className="flex flex-col gap-4 text-white">
            <li>
              <Link to="/" className="hover:text-sky-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer hover:text-sky-300">
                  Departments
                  <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
                </summary>
                <Link
                  to="/departments/avionics"
                  className="block px-2 py-1 rounded hover:bg-white/10 transition"
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  Avionics
                </Link>
                <Link
                  to="/departments/design"
                  className="block px-2 py-1 rounded hover:bg-white/10 transition"
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  Design
                </Link>
                <Link
                  to="/departments/media_marketing"
                  className="block px-2 py-1 rounded hover:bg-white/10 transition"
                  onClick={() => setMobileMenu(!mobileMenu)}
                >
                  Media & Marketing
                </Link>
              </details>
            </li>
            <li>
              <Link
                to="/planes"
                className="hover:text-sky-400 transition-colors"
              >
                Planes
              </Link>
            </li>
            {/* <li>
              <Link to="/about" className="hover:text-sky-400 transition-colors">
                About Us
              </Link>
            </li> */}
            <li>
              <Link
                to="/support-us"
                className="hover:text-sky-400 transition-colors"
              >
                Support Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
