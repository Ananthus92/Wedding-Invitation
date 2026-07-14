import { motion } from "framer-motion";

function EventHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="font-bold font-merienda  uppercase tracking-[8px] text-yellow-600 text-sm">
        Wedding Celebrations
      </p>

      <h2 className="eagle-lake-regular mt-8 text-3xl uppercase md:text-6xl text-yellow-100">
        Join Our Beautiful Moments
      </h2>

      <p className="font-Tangerine text-3xl mt-10 text-yellow-400 max-w-4xl mx-auto">
        Every celebration marks a beautiful chapter in our journey.
        We warmly invite you to be part of these unforgettable moments.
      </p>
    </motion.div>
  );
}

export default EventHeader;