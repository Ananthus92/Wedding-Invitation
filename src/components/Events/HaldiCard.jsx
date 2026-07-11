import { motion } from "framer-motion";
import {
  Clock5,
  MapPin,
  UtensilsCrossed,
} from "lucide-react";

function HaldiCard({ event }) {
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
      <div className="flex flex-col items-center gap-5 pb-8">

        {/* Icon
        <div
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
    text-center
    text-4xl
    font-montenegrin
    text-[#4d0752]
    mt-26
  "
>
  {event.title}
</h3>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        {/* Time */}
        <div className="flex items-center justify-center gap-2 text-[#4d0752]">
          <Clock5 size={18} />
          <p className="text-lg">
            {event.start}
          </p>
        </div>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-[#4d0752] font-bold">
          <MapPin
            size={18}
            className="flex-shrink-0"
          />

          <p className="font-medium text-center leading-7 text-base">
            {event.location}
          </p>
        </div>

        {/* Divider */}
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>

        {/* Meal */}
        <div className="flex items-center justify-center gap-2 text-[#4d0752]">
          <UtensilsCrossed
            size={18}
            className="flex-shrink-0"
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

export default HaldiCard;