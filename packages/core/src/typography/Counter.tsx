import { useState } from 'react'
import { animate } from 'framer-motion'
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
import { CounterProps } from './types'
import { Typography } from './Typography'
import { useTheme } from '../themes'

export const Counter = ({
    variant = 'counter',
    position = zeroPosition,
    rotate,
    size = [20, 20],
    padding = zeroPadding,
    align = centerAlign,
    nDecimalPlaces = 0,
    format = (v: number) => String(v),
    style,
    className,
    setRole = true,
    children,
}: CounterProps) => {
    const theme = useTheme()
    const [value, setValue] = useState(Number(children))
    const [working, setWorking] = useState(false)

    const corner: NumericPositionSpec = [position[X] - size[X] / 2, position[Y] - size[Y] / 2]
    const pos = getAlignPosition(corner, size, align, padding)

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
            rotate={rotate}
            style={style}
            className={className}
            setRole={setRole}
        >
            {format(value)}
        </Typography>
    )
}
