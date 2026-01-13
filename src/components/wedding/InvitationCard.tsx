import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";
import GoldFrame from "./GoldFrame";

interface InvitationCardProps {
  children: ReactNode;
  index: number;
  className?: string;
}

const InvitationCard = ({ children, index, className = "" }: InvitationCardProps) => {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create page-opening effect - card unfolds as it comes into view
  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.5], [-90, -20, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5], [0.8, 0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.5], [100, 30, 0]);
  
  // Shadow intensity based on scroll
  const shadowOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0.05, 0.15]);

  return (
    <motion.section
      ref={ref}
      className={`min-h-screen w-full flex items-center justify-center py-16 md:py-24 px-4 ${className}`}
      style={{
        perspective: "1500px",
        perspectiveOrigin: "center top",
      }}
    >
      <motion.div 
        className="w-full max-w-4xl mx-auto"
        style={{
          rotateX,
          opacity,
          scale,
          y,
          transformOrigin: "center top",
          transformStyle: "preserve-3d",
        }}
      >
        <motion.div
          className="bg-card rounded-xl p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            boxShadow: `0 25px 50px -12px hsla(75, 20%, 20%, ${shadowOpacity.get()}), 
                        0 12px 24px -8px hsla(75, 20%, 20%, 0.08),
                        inset 0 1px 0 hsla(45, 40%, 95%, 0.5)`,
          }}
        >
          {/* Paper fold line effect */}
          <div 
            className="absolute top-0 left-0 right-0 h-px opacity-20 pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, hsl(45, 30%, 70%) 50%, transparent 100%)",
            }}
          />
          
          {/* Paper texture overlay */}
          <div 
            className="absolute inset-0 opacity-25 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 30%, hsla(75, 30%, 88%, 0.5) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, hsla(45, 40%, 90%, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, hsla(350, 20%, 95%, 0.2) 0%, transparent 70%)
              `,
            }}
          />

          {/* Subtle paper grain */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none mix-blend-multiply"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
          
          {/* Gold geometric diamond frame */}
          <GoldFrame />
          
          <div className="relative z-10">
            {children}
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default InvitationCard;