import './ShinyButton.css';
import { motion } from 'framer-motion';

export interface ShinyButtonProps {
  text: string;
}

export function ShinyButton(props: ShinyButtonProps) {
  return (
    <motion.button
      className="px-6 py-2 rounded-md relative radial-gradient"
      // @ts-ignore
      initial={{ "--x": "100%", scale: 1 }}
      // @ts-ignore
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 1,
        type: 'spring',
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: 'spring',
          stiffness: 10,
          damping: 5,
          mass: 0.1
        }
      }}
    >
      <span className="tracking-wide w-full h-full block relative linear-mask flex items-center">{props.text}</span>
      <span className='block absolute inset-0 rounded-md p-[2px] linear-overlay'></span>
    </motion.button>
  );
}

export default ShinyButtonProps;
