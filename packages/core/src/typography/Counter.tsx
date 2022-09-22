import { useState } from 'react'
import { animate } from 'framer-motion'
import { getAlignPosition, NumericPositionSpec, roundDecimalPlaces, X, Y } from '../general'
import { CounterProps } from './types'
import { Typography } from './Typography'
import { useTheme } from '../themes'

export const Counter = ({
    variant = 'counter',
    position = [0, 0],
    transform,
    size = [20, 20],
    padding = [0, 0, 0, 0],
    align = [0.5, 0.5],
    nDecimalPlaces = 0,
    style,
    className,
    setRole = true,
    children,
}: CounterProps) => {
    const theme = useTheme()
    const [value, setValue] = useState(Number(children))
    const [working, setWorking] = useState(false)

    const corner: NumericPositionSpec = [position[X] - size[X] / 2, position[Y] - size[Y] / 2]
    const pos = getAlignPosition(corner, size, padding, align)

    if (Number(value) != Number(children) && !working) {
        animate(value, Number(children), {
            duration: theme.Motion.duration,
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
            position={pos}
            transform={transform}
            style={style}
            className={className}
            setRole={setRole}
        >
            {value}
        </Typography>
    )
}
