import { animate } from 'framer-motion'
import { createElement, useState } from 'react'
import { roundDecimalPlaces } from '../general'
import { TransitionProps, useTheme } from '../themes'
import { CounterProps } from './types'
import { Label } from './Label'

const CounterContent = ({
    config,
    nDecimalPlaces = 0,
    format = (v: number) => String(v),
    children,
}: Pick<CounterProps, 'format' | 'nDecimalPlaces' | 'children'> & { config: TransitionProps }) => {
    const [value, setValue] = useState(roundDecimalPlaces(Number(children), nDecimalPlaces))
    const [working, setWorking] = useState(false)

    if (value !== Number(children) && !working) {
        animate(value, Number(children), {
            ...config,
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

    return <>{format(value)}</>
}

export const Counter = ({
    variant = 'counter',
    nDecimalPlaces,
    format,
    component = Label,
    children,
    ...props
}: CounterProps) => {
    const theme = useTheme()
    const config = theme.Motion[variant] ?? theme.Motion.default
    const content = (
        <CounterContent config={config} nDecimalPlaces={nDecimalPlaces} format={format}>
            {children}
        </CounterContent>
    )
    return createElement(component, { variant, ...props }, content)
}
