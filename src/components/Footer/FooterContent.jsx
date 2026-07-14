import { motion } from "framer-motion";
import FooterDivider from "./FooterDivider";

function FooterContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center"
    >
      <h2 className="font-merienda uppercase text-3xl md:text-5xltext italic text-yellow-100">
        Thank You
      </h2>

      <p className="font-Tangerine mt-8 text-4xl text-yellow-300 leading-9">
         Thank you for being
    <br />
    part of our beautiful journey.
      </p>

      <p className="chicle-regular mt-10 text-3xl text-yellow-100">
        ARATHY ❤️ SEKHAR
      </p>

      <FooterDivider />

      <p className="font-Tangerine text-yellow-400 text-3xl">
        May God bless us with
    <br />
    love, joy and togetherness.
      </p>

      <FooterDivider />

      <p
  className="font-Tangerine
    text-yellow-300
    font-bold
    text-3xl
    md:text-2xl
    italic
    tracking-wide
  "
>
  We look forward to celebrating
  <br />
  this beautiful day with you.
</p>

<div className="flex items-center justify-center gap-4 mt-8">
  <div className="w-24 h-px bg-linear-to-r from-transparent to-yellow-500" />

  <span className="text-2xl text-yellow-400">❦</span>

  <div className="w-24 h-px bg-linear-to-l from-transparent to-yellow-500" />
</div>
    </motion.div>
  );
}

export default FooterContent;