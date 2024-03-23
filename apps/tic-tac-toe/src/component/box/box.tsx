import './box.css';
import { motion } from "framer-motion";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};

export default function Box({ variants }: { variants: Record<any, any>}) {
  return (
    <motion.div 
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      variants={variants} 
      className="box"
      transition={{ bounceDamping: 10, bounceStiffness: 600 }}
    >
      {/* <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="50"
          stroke="#e2e2e2"
          variants={draw}
          custom={1}
        />
      </motion.svg> */}

      <motion.svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
      >
        <motion.line
          x1="50"
          y1="50"
          x2="150"
          y2="150"
          stroke="#e2e2e2"
          variants={draw}
          custom={1}
        />
        <motion.line
          x1="50"
          y1="150"
          x2="150"
          y2="50"
          stroke="#e2e2e2"
          variants={draw}
          custom={2}
        />
      </motion.svg>
    </motion.div>
  )
}