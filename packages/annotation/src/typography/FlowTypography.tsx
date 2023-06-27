import { useState } from 'react'
import { animate, domAnimation, LazyMotion, m } from 'framer-motion'
import { getClassName, ssrCompatible, zeroPosition } from '@chsk/core'
import { getTextContent } from './utils'
import { FlowTypographyProps } from './types'

export const FlowTypography = ({
    variant = 'flow-typography',
    position = zeroPosition,
    angle,
    duration,
    rate = 20,
    className,
    style,
    setRole = true,
    children,
}: FlowTypographyProps) => {
    const [value, setValue] = useState('')
    const [working, setWorking] = useState(false)

    const childrenString = getTextContent(children)
    if (value !== childrenString && !working) {
        animate(0, childrenString.length, {
            type: 'tween',
            duration: duration ?? childrenString.length / rate,
            ease: latest => latest,
            onPlay: () => {
                setWorking(true)
            },
            onUpdate: latest => {
                setValue(childrenString.slice(0, Math.ceil(latest)))
            },
            onComplete: () => {
                setWorking(false)
            },
        })
    }

    const compositeClassName = getClassName(variant, className)
    const [x, y] = position
    const config = { x, y, rotate: angle, originX: '0px', originY: '0px' }
    return (
        <LazyMotion features={domAnimation}>
            <m.text
                initial={config}
                animate={config}
                role={setRole ? variant : undefined}
                style={ssrCompatible(style, config)}
                className={compositeClassName}
            >
                {value}
            </m.text>
        </LazyMotion>
    )
}
