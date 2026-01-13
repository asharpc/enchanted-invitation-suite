import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

const InvitationMessage = () => {
  return (
    <InvitationCard index={2}>
      <div className="relative text-center">
        {/* Decorations */}
        <FloralDecoration position="top-left" variant="flowers" />
        <FloralDecoration position="bottom-right" variant="mixed" />
        <FloralDecoration position="center-right" variant="fruits" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-4 md:py-8"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 md:mb-12"
          >
            <p className="font-body text-lg md:text-xl text-muted-foreground tracking-[0.3em] uppercase mb-4">
              With Joy in Our Hearts
            </p>
          </motion.div>

          {/* Main message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-10 md:mb-14"
          >
            <p className="font-body text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed">
              Mr. & Mrs. <span className="font-display text-primary">Giovanni Rossi</span>
            </p>
            <p className="font-body text-lg md:text-xl text-muted-foreground mt-2">
              and
            </p>
            <p className="font-body text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mt-2">
              Mr. & Mrs. <span className="font-display text-primary">Marco Bianchi</span>
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-10 md:mb-14"
          >
            <div className="h-px w-12 md:w-20 bg-gold-muted" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-12 md:w-20 bg-gold-muted" />
          </motion.div>

          {/* Heartfelt message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed mb-6">
              cordially invite you to witness and celebrate the marriage of their beloved children
            </p>
            
            <div className="my-8 md:my-12">
              <p className="font-display text-3xl md:text-4xl lg:text-5xl text-primary">
                Isabella & Alessandro
              </p>
            </div>

            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed italic">
              "Two souls, one heart, forever intertwined"
            </p>
          </motion.div>

          {/* RSVP section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gold-muted"
          >
            <p className="font-body text-lg text-muted-foreground tracking-wider uppercase mb-4">
              Kindly respond by May 21st, 2025
            </p>
            <motion.a
              href="mailto:rsvp@isabellaalessandro.love"
              className="inline-block font-display text-xl md:text-2xl text-primary hover:text-gold transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              rsvp@isabellaalessandro.love
            </motion.a>
          </motion.div>

          {/* Footer decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-gold opacity-60">
              <path
                d="M30 55C30 55 5 35 5 20C5 10 15 5 30 15C45 5 55 10 55 20C55 35 30 55 30 55Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </InvitationCard>
  );
};

export default InvitationMessage;