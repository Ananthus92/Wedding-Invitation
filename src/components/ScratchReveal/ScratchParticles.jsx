import { motion } from "framer-motion";

function ScratchParticles({ particles }) {
  return (
    <>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
            y: -30,
          }}
          transition={{
            duration: 0.8,
          }}
          className="absolute pointer-events-none"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          ✨
        </motion.div>
      ))}
    </>
  );
}

export default ScratchParticles;