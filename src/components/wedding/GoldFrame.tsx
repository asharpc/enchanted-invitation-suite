import { motion } from "framer-motion";

interface GoldFrameProps {
  className?: string;
}

const GoldFrame = ({ className = "" }: GoldFrameProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Gold gradient for lines */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 60%, 55%)" />
            <stop offset="50%" stopColor="hsl(45, 70%, 65%)" />
            <stop offset="100%" stopColor="hsl(45, 60%, 55%)" />
          </linearGradient>
          
          <linearGradient id="goldGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(45, 50%, 70%)" stopOpacity="0.6" />
            <stop offset="50%" stopColor="hsl(45, 60%, 75%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(45, 50%, 70%)" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Outer diamond frame */}
        <motion.polygon
          points="200,15 385,125 385,375 200,485 15,375 15,125"
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* Inner diamond frame */}
        <motion.polygon
          points="200,35 365,135 365,365 200,465 35,365 35,135"
          fill="none"
          stroke="url(#goldGradientLight)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true }}
        />

        {/* Corner accent - top */}
        <motion.line
          x1="200" y1="15"
          x2="200" y2="45"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Corner accent - bottom */}
        <motion.line
          x1="200" y1="485"
          x2="200" y2="455"
          stroke="url(#goldGradient)"
          strokeWidth="1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Decorative corner diamonds */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Top corner */}
          <polygon
            points="200,8 205,15 200,22 195,15"
            fill="url(#goldGradient)"
            opacity="0.8"
          />
          {/* Bottom corner */}
          <polygon
            points="200,478 205,485 200,492 195,485"
            fill="url(#goldGradient)"
            opacity="0.8"
          />
        </motion.g>
      </svg>
    </div>
  );
};

export default GoldFrame;