import { motion } from "framer-motion";

function GalleryItem({
  photo,
  index,
  onClick,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      onClick={() => onClick(index)}
      className="
group
relative
overflow-hidden
rounded-[30px]
cursor-pointer
h-full
shadow-2xl
"
    >
      <img
        src={photo.image}
        alt={photo.title}
        className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
        "
      />

      {/* Dark Overlay */}

      <div
  className="
  absolute
  inset-0
  bg-linear-to-t
  from-black/50
  via-transparent
  to-transparent
  opacity-100
  lg:opacity-0
  lg:group-hover:opacity-100
  transition-all
  duration-500
  flex
  items-end
  justify-end
  p-4
  "
>
  <div
    className="
    w-10
    h-10
    rounded-full
    bg-black/35
    backdrop-blur-md
    border
    border-white/20
    flex
    items-center
    justify-center
    text-white
    text-xl
    shadow-lg
    "
  >
    ⤢
  </div>
</div>
    </motion.div>
  );
}

export default GalleryItem;