import { motion } from "framer-motion";

const Logo = ({ size = 60 }: { size?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="cursor-pointer relative"
      style={{ width: size, height: size * 0.6 }}
    >
      <svg
        viewBox="0 0 120 60"
        width={size}
        height={size * 0.6}
        className="overflow-visible"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(187, 100%, 50%)" />
            <stop offset="100%" stopColor="hsl(270, 60%, 60%)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* S */}
        <motion.text
          x="5"
          y="45"
          fill="url(#logoGradient)"
          filter="url(#glow)"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          fontSize="42"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          S
        </motion.text>

        {/* L */}
        <motion.text
          x="40"
          y="45"
          fill="url(#logoGradient)"
          filter="url(#glow)"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          fontSize="42"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          L
        </motion.text>

        {/* X */}
        <motion.text
          x="75"
          y="45"
          fill="url(#logoGradient)"
          filter="url(#glow)"
          fontFamily="Space Grotesk, sans-serif"
          fontWeight="700"
          fontSize="42"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          X
        </motion.text>

        {/* Decorative dot */}
        <motion.circle
          cx="115"
          cy="42"
          r="4"
          fill="hsl(187, 100%, 50%)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        />
      </svg>
    </motion.div>
  );
};

export default Logo;
