import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

const InvitationMessage = () => {
  return (
    <InvitationCard index={2}>
      <div className="relative text-center">
        {/* Decorations */}
        <FloralDecoration position="top-left" variant="flowers" size="lg" />
        <FloralDecoration position="bottom-right" variant="mixed" size="lg" />
        <FloralDecoration position="center-right" variant="eucalyptus" size="md" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-8 md:py-12"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
          >
            <p className="font-body text-base md:text-lg text-muted-foreground tracking-[0.3em] uppercase">
              Hosted by the Bride's Family
            </p>
          </motion.div>

          {/* Bride's Family (First - they are hosting) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12 md:mb-16 space-y-3"
          >
            <p className="font-body text-base md:text-lg text-muted-foreground tracking-wider uppercase mb-4">
              Daughter of
            </p>
            <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed">
              <span className="font-display text-primary">Abdul Rafeeque</span> & <span className="font-display text-primary">Saleena</span>
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground mt-2">
              Granddaughter of N Abdu Rahiman Haji & Late Chakkarathodi Cheku
            </p>
            <p className="font-body text-base text-muted-foreground italic">
              Noorengal, Melmuri, Malappuram
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-12 md:mb-16"
          >
            <div className="h-px w-16 md:w-24 bg-gold-muted" />
            <div className="w-2 h-2 rotate-45 bg-gold" />
            <div className="h-px w-16 md:w-24 bg-gold-muted" />
          </motion.div>

          {/* Groom's Family */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-3"
          >
            <p className="font-body text-base md:text-lg text-muted-foreground tracking-wider uppercase mb-4">
              Son of
            </p>
            <p className="font-body text-xl md:text-2xl text-foreground leading-relaxed">
              <span className="font-display text-primary">Abdul Nazeer</span> & <span className="font-display text-primary">Vinitha Nazeer</span>
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground mt-2">
              Grandson of Late AdakaParambil Abdul Kader Haji & Late Valiyara Aboobacker Haji
            </p>
            <p className="font-body text-base text-muted-foreground italic">
              East Fort, Thrissur
            </p>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 max-w-2xl mx-auto"
          >
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
              cordially invite you to share in the joy of the Nikah ceremony uniting
            </p>
            <div className="my-8 md:my-10">
              <p className="font-display text-3xl md:text-4xl lg:text-5xl text-primary leading-tight">
                Rifha Fathima & Abdul Lihan
              </p>
            </div>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic">
              "And among His signs is that He created for you mates from among yourselves that you may dwell in tranquility with them" - Quran 30:21
            </p>
          </motion.div>

          {/* Invitation from Bride's Family */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-20 pt-10 md:pt-12 border-t border-gold-muted/30 space-y-6"
          >
            <p className="font-body text-lg md:text-xl text-foreground leading-relaxed">
              With utmost joy and gratitude to Allah,
            </p>
            <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
              The family of <span className="font-display text-primary">Abdul Rafeeque & Saleena</span>
            </p>
            <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
              request the honour of your presence at the Nikah ceremony of their beloved daughter
            </p>
            <p className="font-display text-2xl md:text-3xl text-primary mt-6">
              Rifha Fathima
            </p>
            <p className="font-body text-base text-muted-foreground mt-8">
              Your presence and prayers will make this occasion even more blessed
            </p>
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