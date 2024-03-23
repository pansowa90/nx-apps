import { motion } from "framer-motion";
import { useState } from "react";
import { useAppContext, State } from '@/app/context';

import Icon from '@component/icon/icon';

const layerVariants = {
  start: {
    y: 0,
  },
  end: {
    y: '100vh'
  },
}

const titleVariants = {
  start: {
    y: 75,
    opacity: 0
  },
  end: {
    y: 0,
    opacity: 1
  }
}


export default function Layer() {
  const { setState } = useAppContext();
  const [animation, setAnimation] = useState("start");

  const handleClick = (state: State) => {
    setState(state);
    setAnimation("end");
  }

  return (
    <motion.div 
      variants={layerVariants}
      initial="start"
      animate={animation}
      transition={{ type: "spring", delay: .5, duration: 1 }}
      className="z-10 w-full h-full bg-gray-50 inset-0 absolute flex flex-col justify-center items-center"
    >
      <motion.div 
        variants={titleVariants}
        initial="start"
        animate="end" 
        className="flex justify-center items-center flex-col">
        <h1 className="text-center text-5xl font-display text-black select-none">Tic Tac Toe</h1>
          <h2 className="italic p-8">Whos start?</h2>
          <div className="flex gap-12">
            <motion.button  
              className="bg-gray-800 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              onClick={() => { handleClick('x'); }}>
                <Icon type="line" />
            </motion.button>
            <motion.button 
            className="bg-gray-800 rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            onClick={() => { handleClick('o'); }}
            >
              <Icon type="circle" />
              </motion.button>  
          </div>

        </motion.div>
      </motion.div>
  )
}