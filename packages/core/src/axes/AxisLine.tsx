import { useDimensions } from '../general'
import { Line } from '../shapes'
import { AxisLineProps } from './types'
import { composeClassName } from '../themes'

export const AxisLine = ({ variant, className, style, setRole }: AxisLineProps) => {
    const horizontal = variant === 'top' || variant === 'bottom'
    const dimensions = useDimensions()
    const [width, height] = dimensions.innerSize
    const compositeClassName = composeClassName([variant, className])
    return (
        <Line
            x1={0}
            y1={0}
            x2={horizontal ? width : 0}
            y2={horizontal ? 0 : height}
            variant={'axis'}
            className={compositeClassName}
            style={style}
            setRole={setRole}
        />
    )
}
