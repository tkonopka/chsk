import { animate } from 'framer-motion'
import { createElement, useState } from 'react'
import { roundDecimalPlaces } from '../general'
import { CounterProps } from './types'
import { Label } from './Label'

const CounterContent = ({
    transition,
    nDecimalPlaces = 0,
    format = (v: number) => String(v),
    children,
}: Pick<CounterProps, 'transition' | 'nDecimalPlaces' | 'format' | 'children'>) => {
    const [value, setValue] = useState(roundDecimalPlaces(Number(children), nDecimalPlaces))
    const [working, setWorking] = useState(false)

    if (value !== Number(children) && !working) {
        animate(value, Number(children), {
            ...transition,
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
    transition,
    children,
    ...props
}: CounterProps) => {
    const content = (
        <CounterContent transition={transition} nDecimalPlaces={nDecimalPlaces} format={format}>
            {children}
        </CounterContent>
    )
    return createElement(component, { variant, ...props }, content)
}
