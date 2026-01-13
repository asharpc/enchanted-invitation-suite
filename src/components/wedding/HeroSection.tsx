import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

const HeroSection = () => {
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const brideName = "Isabella";
  const groomName = "Alessandro";

  return (
    <InvitationCard index={0}>
      <div className="relative text-center">
        {/* Decorations */}
        <FloralDecoration position="top-left" variant="flowers" />
        <FloralDecoration position="top-right" variant="fruits" />
        <FloralDecoration position="bottom-left" variant="mixed" />
        <FloralDecoration position="bottom-right" variant="flowers" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="py-8 md:py-12"
        >
          {/* Ornamental top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 md:mb-12"
          >
            <p className="font-body text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase">
              Together with their families
            </p>
          </motion.div>

          {/* Bride's Name */}
          <div className="mb-4 md:mb-6">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-primary tracking-wide">
              {brideName.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, ease: "backOut" }}
            className="my-4 md:my-6"
          >
            <span className="font-display text-4xl md:text-5xl text-gold italic">&</span>
          </motion.div>

          {/* Groom's Name */}
          <div className="mb-8 md:mb-12">
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-primary tracking-wide">
              {groomName.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i + brideName.length}
                  initial="hidden"
                  animate="visible"
                  variants={letterAnimation}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-8 md:mb-10"
          >
            <div className="h-px w-16 md:w-24 bg-gold-muted" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 md:w-24 bg-gold-muted" />
          </motion.div>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <p className="font-body text-xl md:text-2xl text-foreground tracking-widest mb-2">
              Request the pleasure of your company
            </p>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-primary mt-4">
              Saturday, the Twenty-First of June
            </p>
            <p className="font-body text-xl md:text-2xl text-muted-foreground mt-2">
              Two Thousand and Twenty-Five
            </p>
            <p className="font-body text-lg text-gold mt-4 tracking-wider">
              at Four O'Clock in the Afternoon
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="mt-12 md:mt-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <p className="font-body text-sm tracking-widest uppercase mb-2">Scroll to continue</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </InvitationCard>
  );
};

export default HeroSection;