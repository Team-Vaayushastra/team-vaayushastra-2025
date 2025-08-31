// components/AchievementCard.tsx
import { motion } from "framer-motion";
import type { FC } from "react";

interface AchievementCardProps {
  image: string;
  title: string;
  description: string;
  animationDelay?: number;
}

const AchievementCard: FC<AchievementCardProps> = ({
  image,
  title,
  description,
  animationDelay = 0,
}) => {
  return (
    <div className="flex flex-col items-center md:flex-row gap-8 justify-center">
      {/* Image Animation */}
      <motion.img
        src={image}
        alt={title}
        className="w-[280px] md:w-[400px] shadow-xl rounded-md"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          delay: 1 + animationDelay,
        }}
      />
      {/* Text Animation */}
      <motion.div
        className="text-center md:text-left text-white max-w-xl bg-white/20 backdrop-blur-md p-4 rounded-md"
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          delay: 1 + animationDelay,
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400">{title}</h2>
        <p className="mt-4 text-lg text-sky-200">{description}</p>
      </motion.div>
    </div>
  );
};

export default AchievementCard;
