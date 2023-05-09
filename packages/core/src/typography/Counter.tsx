import { animate, m } from 'framer-motion'
import { createElement, useState } from 'react'
import {
    centerAlign,
    getAlignPosition,
    getAnchoredOrigin,
    roundDecimalPlaces,
    zeroPadding,
    zeroPosition,
} from '../general'
import { CounterProps, TextContentProps } from './types'
import { getClassName, useTheme } from '../themes'

const TextElement = ({
    component,
    children,
    ...props
}: Pick<CounterProps, 'component'> & TextContentProps) => {
    if (component === undefined) {
        return <text {...props}>{children}</text>
    }
    return createElement(component, props, children)
}

export const Counter = ({
    variant = 'counter',
    position = zeroPosition,
    angle,
    size = [20, 20],
    padding = zeroPadding,
    align = centerAlign,
    anchor = centerAlign,
    offset = zeroPosition,
    nDecimalPlaces = 0,
    format = (v: number) => String(v),
    component,
    style,
    className,
    setRole = true,
    children,
}: CounterProps) => {
    const theme = useTheme()
    const [value, setValue] = useState(roundDecimalPlaces(Number(children), nDecimalPlaces))
    const [working, setWorking] = useState(false)

    if (value !== Number(children) && !working) {
        const animateConfig = theme.Motion[variant] ?? theme.Motion.default
        animate(value, Number(children), {
            ...animateConfig,
            onPlay: () => {
                setWorking(true)
            },
            onUpdate: latest => {
                setValue(roundDecimalPlaces(latest, nDecimalPlaces))
            },
            onComplete: () => {
                setWorking(false)
            },
        })
    }

    const corner = getAnchoredOrigin(position, size, anchor)
    const [x, y] = getAlignPosition(corner, size, align, padding, offset)
    const compositeClassName = getClassName(variant, className)
    const config = { x, y, rotate: angle, originX: '0px', originY: '0px' }
    return (
        <m.g
            role={setRole && variant !== 'default' ? 'counter' : undefined}
            initial={config}
            animate={config}
        >
            <TextElement style={style} className={compositeClassName} component={component}>
                {format(value)}
            </TextElement>
        </m.g>
    )
}
