import { motion } from "framer-motion";

const Bismillah = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="text-center mb-12 md:mb-16 relative z-50"
    >
      {/* Background card for better visibility */}
      <div className="inline-block bg-card/95 backdrop-blur-sm px-8 py-6 rounded-lg border border-gold/20 shadow-sm">
        {/* Bismillah in Arabic - Calligraphic style */}
        <div
          className="font-arabic text-3xl md:text-4xl lg:text-5xl mb-3 leading-relaxed"
          style={{
            fontFamily: "'Amiri', 'Traditional Arabic', 'Arabic Typesetting', serif",
            color: "hsl(38, 70%, 50%)",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)"
          }}
        >
          بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </div>

        {/* Transliteration */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-xs md:text-sm text-muted-foreground tracking-widest italic"
        >
          In the name of Allah, the Most Gracious, the Most Merciful
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Bismillah;
