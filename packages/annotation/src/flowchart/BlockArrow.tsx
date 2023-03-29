import { useDimensions, useScales, Path, getAbsolutePosition } from '@chsk/core'
import { BlockArrowProps } from './types'
import { getBlockArrowPath } from './arrows'

export const BlockArrow = ({
    start,
    end,
    units = 'view',
    heads = [false, true],
    headWidth = 20,
    headLength = 14,
    stemWidth = 8,
    ...props
}: BlockArrowProps) => {
    const { size } = useDimensions()
    const { scales } = useScales()

    const lineStart = getAbsolutePosition(start, units, size, scales)
    const lineEnd = getAbsolutePosition(end, units, size, scales)
    const path = getBlockArrowPath({
        start: lineStart,
        end: lineEnd,
        heads,
        headWidth,
        headLength,
        stemWidth,
    })

    return <Path variant={'block-arrow'} d={path} {...props} />
}
