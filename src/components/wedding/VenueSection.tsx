import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

const VenueSection = () => {
  const venueName = "Rozia International Convention Centre";
  const venueAddress = "Near Calicut International Airport, Kodangad, Kondotty";
  const venueLocation = "Malappuram, Kerala 673638";

  // Rozia International Convention Centre coordinates
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0!2d75.8!3d11.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <InvitationCard index={1}>
      <div className="relative text-center">
        {/* Decorations */}
        <FloralDecoration position="top-right" variant="mixed" size="lg" />
        <FloralDecoration position="bottom-left" variant="eucalyptus" size="md" />

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
            <p className="font-body text-base md:text-lg text-muted-foreground tracking-[0.3em] uppercase mb-6">
              Venue
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">
              {venueName}
            </h2>
            <div className="flex items-center justify-center gap-4 my-8">
              <div className="h-px w-16 md:w-24 bg-gold-muted" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-16 md:w-24 bg-gold-muted" />
            </div>
            <p className="font-body text-lg md:text-xl text-foreground mb-2">
              {venueAddress}
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground">
              {venueLocation}
            </p>
          </motion.div>

          {/* Map Container with envelope animation */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            className="relative origin-top"
          >
            {/* Envelope flap effect */}
            <motion.div
              initial={{ rotateX: 180 }}
              whileInView={{ rotateX: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-full max-w-md origin-bottom"
              style={{ perspective: "1000px" }}
            >
              <div 
                className="h-8 bg-gradient-to-b from-card to-transparent"
                style={{
                  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                }}
              />
            </motion.div>

            {/* Map frame */}
            <div className="relative rounded-lg overflow-hidden shadow-card border border-gold-muted">
              <div className="aspect-video md:aspect-[16/9] w-full">
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wedding Venue Location"
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Additional venue details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            <div className="text-center space-y-2">
              <p className="font-display text-2xl md:text-3xl text-primary mb-3">Nikah</p>
              <p className="font-body text-lg md:text-xl text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>11:30 AM</p>
              <p className="font-body text-base text-muted-foreground">Marriage Ceremony</p>
            </div>
            <div className="text-center space-y-2">
              <p className="font-display text-2xl md:text-3xl text-primary mb-3">Lunch</p>
              <p className="font-body text-lg md:text-xl text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>12:30 PM</p>
              <p className="font-body text-base text-muted-foreground">Celebration Feast</p>
            </div>
            <div className="text-center space-y-2">
              <p className="font-display text-2xl md:text-3xl text-primary mb-3">Reception</p>
              <p className="font-body text-lg md:text-xl text-foreground" style={{ fontVariantNumeric: "tabular-nums" }}>5:00 PM</p>
              <p className="font-body text-base text-muted-foreground">Evening Celebration</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </InvitationCard>
  );
};

export default VenueSection;