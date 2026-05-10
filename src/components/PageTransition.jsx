import { motion } from 'framer-motion'

export default function PageTransition({ children, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
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
