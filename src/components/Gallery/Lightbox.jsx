import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Lightbox({
  photos,
  selectedIndex,
  onClose,
  onPrevious,
  onNext,
}) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const scrollPosition = useRef(0);

  // Keyboard Navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, onClose, onPrevious, onNext]);

  // Lock Background Scroll
  useEffect(() => {
    if (selectedIndex === null) return;

    scrollPosition.current = window.scrollY;

    document.body.style.position = "fixed";
document.body.style.top = `-${scrollPosition.current}px`;
document.body.style.left = "0";
document.body.style.right = "0";
document.body.style.width = "100%";
document.body.style.overflow = "hidden";

    return () => {
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";
  document.body.style.overflow = "";

  window.scrollTo(0, scrollPosition.current);
};
    
  }, [selectedIndex !== null]);

  // Swipe Navigation
  const handleSwipe = () => {
    if (touchEndX.current === 0) {
      touchStartX.current = 0;
      return;
    }

    const distance = touchStartX.current - touchEndX.current;

    if (Math.abs(distance) < 70) {
      touchStartX.current = 0;
      touchEndX.current = 0;
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

  if (selectedIndex === null) return null;

  const photo = photos[selectedIndex];

  return (
    <AnimatePresence>
      <motion.div
        key={photo.id}
         src={photo.image}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0 }}
        className="
          fixed
          inset-0
          z-50
          bg-black/95
          flex
          items-center
          justify-center
          p-6
        "
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl"
          onTouchStart={(e) => {
            touchStartX.current = e.touches[0].clientX;
          }}
          onTouchMove={(e) => {
            touchEndX.current = e.touches[0].clientX;
          }}
          onTouchEnd={handleSwipe}
        >
          {/* Close Button */}

          <button
            onClick={onClose}
            className="
              fixed
              top-6
              right-6
              z-[100]
              w-12
              h-12
              rounded-full
              bg-black/60
              text-white
              text-3xl
              flex
              items-center
              justify-center
            "
          >
            ✕
          </button>

          {/* Image */}

          <img
            key={photo.id}
            src={photo.image}
            alt={photo.title}
            loading="eager"
            decoding="async"
            draggable={false}
            className="
              w-full
              max-h-[75vh]
              rounded-3xl
              object-contain
              select-none
            "
          />

          {/* Previous */}

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
              bg-black/50
              text-white
              text-4xl
              transition
            "
          >
            ❮
          </button>

          {/* Next */}

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
              bg-black/50
              text-white
              text-4xl
              transition
            "
          >
            ❯
          </button>

          <h3 className="mt-6 text-center text-2xl text-yellow-100">
            {photo.title}
          </h3>

          <p className="mt-3 text-center text-yellow-500">
            {selectedIndex + 1} / {photos.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Lightbox;