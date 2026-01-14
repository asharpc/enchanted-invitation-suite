import { motion } from "framer-motion";
import InvitationCard from "./InvitationCard";
import CountdownTimer from "./CountdownTimer";
import FloralDecoration from "./FloralDecoration";

const CountdownSection = () => {
    const decorations = (
        <>
            <FloralDecoration position="top-right" variant="eucalyptus" size="sm" />
            <FloralDecoration position="bottom-left" variant="flowers" size="md" />
        </>
    );

    return (
        <InvitationCard index={5} decorations={decorations}>
            <div className="relative text-center h-full flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="pb-8 pt-4"
                >
                    <CountdownTimer />
                </motion.div>
            </div>
        </InvitationCard>
    );
};

export default CountdownSection;
