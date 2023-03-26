import { AnimatePresence, m } from 'framer-motion'
import { useState } from 'react'
import { useMilestones } from './index'
import { getMotionValue, getTransitionValue } from './utils'
import { MilestoneMotionProps } from './types'
import { useTheme, useThemedProps } from '../themes'

const UnthemedMilestoneMotion = ({
    variant,
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
    const theme = useTheme()
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
            if ((!turnOn && !defaultOn) || turnOff) {
                setActive(false)
            }
        }
    }

    const role =
        'milestone' +
        (variant && variant !== 'default' ? '-' + variant : '') +
        +'--' +
        (initialOn ? initialOn : '') +
        '-' +
        (exitOn ? exitOn : '')
    return (
        <AnimatePresence>
            {active && (
                <m.g
                    role={setRole ? role : undefined}
                    initial={getMotionValue(initial, theme)}
                    animate={getMotionValue(animate, theme)}
                    exit={getMotionValue(exit, theme)}
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
