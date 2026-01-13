import { motion } from "framer-motion";
import BismillahPage from "@/components/wedding/BismillahPage";
import HeroSection from "@/components/wedding/HeroSection";
import VenueSection from "@/components/wedding/VenueSection";
import InvitationMessage from "@/components/wedding/InvitationMessage";
import CountdownTimer from "@/components/wedding/CountdownTimer";
import InvitationCard from "@/components/wedding/InvitationCard";

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
        {/* Opening Bismillah Page - flips like a book */}
        <BismillahPage />

        <HeroSection />
        <VenueSection />
        <InvitationMessage />

        {/* Countdown section */}
        <InvitationCard index={3}>
          <div className="relative text-center py-4 md:py-8">
            <CountdownTimer />
          </div>
        </InvitationCard>
      </motion.main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center space-y-2">
        <p className="font-body text-sm text-muted-foreground tracking-widest">
          Rifha Fathima & Abdul Lihan
        </p>
        <p className="font-body text-xs text-muted-foreground">
          February 15, 2026 • Rozia International Convention Centre
        </p>
        <p className="font-body text-xs text-muted-foreground italic mt-4">
          Hosted by the family of Abdul Rafeeque & Saleena
        </p>
      </footer>
    </div>
  );
};

export default Index;