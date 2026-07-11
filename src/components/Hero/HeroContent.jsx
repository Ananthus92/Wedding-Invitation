import { motion } from "framer-motion";

function HeroContent({
  bride,
  groom,
  date,
  venue,
}) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: .5 }}
        className="uppercase tracking-[8px] text-yellow-300"
      >
        Together With Our Families
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="text-6xl md:text-8xl font-light mt-6"
      >
        {groom}
      </motion.h1>

      <motion.div
        animate={{
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="text-4xl my-4"
      >
        ❤
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="text-6xl md:text-8xl font-light"
      >
        {bride}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-8 text-xl tracking-widest"
      >
        {date}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="mt-3 text-yellow-200"
      >
        {venue}
      </motion.p>

    </div>
  );
}

export default HeroContent;