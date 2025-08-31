import React from "react";

type DeptHeroProps = {
  title: string;
  image: string;
  paragraphs?: string[];
};

const DeptHero: React.FC<DeptHeroProps> = ({
  title,
  image,
  paragraphs = [],
}) => (
  <section className="text-white max-w-8xl mx-auto pt-30 pb-5 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-10">
    {/* Left Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      {/* Title */}
      <h2
        className="text-4xl md:text-6xl font-bold mb-12 font-montserrat leading-tight 
                 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 
                 bg-clip-text text-transparent drop-shadow-lg"
      >
        {title}
      </h2>

      {/* Paragraphs Container */}
      <div className="flex flex-col gap-6">
        {paragraphs.map((para, idx) => (
          <div
            key={idx}
            className="relative group bg-gradient-to-br from-white/10 to-white/5 
                   rounded-2xl p-6 shadow-xl border border-white/10
                   text-base md:text-lg text-gray-100 leading-relaxed
                   transition-all duration-300 hover:scale-[1.03] hover:border-white/30"
          >
            {/* Decorative Glow */}
            <div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r 
                        from-pink-500/10 to-purple-500/10 opacity-0 
                        group-hover:opacity-100 blur-xl transition duration-500"
            />

            <p className="relative z-10">{para}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Right Image Section */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={image}
        alt="Department Hero"
        className="w-full object-cover transform hover:scale-105 transition duration-500"
      />
    </div>
  </section>
);

export default DeptHero;
