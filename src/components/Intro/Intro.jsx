import { motion } from "framer-motion";

function Intro({ onStart }) {
  return (
    <motion.div
    initial ={{opacity: 0}}
    animate={{opacity: 5}}
    exit={{opacity: 10}}
    transition={{duration: 1.4}}
      onClick={onStart}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f0b08] cursor-pointer overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a130d] via-[#0f0b08] to-black"></div>

      {/* Decorative Blur */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-500/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <motion.p

initial={{
    opacity:0,
    scale:0
}}

animate={{
    opacity:1,
    scale:1
}}

transition={{
    delay:0.5,
    duration:0.8
}}

className="text-yellow-200 text-2xl mb-4 select-none"

>

♥

</motion.p>

        <p className="uppercase tracking-[8px] text-[#ABD6FF] text-sm">
          You Are Invited
        </p>

        <motion.h1 
        
        initial ={{opacity:0, y:30}}
        animate ={{opacity:1, y:30}}
        transition={{delay:1.4,duration:0.8}}
        
        className="mt-6 text-6xl text-yellow-100 font-serif italic">
          Tap to Open
        </motion.h1>

        <p className="mt-8 text-yellow-100/70">
          Tap anywhere to begin
        </p>

        <div className="mt-12 text-yellow-200 text-3xl animate-bounce">
          ↓
        </div>

      </div>
    </motion.div>
  );
}

export default Intro;