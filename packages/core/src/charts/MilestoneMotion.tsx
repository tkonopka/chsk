import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import { useMilestones } from './index'
import { MilestoneMotionProps } from './types'
import { useTheme, useThemedProps } from '../themes'
import { getTarget, getTransition } from '../themes/utils'

const UnthemedMilestoneMotion = ({
    enter = 'hidden',
    enterOn,
    enterTransition,
    onEnter,
    exit = 'hidden',
    exitOn,
    exitTransition,
    onExit,
    config,
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
                    initial={getTarget(enter, theme)}
                    animate={{
                        ...getTarget(config, theme),
                        transition: getTransition(enterTransition, theme),
                    }}
                    exit={{
                        ...getTarget(exit, theme),
                        transition: getTransition(exitTransition, theme),
                    }}
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
