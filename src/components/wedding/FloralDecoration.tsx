import { motion } from "framer-motion";

interface FloralDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  variant?: "flowers" | "fruits" | "mixed";
  className?: string;
}

const FloralDecoration = ({ position, variant = "mixed", className = "" }: FloralDecorationProps) => {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
    "center-left": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    "center-right": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  };

  const getDecorationContent = () => {
    switch (variant) {
      case "flowers":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Rose */}
            <g transform="translate(100, 100)">
              <circle cx="0" cy="0" r="20" fill="hsl(350, 60%, 70%)" opacity="0.8" />
              <circle cx="-12" cy="-12" r="15" fill="hsl(350, 65%, 75%)" opacity="0.7" />
              <circle cx="12" cy="-8" r="14" fill="hsl(350, 55%, 72%)" opacity="0.75" />
              <circle cx="8" cy="12" r="13" fill="hsl(350, 60%, 68%)" opacity="0.7" />
              <circle cx="-10" cy="10" r="12" fill="hsl(350, 58%, 74%)" opacity="0.65" />
              <circle cx="0" cy="0" r="8" fill="hsl(350, 70%, 65%)" />
            </g>
            {/* Leaves */}
            <ellipse cx="60" cy="140" rx="25" ry="10" fill="hsl(145, 35%, 35%)" opacity="0.6" transform="rotate(-45, 60, 140)" />
            <ellipse cx="140" cy="140" rx="25" ry="10" fill="hsl(145, 35%, 35%)" opacity="0.6" transform="rotate(45, 140, 140)" />
          </svg>
        );
      case "fruits":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Pomegranate */}
            <circle cx="100" cy="90" r="35" fill="hsl(0, 60%, 50%)" opacity="0.8" />
            <path d="M100 55 L95 45 L105 45 Z" fill="hsl(145, 35%, 35%)" />
            <circle cx="90" cy="85" r="5" fill="hsl(0, 70%, 40%)" opacity="0.6" />
            <circle cx="110" cy="90" r="4" fill="hsl(0, 70%, 40%)" opacity="0.6" />
            <circle cx="100" cy="100" r="4" fill="hsl(0, 70%, 40%)" opacity="0.6" />
            {/* Citrus */}
            <circle cx="60" cy="150" r="20" fill="hsl(38, 90%, 55%)" opacity="0.7" />
            <circle cx="140" cy="150" r="18" fill="hsl(45, 85%, 60%)" opacity="0.7" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Mixed - Rose */}
            <g transform="translate(70, 70)">
              <circle cx="0" cy="0" r="18" fill="hsl(350, 60%, 70%)" opacity="0.8" />
              <circle cx="-10" cy="-10" r="12" fill="hsl(350, 65%, 75%)" opacity="0.7" />
              <circle cx="10" cy="-6" r="11" fill="hsl(350, 55%, 72%)" opacity="0.75" />
              <circle cx="6" cy="10" r="10" fill="hsl(350, 60%, 68%)" opacity="0.7" />
              <circle cx="0" cy="0" r="6" fill="hsl(350, 70%, 65%)" />
            </g>
            {/* Citrus */}
            <circle cx="140" cy="60" r="18" fill="hsl(38, 90%, 55%)" opacity="0.7" />
            {/* Small berries */}
            <circle cx="50" cy="140" r="8" fill="hsl(0, 55%, 45%)" opacity="0.7" />
            <circle cx="65" cy="150" r="6" fill="hsl(0, 55%, 45%)" opacity="0.6" />
            <circle cx="55" cy="160" r="7" fill="hsl(0, 55%, 45%)" opacity="0.65" />
            {/* Leaves */}
            <ellipse cx="130" cy="130" rx="30" ry="12" fill="hsl(145, 35%, 35%)" opacity="0.5" transform="rotate(-30, 130, 130)" />
            <ellipse cx="160" cy="100" rx="25" ry="10" fill="hsl(145, 40%, 40%)" opacity="0.4" transform="rotate(20, 160, 100)" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className={`absolute pointer-events-none ${positionClasses[position]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.div
        animate={{ 
          rotate: position.includes("left") ? [-2, 2, -2] : [2, -2, 2],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
      >
        {getDecorationContent()}
      </motion.div>
    </motion.div>
  );
};

export default FloralDecoration;