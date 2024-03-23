export const boardContainerVariants = { 
  hidden: { 
    opacity: 0,
  }, 
  show: {
    opacity: 1,
    transition: {
      staggerChildren: .25
    }
  } 
}

export const boxVariants = {
  hidden: { 
    opacity: 0,
  }, 
  show: {
    opacity: 1,
  } 
}

export const titleVaraints = {
  hidden: {
    opacity: 0,
    y: 75,
  },
  show: {
    opacity: 1,
    y: 0 
  }
}