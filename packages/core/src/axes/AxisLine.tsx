import { useDimensions } from '../general'
import { Line } from '../lines'
import { AxisLineProps } from './types'

export const AxisLine = ({ variant, className, style, setRole }: AxisLineProps) => {
    const horizontal = variant === 'top' || variant === 'bottom'
    const dimensions = useDimensions()
    const [width, height] = dimensions.innerSize
    return (
        <Line
            x1={0}
            y1={0}
            x2={horizontal ? width : 0}
            y2={horizontal ? 0 : height}
            variant={'axis'}
            className={className}
            style={style}
            setRole={setRole}
        />
    )
}
