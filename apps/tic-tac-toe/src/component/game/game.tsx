import { useEffect, useState, MouseEventHandler } from "react";
import { motion } from "framer-motion";
import { boardContainerVariants, boxVariants } from "./game.animation";
import { useAppContext, State } from '@/app/context';

import Box from "@component/box/box";

const DEFAULT_STATE: Array<State> = Array.from({ length: 9 }, (_, i) => undefined);

const WINNING_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];

export default function Game() {
  const { state } = useAppContext();

  const [gameState, setGameState] = useState(DEFAULT_STATE);
  const [currentPlayer, setCurrentPlayer] = useState<State>(undefined);
  const [animate, setAnimate] = useState('');


  const handleClick = (e: any) => {
    const index = +e.target.dataset.index;
    const currentValue = gameState[index];

    if (currentValue) return;

    const newState = [...gameState];
    newState[index] = currentPlayer;

    setGameState(newState);
  };

  useEffect(() => {
    if (!state) return;
    setCurrentPlayer(state);
    setAnimate('show');

  }, [state])

  useEffect(() => {
    setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
  }, [gameState])

  return (
    <div className="min-h-full p-8 bg-gray-100">
      <motion.div 
        variants={boardContainerVariants} 
        initial="hidden"
        animate={animate}
        className="w-1/2 grid grid-cols-3 p-8 gap-8 m-auto"
      >
        { gameState.map((value, index) => (
          <Box<State> key={index} index={index} state={value} variants={boxVariants} onClick={handleClick} />
        )) }
      </motion.div>
    </div>

  )
}