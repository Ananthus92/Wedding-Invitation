import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 6 + 3,
  duration: Math.random() * 8 + 10,
  delay: Math.random() * 5,
}));

function FloatingSparkles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {particles.map((particle) => (

        <motion.div
          key={particle.id}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: [0, 0.25, 0],
            y: [-20, -100],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          className="absolute rounded-full bg-yellow-300"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
          }}
        />

      ))}

    </div>
  );
}

export default FloatingSparkles;