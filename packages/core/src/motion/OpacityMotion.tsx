import { AnimatePresence, motion } from 'framer-motion'
import { OpacityMotionProps } from './types'

export const OpacityMotion = ({ role, firstRender, children }: OpacityMotionProps) => {
    return (
        <AnimatePresence>
            <motion.g
                role={role}
                initial={{ opacity: firstRender ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {children}
            </motion.g>
        </AnimatePresence>
    )
}
