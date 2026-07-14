import { motion } from "framer-motion";

function ScratchContent({ revealed }) {
  return (
    <motion.div
    initial={{
        opacity: 0,
        scale: 0.95
    }}

    animate={{
        opacity: revealed ? 1 : 0,
        scale: revealed ? 1 : 0.95
    }}

    transition={{
        duration: 0.8,
        ease: "easeOut"
    }}

    className="
relative
w-130
h-55
rounded-3xl
bg-[#f7efe2]
shadow-2xl
overflow-hidden
flex
items-center
justify-center
text-center
select-none
"
>
    <div
  className="
  absolute
  w-80
  h-80
  rounded-full
  bg-yellow-300/20
  blur-3xl
  animate-pulse
  select-none
  "
></div>
      <div>

        <p className="uppercase tracking-[5px] text-yellow-700">

          Wedding Date

        </p>

        <h2
          className="
          mt-3
          text-6xl
font-light
tracking-wide
          text-yellow-800
          "
        >
          07 September 2026
        </h2>

        <p className="mt-2 text-xl">

          Muhurtham · 10:30-11:00 AM

        </p>

        <p className="mt-3">

          Krishna Theertham Kalyanamandapam

        </p>

      </div>

    </motion.div>
  );
}

export default ScratchContent;