import { BlockArrowProps } from './types'
import { useDimensions, useScales, Path, getAbsolutePosition } from '@chsk/core'
import { getBlockArrowPoints } from './utils'

export const BlockArrow = ({
    variant = 'block-arrow',
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
    const scales = useScales()

    const lineStart = getAbsolutePosition(start, units, size, scales)
    const lineEnd = getAbsolutePosition(end, units, size, scales)
    const points = getBlockArrowPoints({
        start: lineStart,
        end: lineEnd,
        heads,
        headWidth,
        headLength,
        stemWidth,
    })

    return <Path variant={variant} points={points} {...props} />
}
