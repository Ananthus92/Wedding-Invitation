import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function ScrollReveal({
  children,
  delay = 0,
  duration = 0.8,
  y = 60,
  once = true,
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once,
    amount: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : y,
      }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;