import { motion } from "framer-motion";

interface FloralDecorationProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right";
  variant?: "flowers" | "eucalyptus" | "mixed";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const FloralDecoration = ({ position, variant = "mixed", className = "", size = "md" }: FloralDecorationProps) => {
  const positionClasses = {
    "top-left": "top-0 left-0 -translate-x-1/4 -translate-y-1/4",
    "top-right": "top-0 right-0 translate-x-1/4 -translate-y-1/4",
    "bottom-left": "bottom-0 left-0 -translate-x-1/4 translate-y-1/4",
    "bottom-right": "bottom-0 right-0 translate-x-1/4 translate-y-1/4",
    "center-left": "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
    "center-right": "top-1/2 right-0 translate-x-1/2 -translate-y-1/2",
  };

  const sizeClasses = {
    sm: "w-24 h-24 md:w-32 md:h-32",
    md: "w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56",
    lg: "w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80",
  };

  const getDecorationContent = () => {
    switch (variant) {
      case "flowers":
        return (
          <svg viewBox="0 0 250 250" className="w-full h-full">
            {/* Burgundy Peony - Main flower */}
            <g transform="translate(120, 100)">
              {/* Outer petals - watercolor effect */}
              <ellipse cx="-25" cy="5" rx="28" ry="22" fill="hsl(340, 50%, 35%)" opacity="0.7" transform="rotate(-20)" />
              <ellipse cx="25" cy="0" rx="26" ry="20" fill="hsl(340, 45%, 38%)" opacity="0.65" transform="rotate(15)" />
              <ellipse cx="0" cy="25" rx="24" ry="18" fill="hsl(340, 52%, 32%)" opacity="0.7" transform="rotate(5)" />
              <ellipse cx="-15" cy="-20" rx="22" ry="16" fill="hsl(340, 48%, 40%)" opacity="0.6" transform="rotate(-35)" />
              <ellipse cx="20" cy="-18" rx="20" ry="15" fill="hsl(340, 55%, 36%)" opacity="0.65" transform="rotate(25)" />
              {/* Inner petals */}
              <ellipse cx="-10" cy="0" rx="16" ry="12" fill="hsl(340, 58%, 28%)" opacity="0.8" transform="rotate(-10)" />
              <ellipse cx="10" cy="-5" rx="14" ry="10" fill="hsl(340, 60%, 30%)" opacity="0.75" transform="rotate(20)" />
              <ellipse cx="0" cy="10" rx="12" ry="9" fill="hsl(340, 55%, 32%)" opacity="0.7" />
              {/* Center */}
              <circle cx="0" cy="0" r="8" fill="hsl(340, 65%, 25%)" opacity="0.9" />
              <circle cx="-2" cy="-2" r="3" fill="hsl(45, 70%, 60%)" opacity="0.6" />
            </g>

            {/* Dusty Blue Flower */}
            <g transform="translate(70, 65)">
              <ellipse cx="0" cy="-12" rx="15" ry="20" fill="hsl(210, 35%, 50%)" opacity="0.6" />
              <ellipse cx="-14" cy="5" rx="14" ry="18" fill="hsl(210, 40%, 45%)" opacity="0.55" transform="rotate(-30)" />
              <ellipse cx="14" cy="5" rx="14" ry="18" fill="hsl(210, 38%, 48%)" opacity="0.55" transform="rotate(30)" />
              <ellipse cx="-8" cy="15" rx="12" ry="15" fill="hsl(210, 42%, 42%)" opacity="0.5" transform="rotate(-15)" />
              <ellipse cx="8" cy="15" rx="12" ry="15" fill="hsl(210, 36%, 46%)" opacity="0.5" transform="rotate(15)" />
              <circle cx="0" cy="5" r="6" fill="hsl(210, 30%, 35%)" opacity="0.7" />
              {/* Stamens */}
              <circle cx="0" cy="3" r="2" fill="hsl(45, 60%, 55%)" opacity="0.8" />
            </g>

            {/* Blush Pink Rose */}
            <g transform="translate(180, 160)">
              <ellipse cx="-12" cy="-8" rx="18" ry="14" fill="hsl(350, 55%, 80%)" opacity="0.5" transform="rotate(-25)" />
              <ellipse cx="12" cy="-6" rx="16" ry="12" fill="hsl(350, 50%, 82%)" opacity="0.45" transform="rotate(20)" />
              <ellipse cx="0" cy="10" rx="14" ry="11" fill="hsl(350, 52%, 78%)" opacity="0.5" />
              <ellipse cx="-8" cy="2" rx="10" ry="8" fill="hsl(350, 58%, 75%)" opacity="0.6" transform="rotate(-10)" />
              <ellipse cx="6" cy="0" rx="8" ry="6" fill="hsl(350, 60%, 72%)" opacity="0.65" />
              <circle cx="0" cy="0" r="4" fill="hsl(350, 65%, 68%)" opacity="0.7" />
            </g>

            {/* Eucalyptus leaves */}
            <g opacity="0.7">
              <ellipse cx="200" cy="60" rx="8" ry="20" fill="hsl(165, 25%, 55%)" transform="rotate(45, 200, 60)" />
              <ellipse cx="220" cy="40" rx="7" ry="16" fill="hsl(165, 30%, 50%)" transform="rotate(30, 220, 40)" />
              <ellipse cx="40" cy="130" rx="10" ry="25" fill="hsl(165, 28%, 52%)" transform="rotate(-60, 40, 130)" />
              <ellipse cx="25" cy="160" rx="8" ry="18" fill="hsl(165, 25%, 58%)" transform="rotate(-45, 25, 160)" />
            </g>

            {/* Small accent leaves - silver dollar eucalyptus */}
            <circle cx="230" cy="80" r="10" fill="hsl(165, 20%, 60%)" opacity="0.5" />
            <circle cx="245" cy="100" r="8" fill="hsl(165, 22%, 55%)" opacity="0.45" />
            <circle cx="15" cy="100" r="9" fill="hsl(165, 18%, 58%)" opacity="0.5" />
          </svg>
        );
      case "eucalyptus":
        return (
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Eucalyptus branch */}
            <path d="M100 180 Q90 140, 80 100 Q75 70, 90 40" stroke="hsl(165, 20%, 40%)" strokeWidth="2" fill="none" opacity="0.6" />
            
            {/* Leaves along stem */}
            <ellipse cx="75" cy="150" rx="15" ry="8" fill="hsl(165, 25%, 55%)" opacity="0.6" transform="rotate(-30, 75, 150)" />
            <ellipse cx="95" cy="140" rx="14" ry="7" fill="hsl(165, 28%, 52%)" opacity="0.55" transform="rotate(25, 95, 140)" />
            <ellipse cx="70" cy="120" rx="13" ry="7" fill="hsl(165, 30%, 50%)" opacity="0.6" transform="rotate(-35, 70, 120)" />
            <ellipse cx="90" cy="105" rx="12" ry="6" fill="hsl(165, 25%, 55%)" opacity="0.55" transform="rotate(30, 90, 105)" />
            <ellipse cx="72" cy="85" rx="11" ry="6" fill="hsl(165, 28%, 48%)" opacity="0.6" transform="rotate(-25, 72, 85)" />
            <ellipse cx="88" cy="70" rx="10" ry="5" fill="hsl(165, 32%, 52%)" opacity="0.55" transform="rotate(35, 88, 70)" />
            <ellipse cx="80" cy="50" rx="8" ry="4" fill="hsl(165, 30%, 55%)" opacity="0.5" transform="rotate(-20, 80, 50)" />
            
            {/* Silver dollar eucalyptus */}
            <circle cx="130" cy="100" r="12" fill="hsl(165, 20%, 60%)" opacity="0.5" />
            <circle cx="145" cy="120" r="10" fill="hsl(165, 22%, 55%)" opacity="0.45" />
            <circle cx="155" cy="85" r="11" fill="hsl(165, 18%, 58%)" opacity="0.5" />
            <circle cx="120" cy="75" r="9" fill="hsl(165, 24%, 52%)" opacity="0.45" />
          </svg>
        );
      default:
        return (
          <svg viewBox="0 0 280 280" className="w-full h-full">
            {/* Main Burgundy Peony */}
            <g transform="translate(140, 120)">
              <ellipse cx="-30" cy="8" rx="32" ry="25" fill="hsl(340, 50%, 35%)" opacity="0.7" transform="rotate(-20)" />
              <ellipse cx="30" cy="0" rx="30" ry="23" fill="hsl(340, 45%, 38%)" opacity="0.65" transform="rotate(15)" />
              <ellipse cx="0" cy="30" rx="28" ry="20" fill="hsl(340, 52%, 32%)" opacity="0.7" transform="rotate(5)" />
              <ellipse cx="-18" cy="-25" rx="25" ry="18" fill="hsl(340, 48%, 40%)" opacity="0.6" transform="rotate(-35)" />
              <ellipse cx="22" cy="-22" rx="23" ry="17" fill="hsl(340, 55%, 36%)" opacity="0.65" transform="rotate(25)" />
              <ellipse cx="-12" cy="0" rx="18" ry="14" fill="hsl(340, 58%, 28%)" opacity="0.8" transform="rotate(-10)" />
              <ellipse cx="12" cy="-6" rx="16" ry="12" fill="hsl(340, 60%, 30%)" opacity="0.75" transform="rotate(20)" />
              <circle cx="0" cy="0" r="10" fill="hsl(340, 65%, 25%)" opacity="0.9" />
              <circle cx="-2" cy="-3" r="4" fill="hsl(45, 70%, 60%)" opacity="0.6" />
            </g>

            {/* Dusty Blue Dahlia - top */}
            <g transform="translate(80, 50)">
              <ellipse cx="0" cy="-15" rx="18" ry="24" fill="hsl(210, 35%, 50%)" opacity="0.55" />
              <ellipse cx="-18" cy="5" rx="16" ry="22" fill="hsl(210, 40%, 45%)" opacity="0.5" transform="rotate(-35)" />
              <ellipse cx="18" cy="5" rx="16" ry="22" fill="hsl(210, 38%, 48%)" opacity="0.5" transform="rotate(35)" />
              <ellipse cx="-10" cy="18" rx="14" ry="18" fill="hsl(210, 42%, 42%)" opacity="0.45" transform="rotate(-15)" />
              <ellipse cx="10" cy="18" rx="14" ry="18" fill="hsl(210, 36%, 46%)" opacity="0.45" transform="rotate(15)" />
              <circle cx="0" cy="5" r="8" fill="hsl(210, 30%, 35%)" opacity="0.6" />
              <circle cx="0" cy="4" r="3" fill="hsl(45, 60%, 55%)" opacity="0.7" />
            </g>

            {/* Blush Peony - bottom right */}
            <g transform="translate(210, 200)">
              <ellipse cx="-15" cy="-10" rx="22" ry="16" fill="hsl(350, 55%, 80%)" opacity="0.5" transform="rotate(-25)" />
              <ellipse cx="15" cy="-8" rx="20" ry="14" fill="hsl(350, 50%, 82%)" opacity="0.45" transform="rotate(20)" />
              <ellipse cx="0" cy="12" rx="18" ry="13" fill="hsl(350, 52%, 78%)" opacity="0.5" />
              <ellipse cx="-10" cy="2" rx="12" ry="10" fill="hsl(350, 58%, 75%)" opacity="0.55" transform="rotate(-10)" />
              <ellipse cx="8" cy="0" rx="10" ry="8" fill="hsl(350, 60%, 72%)" opacity="0.6" />
              <circle cx="0" cy="0" r="5" fill="hsl(350, 65%, 68%)" opacity="0.65" />
            </g>

            {/* Small crimson rose bud */}
            <g transform="translate(240, 60)">
              <ellipse cx="0" cy="8" rx="8" ry="12" fill="hsl(350, 60%, 45%)" opacity="0.6" />
              <ellipse cx="-5" cy="0" rx="6" ry="10" fill="hsl(350, 55%, 50%)" opacity="0.55" transform="rotate(-15)" />
              <ellipse cx="5" cy="0" rx="6" ry="10" fill="hsl(350, 58%, 48%)" opacity="0.55" transform="rotate(15)" />
            </g>

            {/* Eucalyptus branches and leaves */}
            <g opacity="0.7">
              {/* Top right branch */}
              <path d="M200 20 Q220 40, 240 30" stroke="hsl(165, 20%, 40%)" strokeWidth="1.5" fill="none" />
              <ellipse cx="210" cy="25" rx="10" ry="22" fill="hsl(165, 25%, 55%)" transform="rotate(50, 210, 25)" />
              <ellipse cx="235" cy="20" rx="8" ry="18" fill="hsl(165, 30%, 50%)" transform="rotate(30, 235, 20)" />
              
              {/* Left side eucalyptus */}
              <path d="M30 80 Q20 120, 35 160" stroke="hsl(165, 20%, 40%)" strokeWidth="1.5" fill="none" />
              <ellipse cx="25" cy="95" rx="12" ry="28" fill="hsl(165, 28%, 52%)" transform="rotate(-60, 25, 95)" />
              <ellipse cx="22" cy="130" rx="10" ry="24" fill="hsl(165, 25%, 58%)" transform="rotate(-45, 22, 130)" />
              <ellipse cx="30" cy="155" rx="9" ry="20" fill="hsl(165, 30%, 55%)" transform="rotate(-55, 30, 155)" />
              
              {/* Bottom branch */}
              <ellipse cx="120" cy="250" rx="12" ry="28" fill="hsl(165, 25%, 55%)" transform="rotate(-20, 120, 250)" />
              <ellipse cx="160" cy="260" rx="10" ry="24" fill="hsl(165, 28%, 52%)" transform="rotate(15, 160, 260)" />
            </g>

            {/* Silver dollar eucalyptus accents */}
            <circle cx="260" cy="45" r="11" fill="hsl(165, 20%, 60%)" opacity="0.45" />
            <circle cx="250" cy="90" r="9" fill="hsl(165, 22%, 55%)" opacity="0.4" />
            <circle cx="15" cy="60" r="10" fill="hsl(165, 18%, 58%)" opacity="0.45" />
            <circle cx="40" cy="200" r="8" fill="hsl(165, 24%, 52%)" opacity="0.4" />

            {/* Dusty blue small berries/buds */}
            <circle cx="50" cy="240" r="5" fill="hsl(210, 30%, 55%)" opacity="0.5" />
            <circle cx="60" cy="252" r="4" fill="hsl(210, 35%, 50%)" opacity="0.45" />
            <circle cx="45" cy="255" r="4" fill="hsl(210, 32%, 52%)" opacity="0.4" />
          </svg>
        );
    }
  };

  return (
    <motion.div
      className={`absolute pointer-events-none z-10 ${positionClasses[position]} ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{ opacity: 0.7 }}
    >
      <motion.div
        animate={{
          rotate: position.includes("left") ? [-1, 1, -1] : [1, -1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={sizeClasses[size]}
      >
        {getDecorationContent()}
      </motion.div>
    </motion.div>
  );
};

export default FloralDecoration;