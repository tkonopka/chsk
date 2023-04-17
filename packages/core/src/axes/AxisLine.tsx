import { useDimensions, X, Y } from '../general'
import { Line } from '../shapes'
import { AxisLineProps } from './types'
import { getClassName } from '../themes'

export const AxisLine = ({ variant = 'top', className, style }: AxisLineProps) => {
    const horizontal = variant === 'top' || variant === 'bottom'
    const { size } = useDimensions()
    const compositeClassName = getClassName(variant, className)
    return (
        <Line
            x1={0}
            y1={0}
            x2={horizontal ? size[X] : 0}
            y2={horizontal ? 0 : size[Y]}
            variant={'axis'}
            className={compositeClassName}
            style={style}
            setRole={false} // role is redundant because the 'variant' is 'axis' already
        />
    )
}
