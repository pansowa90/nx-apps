import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAppContext, State } from '@/app/context';
import { WINNING_COMBOS } from "@/app/app.defaults";
import Box from "@component/box/box";

const boardContainerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: .5,
      staggerChildren: .15
    }
  }
}

const boxVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  }
}

export default function Game() {
  const { state, gameState, setResult, setGameState } = useAppContext();

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

  const handleWin = () => {
    setResult(`Congrats 🎉 player! "${currentPlayer?.toUpperCase()}"`);
  }

  const handleDraw = () => {
    setResult(`Game ended in a draw 🤯`);
  }

  const checkForWinner = () => {
    let roundWon = false;

    for (let i = 0; i < WINNING_COMBOS.length; i++) {
      const winCombo = WINNING_COMBOS[i];

      let a = gameState[winCombo[0]];
      let b = gameState[winCombo[1]];
      let c = gameState[winCombo[2]];

      if ([a, b, c].includes(undefined)) continue;
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) return handleWin();
    if (!gameState.includes(undefined)) return handleDraw();
  };

  useEffect(() => {
    if (!state) return;
    setCurrentPlayer(state);
    setAnimate('show');

  }, [state]);

  useEffect(() => {
    if (gameState.filter((s) => s !== undefined).length > 0) {
      setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
      checkForWinner();
    }

  }, [gameState]);

  return (
    <div className="min-h-full p-4 lg:p-8 bg-neutral-100 flex items-center">
      <motion.div
        variants={boardContainerVariants}
        initial="hidden"
        animate={animate}
        className="lg:w-1/2 grid grid-cols-3 gap-4 lg:gap-8 m-auto grid-rows-3 aspect-square items-center justify-items-center"
      >
        {gameState.map((value, index) => (
          <Box<State> key={index} index={index} state={value} variants={boxVariants} onClick={handleClick} />
        ))}
      </motion.div>
    </div>

  )
}