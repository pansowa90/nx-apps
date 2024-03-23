import { MouseEventHandler, useState } from 'react';
import { motion } from "framer-motion";
import Icon from '@component/icon/icon';

type Box<T> = {
  index: number;
  state: T; 
  variants: Record<any, any>;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function Box<T>({ index, state, variants, onClick }: Box<T>) {
  return (
    <motion.div 
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      variants={variants} 
      className="bg-gray-800 aspect-square rounded-lg justify-center flex items-center gap-8"
      transition={{ bounceDamping: 10, bounceStiffness: 600 }}
      data-index={index}
    >
      <Icon type={state === 'x' ? 'line' : state == 'o' ? 'circle' : null} />
    </motion.div>
  )
}