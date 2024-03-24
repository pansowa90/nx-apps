import { motion } from "framer-motion";
import { ReactElement, MouseEventHandler } from "react";
import './icon.css';

export type IconType = 'line' | 'circle' | null;

type Icon = {
  type: IconType
  onClick?: (type: IconType) => any;
}

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: .5, bounce: 0 },
        opacity: { duration: 0.01 }
      }
    };
  }
};

const Line = () => {
  return (
    <>
      <motion.line
        x1="50"
        y1="50"
        x2="150"
        y2="150"
        className="stroke-neutral-50"
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="50"
        y1="150"
        x2="150"
        y2="50"
        className="stroke-neutral-50"
        variants={draw}
        custom={2}
      />
    </>
  )
};

const Circle = () => {
  return (
    <>
      <motion.circle
        className="stroke-neutral-50"
        cx="100"
        cy="100"
        r="50"
        variants={draw}
        custom={1}
      />
    </>
  )
}

export default function Icon({ type }: Icon) {
  return (
    <motion.svg
      width="150"
      height="150"
      viewBox="0 0 200 200"
      initial="hidden"
      animate="visible"
    >
      {type === 'circle' ? (<Circle />) : null}
      {type === 'line' ? (<Line />) : null}
    </motion.svg>
  );
}