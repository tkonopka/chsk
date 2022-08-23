import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export const OpacityMotion = ({
    role,
    firstRender,
    children,
}: {
    role: string
    firstRender: boolean
    children: ReactNode
}) => {
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
