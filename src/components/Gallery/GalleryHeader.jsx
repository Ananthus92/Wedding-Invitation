import { motion } from "framer-motion";

function GalleryHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="font-merienda font-bold uppercase tracking-[8px] text-yellow-600 text-sm">
        Our Gallery
      </p>

      <h2 className="eagle-lake-regular uppercase mt-5 text-5xl md:text-6xl text-yellow-100">
        Captured Moments
      </h2>

      <p className="font-Tangerine text-3xl mt-6 max-w-2xl mx-auto text-yellow-400">
        Every picture tells a story of love, laughter and
        unforgettable memories.
      </p>
    </motion.div>
  );
}

export default GalleryHeader;