import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppContext, State } from '@/app/context';
import { DEFAULT_STATE } from "@/app/app.defaults";

import Box from "@component/box/box";

const popupVariants = {
  start: {
    y: '100vh'
  },
  end: {
    y: 0,
    transition: {
      type: "tween",
      delay: .75
    }
  },
}

export default function Popup() {
  const { result, setResult, setGameState, setCurrentPlayer } = useAppContext();
  const [animation, setAnimation] = useState('start');

  const handleClick = (state: State) => {
    setAnimation('start');
    setCurrentPlayer(state);
    setGameState(DEFAULT_STATE);
    setResult(null);
  }

  useEffect(() => {
    if (!result) return;
    setAnimation('end');
  }, [result]);

  return (
    <motion.div
      variants={popupVariants}
      initial="start"
      animate={animation}
      transition={{ type: "spring", duration: 1 }}
      className="z-10 w-full h-full bg-neutral-50 inset-0 absolute flex flex-col justify-center items-center"
    >
      <div className="text-center p-8 text-5xl font-display select-none">
        {result}
      </div>
      <h2 className="italic p-8">Who is next?</h2>
      <div className="flex gap-12">
        <Box<State> state={'x'} onClick={() => { handleClick('x'); }} />
        <Box<State> state={'o'} onClick={() => { handleClick('o'); }} />
      </div>
    </motion.div>
  );
}