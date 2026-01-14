import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FloralDecoration from "./FloralDecoration";

const BismillahPage = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Book flip to left animation
  const rotateY = useTransform(scrollYProgress, [0, 0.5], [0, -180]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.5], [1, 0.5, 0]);

  return (
    <div ref={ref} className="h-screen w-full relative flex items-center justify-center overflow-hidden snap-start snap-always">
      {/* Perspective container */}
      <div
        style={{
          perspective: "2500px",
          perspectiveOrigin: "left center",
        }}
        className="w-full h-full flex items-center justify-center"
      >
        {/* Flipping page */}
        <motion.div
          style={{
            rotateY,
            opacity,
            transformStyle: "preserve-3d",
            transformOrigin: "left center",
          }}
          className="w-full max-w-2xl h-auto min-h-[85vh] md:h-[90vh] relative"
        >
          {/* Front of the page */}
          <div
            className="absolute inset-0 bg-card rounded-2xl border-2 border-gold/30 shadow-2xl p-6 md:p-16 flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            {/* Ornamental top border */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center justify-center gap-4 mb-12"
            >
              <div className="h-px w-20 bg-gold" />
              <div className="w-3 h-3 rotate-45 bg-gold" />
              <div className="h-px w-20 bg-gold" />
            </motion.div>

            {/* Bismillah in Arabic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mb-8"
            >
              <div
                className="font-arabic text-4xl md:text-5xl lg:text-6xl text-center leading-relaxed"
                style={{
                  fontFamily: "'Amiri', 'Traditional Arabic', 'Arabic Typesetting', serif",
                  color: "hsl(38, 70%, 50%)",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textShadow: "0 2px 4px rgba(0,0,0,0.15)",
                }}
              >
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
              </div>
            </motion.div>

            {/* Transliteration */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="font-body text-sm md:text-base text-center text-muted-foreground tracking-widest italic max-w-md"
            >
              In the name of Allah, the Most Gracious, the Most Merciful
            </motion.p>

            {/* Ornamental bottom border */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center justify-center gap-4 mt-12"
            >
              <div className="h-px w-20 bg-gold" />
              <div className="w-3 h-3 rotate-45 bg-gold" />
              <div className="h-px w-20 bg-gold" />
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute bottom-12"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center text-muted-foreground"
              >
                <p className="font-body text-xs tracking-widest uppercase mb-2">
                  Scroll to open invitation
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" />
                </svg>
              </motion.div>
            </motion.div>

            {/* Floral decorations filling the space */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <FloralDecoration position="top-left" variant="flowers" size="lg" className="opacity-90" />
              <FloralDecoration position="top-right" variant="mixed" size="lg" className="opacity-90" />
              <FloralDecoration position="bottom-left" variant="eucalyptus" size="lg" className="opacity-90" />
              <FloralDecoration position="bottom-right" variant="flowers" size="lg" className="opacity-90" />
            </div>
          </div>

          {/* Back of the page (mirror text for realism) */}
          <div
            className="absolute inset-0 bg-card/50 backdrop-blur-sm rounded-2xl"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default BismillahPage;
