import { AnimatePresence, m } from 'framer-motion'
import { GAnimationProp, AnimationSpec, MilestoneMotionProps } from './types'
import { useState } from 'react'
import { motionPresets } from './presets'
import { useMilestones } from '../chart'

const getMotionValue = (a: AnimationSpec): undefined | GAnimationProp => {
    if (!a) return undefined
    if (typeof a === 'string') {
        if (a in motionPresets) return motionPresets[a]
        return motionPresets['none']
    }
    return a
}

export const MilestoneMotion = ({
    role,
    initial,
    initialOn,
    exit,
    exitOn,
    animate = 'none',
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
                >
                    {children}
                </m.g>
            )}
        </AnimatePresence>
    )
}
