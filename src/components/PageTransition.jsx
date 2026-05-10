import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function PageTransition({ children, className = '', style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.985, filter: 'blur(8px)' }}
      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: EASE, delay: 0.18 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        willChange: 'transform, opacity, filter',
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
