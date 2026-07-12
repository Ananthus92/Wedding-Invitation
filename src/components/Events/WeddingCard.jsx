import { motion } from "framer-motion";
import {
  Clock5,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";

function WeddingCard({ event }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="
        group
        h-full
        rounded-[35px]
        overflow-hidden
        border
        border-yellow-700/30
        shadow-[0_20px_60px_rgba(0,0,0,0.45)]
        transition-all
        duration-500
        hover:border-yellow-500
        p-8
      "
      style={{
        backgroundImage: `url(${event.background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center gap-4 pb-8">

       {/* icon */}
        {/* <div
          className="
            w-20
            h-20
            rounded-full
            bg-yellow-600/15
            border
            border-yellow-500
            flex
            items-center
            justify-center
            text-4xl
            transition
            duration-500
            group-hover:scale-110
          "
        >
          {event.icon}
        </div> */}

        {/* Title */}
        <h3
          className="
relative
z-10
pt-28
text-center
text-4xl
md:text-6xl
font-montenegrin
text-[#d6b393]
tracking-wide
"
        >
          {event.title}
        </h3>

        {/* Divider */}
        
        <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>

        {/* Time */}
        <div className="flex items-center justify-center gap-2 text-[#d6b393]">
          <Clock5 size={18} />
          <p className="text-">
            {event.start} 
          </p>
        </div>

        {/* Divider */}
        <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-[#d6b393]">
          <MapPin
            size={18}
            className="shrink-0"
          />

          <p
className="
text-center
leading-7
max-w-70
"
>
{event.location}
</p>
        </div>

        {/* Divider */}
        <div className="w-20 h-0.5 bg-linear-to-r from-transparent via-yellow-500 to-transparent"></div>

        {/* Meal */}
        <div className="font-bold flex items-center justify-center gap-2 mb-6 text-[#d6b393]">
          <UtensilsCrossed
            size={14}
            className="shrink-0"
          />

          <p
            className="
              text-center
              text-lg
              font-montenegrin
            "
          >
            {event.meal}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default WeddingCard;