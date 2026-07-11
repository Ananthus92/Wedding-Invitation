import { motion } from "framer-motion";

function CountdownCard({
  value,
  label,
  delay,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay,
      }}
      viewport={{ once: true }}
      className="
      bg-[#17120d]
      rounded-3xl
      p-8
      shadow-2xl
      border
      border-yellow-800/40
      text-center
      "
    >
      <h2 className="text-6xl text-yellow-300 font-light">
        {String(value).padStart(2, "0")}
      </h2>

      <p className="mt-3 uppercase tracking-[5px] text-yellow-500 text-sm">
        {label}
      </p>
    </motion.div>
  );
}

export default CountdownCard;