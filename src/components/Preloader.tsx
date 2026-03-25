import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const letters = "LOADING".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="flex space-x-2">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-5xl font-heading text-silver shimmer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
            transition={{
              duration: 2,
              delay: index * 0.1,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;
