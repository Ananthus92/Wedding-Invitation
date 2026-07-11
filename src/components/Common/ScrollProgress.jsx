import { motion, useScroll } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
fixed
top-0
left-0
right-0
h-1
origin-left
z-[9999]
bg-gradient-to-r
from-yellow-600
via-yellow-300
to-yellow-600
shadow-[0_0_12px_rgba(250,204,21,0.8)]
"
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}

export default ScrollProgress;