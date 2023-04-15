import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import { useMilestones } from './index'
import { getAnimationValue, getTransitionValue } from './utils'
import { MilestoneMotionProps } from './types'
import { useTheme, useThemedProps } from '../themes'

const UnthemedMilestoneMotion = ({
    enter = 'hidden',
    enterOn,
    onEnter,
    exit = 'hidden',
    exitOn,
    onExit,
    config,
    transition,
    visible,
    setRole = true,
    children,
}: MilestoneMotionProps) => {
    const theme = useTheme()
    const [active, setActive] = useState(visible ?? enterOn === undefined)
    const milestones = useMilestones()

    const turnOn = (enterOn && milestones.has(enterOn)) ?? false
    const turnOff = (exitOn && milestones.has(exitOn)) ?? false
    const defaultOn = !enterOn

    if (milestones.size > 0 || !visible) {
        if (!active) {
            if ((turnOn || defaultOn) && !turnOff) {
                setActive(true)
                onEnter?.()
            }
        }
        if (active) {
            if ((!turnOn && !defaultOn) || turnOff) {
                setActive(false)
                onExit?.()
            }
        }
    }
    const role = 'milestone-' + (enterOn ? enterOn : '') + (exitOn ? '-' + exitOn : '')
    return (
        <AnimatePresence>
            {active && (
                <m.g
                    role={setRole ? role : undefined}
                    initial={getAnimationValue(enter, theme)}
                    animate={getAnimationValue(config, theme)}
                    exit={getAnimationValue(exit, theme)}
                    transition={getTransitionValue(transition, theme)}
                >
                    {children}
                </m.g>
            )}
        </AnimatePresence>
    )
}

export const MilestoneMotion = (props: MilestoneMotionProps) => (
    <UnthemedMilestoneMotion {...useThemedProps(props, 'MilestoneMotion')} />
)
