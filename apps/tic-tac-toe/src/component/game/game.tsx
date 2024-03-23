import { motion } from "framer-motion";
import { boardContainerVariants, boxVariants, titleVaraints } from "./game.animation";

import Box from "@component/box/box";

export default function Game() {
  return (
    <div className="min-h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <motion.h1 
        variants={titleVaraints} 
        initial="hidden"
        animate="show"
        className="text-center text-7xl font-display text-white select-none"
      >Tic Tac Toe</motion.h1>
      <motion.div 
        variants={boardContainerVariants} 
        initial="hidden"
        animate="show"
        className="w-1/2 grid grid-cols-3 p-8 gap-8 m-auto"
      >
        <Box variants={boxVariants} />
        <Box variants={boxVariants} />
        <Box variants={boxVariants} />
        <Box variants={boxVariants} />
        <Box variants={boxVariants} />
        <Box variants={boxVariants} />
        <Box variants={boxVariants} />
        <Box variants={boxVariants} />
        <Box variants={boxVariants} />
      </motion.div>
    </div>
  
  )
}