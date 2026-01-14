import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const weddingDate = new Date("2026-02-15T11:30:00").getTime();

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full"
    >
      {/* Section header */}
      <div className="text-center mb-8">
        <p className="font-body text-base text-muted-foreground tracking-[0.3em] uppercase">
          Counting the moments
        </p>
      </div>

      {/* Timer grid */}
      <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-2xl mx-auto px-2"> {/* Changed to grid-cols-4 for all screens, reduced gap */}
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card background with subtle border */}
            <div className="bg-card rounded-lg p-2 md:p-4 border border-gold-muted/20 shadow-sm"> {/* Reduced padding */}
              {/* Number - tabular nums for alignment */}
              <motion.div
                key={unit.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-display text-2xl md:text-5xl font-medium text-primary mb-1" /* Reduced text size */
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {String(unit.value).padStart(2, "0")}
              </motion.div>

              {/* Label */}
              <p className="font-body text-[10px] md:text-base text-muted-foreground tracking-wider uppercase">
                {unit.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
