import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import FloralDecoration from "./FloralDecoration";

const FamilySection = () => {
    const decorations = (
        <>
            <FloralDecoration position="top-right" variant="eucalyptus" size="md" />
            <FloralDecoration position="bottom-left" variant="mixed" size="lg" />
        </>
    );

    return (
        <InvitationCard index={1} decorations={decorations}>
            <div className="relative text-center h-full flex flex-col justify-center py-8">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8 md:space-y-12"
                >
                    {/* Bride's Family */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <p className="font-body text-sm md:text-base text-foreground font-medium tracking-wider uppercase mb-3">
                            Daughter of
                        </p>
                        <p className="font-body text-lg md:text-2xl text-foreground leading-relaxed">
                            <span className="font-display text-primary">Abdul Rafeeque</span> & <span className="font-display text-primary">Saleena</span>
                        </p>
                        <p className="font-body text-sm md:text-base text-muted-foreground mt-1">
                            Granddaughter of N Abdu Rahiman Haji & Late Chakkarathodi Cheku
                        </p>
                        <p className="font-body text-sm text-muted-foreground italic">
                            Noorengal, Melmuri, Malappuram
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 py-2"
                    >
                        <div className="h-px w-12 md:w-20 bg-gold-muted" />
                        <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
                        <div className="h-px w-12 md:w-20 bg-gold-muted" />
                    </motion.div>

                    {/* Groom's Family */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <p className="font-body text-sm md:text-base text-foreground font-medium tracking-wider uppercase mb-3">
                            Son of
                        </p>
                        <p className="font-body text-lg md:text-2xl text-foreground leading-relaxed">
                            <span className="font-display text-primary">Abdul Nazeer</span> & <span className="font-display text-primary">Vinitha Nazeer</span>
                        </p>
                        <p className="font-body text-sm md:text-base text-muted-foreground mt-1">
                            Grandson of Late AdakaParambil Abdul Kader Haji & Late Valiyara Aboobacker Haji
                        </p>
                        <p className="font-body text-sm text-muted-foreground italic">
                            East Fort, Thrissur
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </InvitationCard>
    );
};

export default FamilySection;
