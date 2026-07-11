import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          initial={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.5,
            y: 30,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
          fixed
          bottom-6
          right-4
          md:bottom-8
          md:right-8
          z-50
          w-14
          h-14
          rounded-full
          bg-gradient-to-br
          from-yellow-500
          to-yellow-700
          text-black
          text-2xl
          shadow-[0_10px_30px_rgba(255,215,0,0.35)]
          hover:scale-110
          transition
          "
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;