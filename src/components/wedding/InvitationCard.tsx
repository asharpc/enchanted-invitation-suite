import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InvitationCardProps {
  children: ReactNode;
  index: number;
  className?: string;
}

const InvitationCard = ({ children, index, className = "" }: InvitationCardProps) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      rotateX: -15,
      y: 100,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.section
      className={`min-h-screen w-full flex items-center justify-center py-12 md:py-20 px-4 perspective-1000 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          className="bg-card rounded-xl shadow-elevated p-8 md:p-12 lg:p-16 relative overflow-hidden"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 25px 50px -12px hsla(75, 20%, 20%, 0.15), 0 12px 24px -8px hsla(75, 20%, 20%, 0.1)",
          }}
          whileHover={{
            y: -5,
            transition: { duration: 0.3 },
          }}
        >
          {/* Paper texture overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 30%, hsla(75, 30%, 88%, 0.4) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, hsla(45, 40%, 90%, 0.3) 0%, transparent 50%)
              `,
            }}
          />
          
          {/* Border decoration */}
          <div className="absolute inset-4 border border-gold-muted rounded-lg opacity-40 pointer-events-none" />
          
          <div className="relative z-10">
            {children}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InvitationCard;