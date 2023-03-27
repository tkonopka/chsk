import { animate, m } from 'framer-motion'
import { createElement, useState } from 'react'
import {
    centerAlign,
    getAlignPosition,
    NumericPositionSpec,
    roundDecimalPlaces,
    X,
    Y,
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

    const corner: NumericPositionSpec = [position[X] - size[X] / 2, position[Y] - size[Y] / 2]
    const pos = getAlignPosition(corner, size, align, padding)
    const compositeClassName = getClassName(variant, className)
    const config = { x: pos[X], y: pos[Y], rotate: angle, originX: '0px', originY: '0px' }
    return (
        <m.g
            role={setRole && variant !== 'default' ? variant : undefined}
            initial={config}
            animate={config}
        >
            <TextElement style={style} className={compositeClassName} component={component}>
                {format(value)}
            </TextElement>
        </m.g>
    )
}
