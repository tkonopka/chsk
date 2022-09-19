import { useState } from 'react'
import { animate } from 'framer-motion'
import { roundDecimalPlaces } from '../general'
import { CounterProps } from './types'
import { Typography } from './Typography'

export const Counter = ({
    position = [0, 0],
    variant = 'counter',
    nDecimalPlaces = 0,
    transform,
    style,
    className,
    setRole = true,
    children,
}: CounterProps) => {
    const [value, setValue] = useState(Number(children))
    const [working, setWorking] = useState(false)

    if (Number(value) != Number(children) && !working) {
        animate(value, Number(children), {
            onUpdate: latest => {
                setValue(roundDecimalPlaces(latest, nDecimalPlaces))
                setWorking(true)
            },
            onComplete: () => {
                setWorking(false)
            },
        })
    }

    return (
        <Typography
            variant={variant}
            position={position}
            transform={transform}
            style={style}
            className={className}
            setRole={setRole}
        >
            {value}
        </Typography>
    )
}
