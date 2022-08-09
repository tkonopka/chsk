import { composeClassName } from '../themes'
import { PathProps } from './types'
import { getLineGenerator } from './curves'
import { useMemo } from 'react'

export const Path = ({
    points,
    curve = 'Linear',
    variant = 'default',
    className,
    setRole = true,
    style,
}: PathProps) => {
    const isDefault = variant === 'default'
    const compositeClassName = composeClassName([isDefault ? undefined : variant, className])
    const generator = useMemo(() => getLineGenerator(curve), [curve])
    const d = generator(points)
    return (
        <path
            d={d ?? undefined}
            role={setRole ? variant : undefined}
            style={style}
            className={compositeClassName}
        />
    )
}
