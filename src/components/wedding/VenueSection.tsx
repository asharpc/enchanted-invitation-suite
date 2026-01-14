import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

const VenueSection = () => {
  const venueName = "Rozia International Convention Centre";
  const venueAddress = "Near Calicut International Airport, Kodangad, Kondotty";
  const venueLocation = "Malappuram, Kerala 673638";

  // Rozia International Convention Centre coordinates
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.0!2d75.8!3d11.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE0JzAwLjAiTiA3NcKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";
  const mapUrl = "https://maps.app.goo.gl/Dpavg4WVnvcjpKTm8";

  const decorations = (
    <>
      <FloralDecoration position="top-right" variant="mixed" size="lg" />
      <FloralDecoration position="bottom-left" variant="eucalyptus" size="md" />
    </>
  );

  return (
    <InvitationCard index={3} decorations={decorations}>
      <div className="relative text-center h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-6"
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="font-body text-base md:text-lg text-muted-foreground tracking-[0.3em] uppercase mb-4">
              Venue
            </p>
            <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-primary mb-4 leading-tight">
              {venueName}
            </h2>
            <div className="flex items-center justify-center gap-4 my-6">
              <div className="h-px w-10 md:w-16 bg-gold-muted" />
              <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
              <div className="h-px w-10 md:w-16 bg-gold-muted" />
            </div>
            <p className="font-body text-lg md:text-xl text-foreground mb-1">
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
            className="relative origin-top mb-4 max-w-2xl mx-auto"
          >
            {/* Envelope flap effect */}
            <motion.div
              initial={{ rotateX: 180 }}
              whileInView={{ rotateX: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -top-4 left-1/2 -translate-x-1/2 w-full max-w-sm origin-bottom"
              style={{ perspective: "1000px" }}
            >
              <div
                className="h-6 bg-gradient-to-b from-card to-transparent"
                style={{
                  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                }}
              />
            </motion.div>

            {/* Map frame */}
            <div className="relative rounded-lg overflow-hidden shadow-card border border-gold-muted">
              <div className="h-40 md:h-64 w-full"> {/* Reduced height */}
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

          {/* Get Directions Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-4"
          >
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-body tracking-wider hover:bg-primary/90 transition-colors shadow-lg text-sm"
            >
              <span>Get Directions</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </InvitationCard>
  );
};

export default VenueSection;