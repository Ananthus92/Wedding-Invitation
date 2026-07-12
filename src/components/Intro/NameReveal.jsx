import { motion } from "framer-motion";
import { useEffect } from "react";

function NameReveal({
  
  
  bride,
  groom,
  // date,
  onComplete,
}) {

  useEffect(() => {

    const timer = setTimeout(() => {
      onComplete();
    }, 4500);

    return () => clearTimeout(timer);

  }, [onComplete]);

  return (

    <div className="fixed inset-0 z-40 bg-[#090705] flex items-center justify-center overflow-hidden select-none">

      {/* Golden Glow */}
      <div
        className="
        absolute
        w-125
        h-125
        rounded-full
        bg-yellow-500/10
        blur-3xl
        "
      />

      <div className="relative text-center">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5
          }}
          className="text-6xl text-yellow-100 tracking-[10px]"
        >
          {bride} 
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.4
          }}
          className="my-6 text-4xl text-yellow-400"
        >
          ♥
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 2
          }}
          className="text-6xl text-yellow-100 tracking-[10px]"
        >
          {groom}
        </motion.h1>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 3
          }}
          className="mt-10 tracking-[6px] text-yellow-300"
        >
          {date}
        </motion.p> */}

      </div>

    </div>

  );
}

export default NameReveal;