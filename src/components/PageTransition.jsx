import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function PageTransition({ children, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: EASE }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
