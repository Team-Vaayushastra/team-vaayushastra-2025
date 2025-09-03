import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import Scanner from "../assets/craigQR.jpg";
import Benefits from "@/sections/Benefits";

const SupportUs = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-black text-white py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-3xl font-bold mb-8 pt-10 text-center bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">
            Support Us
          </h1>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full bg-white/10 backdrop-blur-md text-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold text-center mb-4">
                Team Captain
              </h2>
              <div className="flex items-center space-x-4 flex flex-col gap-2">
                <img
                  src={Scanner}
                  alt="Scanner"
                  className="w-50 h-50 object-cover rounded-sm"
                />
                <div>
                  <p className="text-lg font-medium">Craig Prakash Zalake</p>
                  <p className="text-sm text-gray-500">
                    UPI ID: zalake04@oksbi
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white/10 backdrop-blur-md text-white p-6 rounded-lg shadow-lg mb-8">
              <h2 className="text-2xl font-semibold mb-14 text-center">
                Bank Details
              </h2>
              <p className="text-lg font-medium mb-2">
                Name: Craig Prakash Zalake
              </p>
              <p className="text-lg font-medium mb-2">Bank: SBI Bank</p>
              <p className="text-lg font-medium mb-2">
                Account No: 41144997684
              </p>
              <p className="text-lg font-medium mb-2">IFSC Code: SBIN014914</p>
              <p className="text-lg font-medium mb-2">Branch: Santacruz East</p>
            </div>
          </div>

          <blockquote className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-8 italic">
            <p className="text-xl text-center">
              "The greatest good is what we do for one another." ~ Mother Teresa
            </p>
          </blockquote>

          <Benefits />

          <div className="mt-8 text-center">
            <a
              href="/team-vaayushastra-2025/brochure.pdf"
              className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition"
              download
            >
              Download Our Brochure
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SupportUs;
