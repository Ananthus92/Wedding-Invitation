import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Lightbox({
  photos,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  // Hooks MUST always be at the top
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, onClose, onPrevious, onNext]);

  const handleSwipe = () => {
    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 70) {
      return;
    }

    if (distance > 0) {
      onNext();
    } else {
      onPrevious();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // AFTER all hooks
  if (selectedIndex === null) return null;

  const photo = photos[selectedIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="
          fixed
          inset-0
          z-50
          bg-black/90
          backdrop-blur-md
          flex
          items-center
          justify-center
          p-6
        "
        onClick={onClose}
      >
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          exit={{
            scale: 0.8,
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          onClick={(e) => e.stopPropagation()}
          className="
            relative
            max-w-5xl
            w-full
          "
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchMove={(e) => {
            touchEndX.current = e.touches[0].clientX;
          }}
          onTouchEnd={handleSwipe}
        >
          <button
            onClick={onClose}
            className="
              absolute
              -top-14
              right-0
              text-white
              text-4xl
              hover:text-red-400
              transition
            "
          >
            ✕
          </button>

          <img
            src={photo.image}
            alt={photo.title}
            className="
              rounded-3xl
              max-h-[85vh]
              w-full
              object-contain
            "
          />

          <button
            onClick={onPrevious}
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-white/20
              backdrop-blur-md
              text-white
              text-4xl
              hover:bg-white/40
              transition
            "
          >
            ❮
          </button>

          <button
            onClick={onNext}
            className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-white/20
              backdrop-blur-md
              text-white
              text-4xl
              hover:bg-white/40
              transition
            "
          >
            ❯
          </button>

          <h3
            className="
              mt-6
              text-center
              text-2xl
              text-yellow-100
            "
          >
            {photo.title}
          </h3>

          <p
            className="
              mt-3
              text-center
              text-yellow-500
            "
          >
            {selectedIndex + 1} / {photos.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Lightbox;