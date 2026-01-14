import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import GoldFrame from "./GoldFrame";

interface InvitationCardProps {
  children: ReactNode;
  index: number;
  className?: string;
  decorations?: ReactNode;
}

const InvitationCard = ({ children, index, className = "", decorations }: InvitationCardProps) => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.2"]
  });

  // Enhanced flip animation - smoother spring physics
  const springConfig = { stiffness: 60, damping: 20, mass: 1 };

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [95, 0]);
  const rotateX = useSpring(rawRotateX, springConfig);

  const rawOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.6, 1]);
  const opacity = useSpring(rawOpacity, springConfig);

  const rawScale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const scale = useSpring(rawScale, springConfig);

  const rawY = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const y = useSpring(rawY, springConfig);

  return (
    <motion.section
      ref={ref}
      className={`h-screen w-full flex items-center justify-center py-16 md:py-20 px-4 snap-start snap-always ${className} relative overflow-hidden`}
      style={{
        perspective: "2000px",
        perspectiveOrigin: "center center",
      }}
    >
      {/* Decorations rendered outside the card flip but inside the section */}
      {decorations && (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {decorations}
        </div>
      )}

      <motion.div
        className="w-full max-w-4xl mx-auto relative z-10"
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
          className="bg-card rounded-2xl p-5 md:p-12 lg:p-16 relative overflow-hidden border border-gold-muted/20"
          style={{
            boxShadow: `
              0 0 0 1px hsla(45, 30%, 70%, 0.12),
              0 4px 6px hsla(75, 20%, 20%, 0.06),
              0 8px 16px hsla(75, 20%, 20%, 0.05),
              0 16px 32px hsla(75, 20%, 20%, 0.04),
              inset 0 1px 0 hsla(45, 40%, 95%, 0.6)
            `,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
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