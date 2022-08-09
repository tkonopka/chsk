import { IntervalLabelProps } from './types'
import { useDimensions } from '@chask/core'

// star symbols
// ★
// ✦

export const IntervalLabel = ({
    position,
    size = [26, 100],
    translate = [0, 0],
    className,
    style,
    setRole = true,
    children,
}: IntervalLabelProps) => {
    const dimensions = useDimensions()
    console.log(JSON.stringify(dimensions))
    if (children === undefined || children === '') return null

    return <g style={style} className={className} role={setRole ? 'interval-label' : undefined}></g>
}
