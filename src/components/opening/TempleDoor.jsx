import { motion } from "framer-motion";

function TempleDoor({open}) {
  return (
    <div className="fixed inset-0 flex z-50">
      
      {/* Left Door */}
  {/* Left Door */}

<motion.div

className="
w-1/2
h-screen
bg-[#34180D]
border-r-2
border-yellow-700
relative
overflow-hidden
"

animate={

open

?

{ x:"-100%" }

:

{ x:0 }

}

transition={

{

duration:2,

ease:"easeInOut"

}

}

>

<div className="absolute inset-3 border-2 border-yellow-700 rounded-sm"></div>

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-7xl">

🪷

</div>

<div className="absolute top-1/2 right-10 -translate-y-1/2">

<div className="w-10 h-10 border-4 border-yellow-600 rounded-full"></div>

</div>

</motion.div>

      {/* Golden Light */}
      {

!open && (

<div

className="

absolute

left-1/2

top-0

-translate-x-1/2

w-4

h-full

bg-linear-to-b

from-yellow-100

via-yellow-400

to-yellow-100

shadow-[0_0_80px_30px_rgba(255,215,0,0.7)]

"

>

</div>

)

}

      {/* Right Door */}
      <motion.div
        initial={{ x: 0 }}
       animate={{

x: open ? "100%" : 0

}}
        transition={{
          duration: 2,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="
          w-1/2
          h-screen
          bg-[#34180D]
          border-l-2
          border-yellow-700
          relative
          overflow-hidden
        "
      >
        <div className="absolute inset-3 border-2 border-yellow-700 rounded-sm"></div>

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 text-7xl">
          🪷
        </div>

        <div className="absolute top-1/2 left-10 -translate-y-1/2">
          <div className="w-10 h-10 border-4 border-yellow-600 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}

export default TempleDoor;