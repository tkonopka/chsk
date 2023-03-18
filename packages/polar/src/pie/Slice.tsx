import { arc } from 'd3-shape'
import { Path } from '@chsk/core'
import { SliceProps } from './types'

export const Slice = ({
    innerRadius,
    outerRadius,
    r = 0,
    startAngle,
    endAngle,
    padAngle = 0,
    ...props
}: SliceProps) => {
    const generator = arc().cornerRadius(Math.max(0, r)).padAngle(padAngle)
    const d = generator({ startAngle, endAngle, innerRadius, outerRadius }) ?? ''
    return <Path variant={'slice'} d={d} {...props} />
}
