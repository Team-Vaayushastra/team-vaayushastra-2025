// components/Cards.tsx
import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  cta?: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  category,
  image,
  link,
  cta = "Learn More",
}) => {
  return (
    <div className="w-80 sm:w-72 xs:w-full snap-center shrink-0 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg overflow-hidden flex flex-col">
      {/* Image */}
      <div className="h-40 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-6 hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-2 text-white">
        <h3 className="text-lg sm:text-base xs:text-base font-bold">
          {title}
        </h3>
        <p className="text-sm sm:text-xs xs:text-xs text-gray-300 flex-1">
          <i>{description}</i>
        </p>
        <p className="text-sm font-semibold sm:text-xs xs:text-xs text-gray-300 flex-1">
          Category: {category}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition text-center text-sm sm:text-xs xs:text-xs"
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
