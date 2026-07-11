import { motion } from "framer-motion";

function VenueDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center my-16"
    >
      <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-yellow-500" />

      <div
        className="
          mx-6
          w-14
          h-14
          rounded-full
          border
          border-yellow-500
          flex
          items-center
          justify-center
          text-2xl
          bg-[#111111]
        "
      >
        💍
      </div>

      <div className="w-24 h-[2px] bg-gradient-to-l from-transparent to-yellow-500" />
    </motion.div>
  );
}

export default VenueDivider;