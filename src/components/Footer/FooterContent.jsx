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
      <h2 className="text-3xl md:text-5xltext italic text-yellow-100">
        Thank You
      </h2>

      <p className="mt-8 text-xl text-yellow-300 leading-9">
        Thank you for being part of our beautiful journey.
      </p>

      <p className="mt-10 text-3xl text-yellow-100">
        ARATHY ❤️ SEKHAR
      </p>

      <FooterDivider />

      <p className="text-yellow-400">
        Looking forward to celebrating with you.
      </p>

      <FooterDivider />

      <p className="text-sm text-gray-500">
        Made with ❤️
      </p>
    </motion.div>
  );
}

export default FooterContent;