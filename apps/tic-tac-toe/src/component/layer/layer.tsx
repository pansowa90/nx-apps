import { motion } from "framer-motion";
import { useState } from "react";
import { useAppContext, State } from '@/app/context';
import Box from "@component/box/box";

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
      className="z-10 w-full h-full bg-neutral-50 inset-0 absolute flex flex-col justify-center items-center"
    >
      <motion.div
        variants={titleVariants}
        initial="start"
        animate="end"
        className="flex justify-center items-center text-neutral-800 flex-col">
        <h1 className="text-center text-5xl font-display select-none">Let's Tic Tac Toe</h1>
        <h2 className="italic p-8">Whos start?</h2>
        <div className="flex gap-12">
          <Box<State> state={'x'} onClick={() => { handleClick('x'); }} />
          <Box<State> state={'o'} onClick={() => { handleClick('o'); }} />
        </div>
      </motion.div>
    </motion.div>
  )
}