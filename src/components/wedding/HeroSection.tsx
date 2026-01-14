import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

interface HeroSectionProps {
  eventType?: "nikah" | "reception";
}

const HeroSection = ({ eventType = "nikah" }: HeroSectionProps) => {
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

  const brideName = "Rifha Fathima";
  const groomName = "Abdul Lihan";

  const timeText = eventType === "nikah" ? "Nikah at 11:30 AM" : "Reception at 5:00 PM";

  const decorations = (
    <>
      <FloralDecoration position="top-left" variant="flowers" size="lg" />
      <FloralDecoration position="top-right" variant="mixed" size="lg" />
      <FloralDecoration position="bottom-left" variant="eucalyptus" size="md" />
      <FloralDecoration position="bottom-right" variant="flowers" size="lg" />
    </>
  );

  return (
    <InvitationCard index={0} decorations={decorations}>
      <div className="relative text-center h-full flex flex-col justify-center py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="pt-12 pb-4 md:py-8"
        >
          {/* Ornamental top - simplified */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-4 md:mb-8"
          >
            <div className="h-px w-12 md:w-20 bg-gold-muted" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
            <div className="h-px w-12 md:w-20 bg-gold-muted" />
          </motion.div>

          {/* Bride's Name */}
          <div className="mb-4 md:mb-8 mt-4">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-primary tracking-wide leading-tight">
              {brideName.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3 md:mr-5">
                  {word.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={wordIndex * 10 + i}
                      initial="hidden"
                      whileInView="visible"
                      variants={letterAnimation}
                      viewport={{ once: true }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          {/* Ampersand */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5, ease: "backOut" }}
            viewport={{ once: true }}
            className="my-4 md:my-6"
          >
            <span className="font-display text-3xl md:text-4xl text-gold italic">&</span>
          </motion.div>

          {/* Groom's Name */}
          <div className="mb-8 md:mb-12">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium text-primary tracking-wide leading-tight">
              {groomName.split(" ").map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-3 md:mr-5">
                  {word.split("").map((letter, i) => (
                    <motion.span
                      key={i}
                      custom={(brideName.length + wordIndex * 10) + i}
                      initial="hidden"
                      whileInView="visible"
                      variants={letterAnimation}
                      viewport={{ once: true }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-8 md:mb-12"
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
            className="space-y-4"
          >
            <p className="font-body text-lg md:text-xl text-foreground tracking-widest">
              Request the honour of your presence
            </p>
            <div className="flex flex-col items-center">
              <p className="font-display text-5xl md:text-7xl lg:text-8xl text-primary leading-tight tracking-wider">
                FEB 15
              </p>
              <p className="font-display text-3xl md:text-5xl lg:text-6xl text-muted-foreground mt-2">
                2026
              </p>
            </div>
            <p className="font-body text-base md:text-lg text-gold mt-6 tracking-wider">
              {timeText}
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="mt-8 md:mt-12"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center text-muted-foreground"
            >
              <p className="font-body text-xs md:text-sm tracking-widest uppercase mb-2">Scroll to continue</p>
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