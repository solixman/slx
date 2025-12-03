import { motion } from "framer-motion";
import lg from "@/assets/il.png";

export default function Logo({ size = 120 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer relative flex items-center gap-2"
      style={{ width: size * 1.5, height: size * 1 }}
    >
      {/* Image */}
      <motion.img
        src={lg}
        alt="S Logo"
        width={size}
        height={size}
        className="object-contain"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      />


      
    </motion.div>
  );
}
