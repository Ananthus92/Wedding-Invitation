import { motion } from "framer-motion";

function VenueCard({
  
  type,
  date,
  time,
  venue,
  address,
  mapLink,
  image,
  
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
      bg-[#111111]
      rounded-[40px]
      overflow-hidden
      border
      border-yellow-700/30
      shadow-2xl
      "
      style={{
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
    >
      

      
      {/* Content */}

      <div className="p-10 select-none">

        <h2 className="text-2xl ml-4 font-mono text-yellow-200 whitespace-nowrap">

          {type}

        </h2>

        <div className="mt-25 space-y-4">

          <p className=" text-yellow-400 font-mono itallic">

            📅 {date}

          </p>

          <p className="text-yellow-400 font-mono">

            🕕 {time}

          </p>

          <p className="text-yellow-100 text-xl">

            📍 {venue}

          </p>

          <p className="text-gray-300 leading-8">

            {address}

          </p>

        </div>

        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="
          inline-block
          mt-10
          px-8
          py-4
          rounded-full
          bg-yellow-600
          hover:bg-yellow-500
          transition
          text-black
          font-semibold
          "
        >
          Open in Google Maps
        </a>

      </div>
    </motion.div>
  );
}

export default VenueCard;