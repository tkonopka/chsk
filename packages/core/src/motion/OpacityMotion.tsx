import { AnimatePresence, m } from 'framer-motion'
import { OpacityMotionProps } from './types'

export const OpacityMotion = ({
    role,
    firstRender,
    visible = true,
    children,
}: OpacityMotionProps) => {
    return (
        <AnimatePresence>
            {visible && (
                <m.g
                    role={role}
                    initial={{ opacity: firstRender ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    {children}
                </m.g>
            )}
        </AnimatePresence>
    )
}
