import { motion } from "framer-motion";
import type { FC } from "react";

interface TeamGalleryProps {
  images: string[];
}

const TeamGallery: FC<TeamGalleryProps> = ({ images }) => {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-900">
      <h2 className="text-4xl font-bold text-center text-sky-400 mb-12">
        Team Gallery
      </h2>

      <motion.div
        className="flex gap-6 overflow-x-auto scroll-smooth py-4"
        drag="x"
        dragConstraints={{ left: -1000, right: 0 }}
      >
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 w-72 md:w-96 rounded-xl shadow-lg overflow-hidden cursor-grab hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={img}
              alt={`Team Batch ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TeamGallery;
