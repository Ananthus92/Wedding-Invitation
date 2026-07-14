// import { useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// function hhh({
//   photos,
//   selectedIndex,
//   onClose,
//   onPrevious,
//   onNext,
// }) {
//   // Hooks must always be at the top
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);
//   const scrollPosition = useRef(0);

//   // Keyboard controls
//   useEffect(() => {
//     if (selectedIndex === null) return;

//     const handleKeyDown = (event) => {
//       if (event.key === "Escape") onClose();

//       if (event.key === "ArrowLeft") onPrevious();

//       if (event.key === "ArrowRight") onNext();
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [selectedIndex, onClose, onPrevious, onNext]);

//   // Lock page scroll while Lightbox is open
//   useEffect(() => {
//     if (selectedIndex === null) return;

//     scrollPosition.current = window.scrollY;

//     document.body.style.position = "fixed";
//     document.body.style.top = `-${scrollPosition.current}px`;
//     document.body.style.left = "0";
//     document.body.style.right = "0";
//     document.body.style.width = "100%";
//     document.body.style.overflow = "hidden";

//     return () => {
//       document.body.style.position = "";
//       document.body.style.top = "";
//       document.body.style.left = "";
//       document.body.style.right = "";
//       document.body.style.width = "";
//       document.body.style.overflow = "";

//       window.scrollTo({
//         top: scrollPosition.current,
//         behavior: "instant",
//       });
//     };
//   }, [selectedIndex]);

//   // Swipe Handler
//   const handleSwipe = () => {
//     if (touchEndX.current === 0) {
//       touchStartX.current = 0;
//       return;
//     }

//     const distance = touchStartX.current - touchEndX.current;

//     if (Math.abs(distance) < 70) {
//       touchStartX.current = 0;
//       touchEndX.current = 0;
//       return;
//     }

//     if (distance > 0) {
//       onNext();
//     } else {
//       onPrevious();
//     }

//     touchStartX.current = 0;
//     touchEndX.current = 0;
//   };

//   // Don't render if no image is selected
//   if (selectedIndex === null) return null;

//   const photo = photos[selectedIndex];

//   return (
//     <AnimatePresence>
//       <motion.div
//        key={photo.id}
//       style={{
//   transform: "translateZ(0)",
//   willChange: "opacity",
// }}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="
//           fixed
//           inset-0
//           z-50
//           bg-black/90
//           backdrop-blur-md
//           flex
//           items-center
//           justify-center
//           p-6
//         "
//         onClick={onClose}
//       >
//         <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1 }}
//   exit={{ opacity: 0 }}
//   transition={{ duration: 0.25 }}
//   style={{
//     transform: "translateZ(0)",
//     WebkitTransform: "translateZ(0)",
//     willChange: "transform, opacity",
//   }}
//   onClick={(e) => e.stopPropagation()}
//   className="relative w-full max-w-5xl"
//           onTouchStart={(e) => {
//             touchStartX.current = e.touches[0].clientX;
//           }}
//           onTouchMove={(e) => {
//             touchEndX.current = e.touches[0].clientX;
//           }}
//           onTouchEnd={handleSwipe}
//         >
//           <button
//   onClick={onClose}
//   className="
//     fixed
//     top-6
//     right-6
//     z-[100]
//     w-12
//     h-12
//     rounded-full
//     bg-black/40
//     backdrop-blur-md
//     text-white
//     text-3xl
//     flex
//     items-center
//     justify-center
//   "
// >
//   ✕
// </button>

// <img
//   key={photo.id}
//   src={photo.image}
//   alt={photo.title}
//   decoding="async"
//   loading="eager"
//   draggable={false}
//   className="
//     w-full
//     max-h-[75vh]
//     rounded-3xl
//     object-contain
//   "
// />

//           <button
//             onClick={onPrevious}
//             className="
//               absolute
//               left-5
//               top-1/2
//               -translate-y-1/2
//               w-14
//               h-14
//               rounded-full
//               bg-white/20
//               backdrop-blur-md
//               text-4xl
//               text-white
//               hover:bg-white/40
//               transition
//             "
//           >
//             ❮
//           </button>

//           <button
//             onClick={onNext}
//             className="
//               absolute
//               right-5
//               top-1/2
//               -translate-y-1/2
//               w-14
//               h-14
//               rounded-full
//               bg-white/20
//               backdrop-blur-md
//               text-4xl
//               text-white
//               hover:bg-white/40
//               transition
//             "
//           >
//             ❯
//           </button>

//           <h3 className="mt-6 text-center text-2xl text-yellow-100">
//             {photo.title}
//           </h3>

//           <p className="mt-3 text-center text-yellow-500">
//             {selectedIndex + 1} / {photos.length}
//           </p>
//         </motion.div>
//       </motion.div>
//     </AnimatePresence>
//   );
// }

// export default hhh;