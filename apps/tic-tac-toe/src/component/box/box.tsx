import { MouseEventHandler, useState } from 'react';
import { motion } from "framer-motion";
import Icon from '@component/icon/icon';

type Box<T> = {
  index?: number;
  state: T;
  variants?: Record<any, any>;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export default function Box<T>({ index, state, variants, onClick }: Box<T>) {
  return (
    <motion.div
      onClick={onClick}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      variants={variants}
      className="bg-neutral-800 w-20 h-20 lg:w-44 lg:h-44 aspect-square rounded-lg justify-center flex items-center"
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      data-index={index}
    >
      <Icon type={state === 'x' ? 'line' : state == 'o' ? 'circle' : null} />
    </motion.div>
  )
}