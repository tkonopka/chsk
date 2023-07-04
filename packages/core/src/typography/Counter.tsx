import { animate } from 'framer-motion'
import { createElement, useState } from 'react'
import { roundDecimalPlaces } from '../general'
import { CounterProps } from './types'
import { Label } from './Label'

const CounterContent = ({
    valueTransition,
    nDecimalPlaces = 0,
    format = (v: number) => String(v),
    children,
}: Pick<CounterProps, 'valueTransition' | 'nDecimalPlaces' | 'format' | 'children'>) => {
    const [value, setValue] = useState(roundDecimalPlaces(Number(children), nDecimalPlaces))
    const [working, setWorking] = useState(false)

    if (value !== Number(children) && !working) {
        animate(value, Number(children), {
            ...valueTransition,
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
    valueTransition,
    children,
    ...props
}: CounterProps) => {
    const content = (
        <CounterContent
            valueTransition={valueTransition}
            nDecimalPlaces={nDecimalPlaces}
            format={format}
        >
            {children}
        </CounterContent>
    )
    return createElement(component, { variant, ...props }, content)
}
