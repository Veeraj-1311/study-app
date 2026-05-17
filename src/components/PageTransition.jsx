import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function PageTransition({ children, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.24, ease: EASE }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
