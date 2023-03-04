import { useDimensions, useScales, Path, getAbsolutePosition, getClassName } from '@chsk/core'
import { ArcArrowProps } from './types'
import { getArcArrowPath } from './arrows'

export const ArcArrow = ({
    variant = 'left',
    start,
    end,
    units = 'view',
    heads = [false, true],
    headWidth = 20,
    headLength = 14,
    stemWidth = 8,
    r,
    ...props
}: ArcArrowProps) => {
    const { size } = useDimensions()
    const scales = useScales()

    const lineStart = getAbsolutePosition(start, units, size, scales)
    const lineEnd = getAbsolutePosition(end, units, size, scales)
    const path = getArcArrowPath({
        start: lineStart,
        end: lineEnd,
        heads,
        headWidth,
        headLength,
        stemWidth,
        r,
        variant,
    })

    return <Path variant={'arc-arrow'} d={path} {...props} />
}
