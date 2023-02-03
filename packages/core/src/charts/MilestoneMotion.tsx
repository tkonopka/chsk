import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import { useMilestones } from './index'
import { getMotionValue, getTransitionValue } from './utils'
import { MilestoneMotionProps } from './types'

export const MilestoneMotion = ({
    role,
    initial,
    initialOn,
    exit,
    exitOn,
    animate = 'none',
    transition,
    visible,
    children,
}: MilestoneMotionProps) => {
    const [active, setActive] = useState(visible ?? initialOn === undefined)
    const milestones = useMilestones()

    const turnOn = (initialOn && milestones.has(initialOn)) ?? false
    const turnOff = (exitOn && milestones.has(exitOn)) ?? false
    const defaultOn = !initialOn

    if (milestones.size > 0 || !visible) {
        if (!active) {
            if ((turnOn || defaultOn) && !turnOff) {
                setActive(true)
            }
        }
        if (active) {
            if (!turnOn && !defaultOn) {
                setActive(false)
            }
            if (turnOff) {
                setActive(false)
            }
        }
    }

    return (
        <AnimatePresence>
            {active && (
                <m.g
                    role={role}
                    initial={getMotionValue(initial)}
                    animate={getMotionValue(animate)}
                    exit={getMotionValue(exit)}
                    transition={getTransitionValue(transition)}
                >
                    {children}
                </m.g>
            )}
        </AnimatePresence>
    )
}
