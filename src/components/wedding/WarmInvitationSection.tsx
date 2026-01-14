import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

interface WarmInvitationSectionProps {
    eventType?: "nikah" | "reception";
}

const WarmInvitationSection = ({ eventType = "nikah" }: WarmInvitationSectionProps) => {
    const decorations = (
        <>
            <FloralDecoration position="top-left" variant="flowers" size="lg" />
            <FloralDecoration position="bottom-right" variant="eucalyptus" size="md" />
        </>
    );

    const invitationText = eventType === "nikah"
        ? "Cordially invite you to share in the joy of the Nikah ceremony uniting"
        : "Cordially invite you to share in the joy of the Wedding Reception celebrating";

    return (
        <InvitationCard index={2} decorations={decorations}>
            <div className="relative text-center flex flex-col justify-center min-h-[50vh] md:min-h-[60vh] py-12 md:py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto space-y-6 md:space-y-8" /* Increased spacing to balance space */
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <p className="font-body text-lg md:text-2xl text-foreground leading-relaxed px-4 font-medium italic">
                            {invitationText}
                        </p>
                    </motion.div>

                    {/* Names removed as requested */}

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <div className="w-16 h-px bg-gold mx-auto opacity-50 mb-4" /> {/* Added divider */}

                        <p className="font-body text-base md:text-lg text-foreground leading-relaxed">
                            With utmost joy and gratitude to Allah,
                        </p>
                        <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed px-6 md:px-12">
                            Your presence and prayers will make this occasion even more blessed.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </InvitationCard>
    );
};

export default WarmInvitationSection;
