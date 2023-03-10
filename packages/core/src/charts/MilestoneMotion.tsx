import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import { useMilestones } from './index'
import { getMotionValue, getTransitionValue } from './utils'
import { MilestoneMotionProps } from './types'

export const MilestoneMotion = ({
    initial,
    initialOn,
    exit,
    exitOn,
    animate = 'none',
    transition,
    visible,
    setRole = true,
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

    const role = 'milestone-' + initialOn + (exitOn ? '-' + exitOn : '')
    return (
        <AnimatePresence>
            {active && (
                <m.g
                    role={setRole ? role : undefined}
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
