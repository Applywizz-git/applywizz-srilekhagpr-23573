import { motion } from "framer-motion";
import { Code, Database, BarChart3, Cloud } from "lucide-react";

const FloatingElements = () => {
  const elements = [
    { Icon: Code, delay: 0, x: -20, y: -30 },
    { Icon: Database, delay: 0.2, x: 20, y: -40 },
    { Icon: BarChart3, delay: 0.4, x: -30, y: 20 },
    { Icon: Cloud, delay: 0.6, x: 25, y: 25 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {elements.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute glass rounded-full p-4 copper-glow"
          style={{
            top: `${20 + index * 15}%`,
            right: `${5 + index * 8}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: 1,
            y: [0, y, 0],
            x: [0, x, 0],
          }}
          transition={{
            delay,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8 text-secondary" />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
