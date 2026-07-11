import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
      }}
      className="text-white text-center select-none"
    >
      <p className="tracking-[4px] text-xs uppercase">
        Scroll
      </p>

      <div className="text-2xl mt-1">
        ↓
      </div>
    </motion.div>
  );
}

export default ScrollIndicator;