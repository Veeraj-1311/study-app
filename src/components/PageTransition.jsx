import { motion } from 'framer-motion'

// Expo-out: high-energy snap
const expoOut = [0.16, 1, 0.3, 1]

const variants = {
  // Page enters from right — stretched + blurred at start
  initial: {
    x: '100%',
    scaleX: 1.5,
    filter: 'blur(24px)',
  },
  // Settles into place
  animate: {
    x: '0%',
    scaleX: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.4, ease: expoOut },
  },
  // Slides out left — 1.5x stretch + blur peak at 50% midpoint
  exit: {
    x: ['0%', '-50%', '-100%'],
    scaleX: [1, 1.5, 1],
    filter: ['blur(0px)', 'blur(24px)', 'blur(0px)'],
    transition: {
      duration: 0.4,
      ease: expoOut,
      times: [0, 0.5, 1],
    },
  },
}

export default function PageTransition({ children, className = '', style = {} }) {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        willChange: 'transform, filter',
        transformOrigin: 'center center',
        zIndex: 1,
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
