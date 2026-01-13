import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

const VenueSection = () => {
  const venueName = "Villa dei Fiori";
  const venueAddress = "Via della Rosa 42, Tuscany, Italy";
  
  // Example coordinates for Tuscany
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.4986847878124!2d11.2558136!3d43.7695604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a56a5f0aca8b7%3A0x7c7c5aa1d3d44f3a!2sFlorence%2C%20Metropolitan%20City%20of%20Florence%2C%20Italy!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus";

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
              The Celebration
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary mb-4">
              {venueName}
            </h2>
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-px w-12 md:w-20 bg-gold-muted" />
              <div className="w-2 h-2 rotate-45 bg-gold" />
              <div className="h-px w-12 md:w-20 bg-gold-muted" />
            </div>
            <p className="font-body text-xl md:text-2xl text-foreground">
              {venueAddress}
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
            className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <div className="text-center">
              <p className="font-display text-xl md:text-2xl text-primary mb-2">Ceremony</p>
              <p className="font-body text-lg text-muted-foreground">4:00 PM</p>
              <p className="font-body text-base text-muted-foreground">Garden Pavilion</p>
            </div>
            <div className="text-center">
              <p className="font-display text-xl md:text-2xl text-primary mb-2">Cocktails</p>
              <p className="font-body text-lg text-muted-foreground">5:30 PM</p>
              <p className="font-body text-base text-muted-foreground">Terrace</p>
            </div>
            <div className="text-center">
              <p className="font-display text-xl md:text-2xl text-primary mb-2">Reception</p>
              <p className="font-body text-lg text-muted-foreground">7:00 PM</p>
              <p className="font-body text-base text-muted-foreground">Grand Hall</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </InvitationCard>
  );
};

export default VenueSection;