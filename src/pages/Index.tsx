import { motion } from "framer-motion";
import HeroSection from "@/components/wedding/HeroSection";
import VenueSection from "@/components/wedding/VenueSection";
import InvitationMessage from "@/components/wedding/InvitationMessage";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Subtle background pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 0% 0%, hsla(75, 30%, 85%, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 100% 0%, hsla(45, 40%, 88%, 0.25) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 100%, hsla(350, 30%, 90%, 0.2) 0%, transparent 50%)
          `,
        }}
      />

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <HeroSection />
        <VenueSection />
        <InvitationMessage />
      </motion.main>

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center">
        <p className="font-body text-sm text-muted-foreground tracking-widest">
          Isabella & Alessandro • June 21, 2025
        </p>
      </footer>
    </div>
  );
};

export default Index;