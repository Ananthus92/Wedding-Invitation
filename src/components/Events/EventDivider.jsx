import { motion } from "framer-motion";

function EventDivider({
  icon,
  title,
  date,
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
      }}
      viewport={{ once: true }}
      className="my-20 text-center"
    >
      <div className="flex items-center justify-center gap-6">

        <div className="h-px w-20 bg-yellow-700"></div>

        <span className="text-3xl">
          {icon}
        </span>

        <div className="h-px w-20 bg-yellow-700"></div>

      </div>

      <h2 className="mt-6 text-5xl text-yellow-100 tracking-wide">
        {title}
      </h2>

      <p className="mt-3 text-yellow-400 tracking-[4px] uppercase">
        {date}
      </p>

    </motion.div>
  );
}

export default EventDivider;