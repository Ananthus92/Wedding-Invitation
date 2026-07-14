import { motion } from "framer-motion";

import thaali from "../../assets/icons/thaali.png";

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
    w-16
    h-16
    rounded-full
    border
    border-yellow-500/50
    bg-[#111111]
    flex
    items-center
    justify-center
    shadow-lg
  "
>
  <img
    src={thaali}
    alt="Kerala Wedding Thaali"
    className="w-10 h-10 object-contain"
  />
</div>

      <div className="w-24 h-[2px] bg-gradient-to-l from-transparent to-yellow-500" />
    </motion.div>
  );
}

export default VenueDivider;