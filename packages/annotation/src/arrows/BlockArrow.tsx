import { BlockArrowProps } from './types'
import { useDimensions, useScales, Path, getAbsolutePosition } from '@chask/core'
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
    //
    className,
    style,
    setRole = true,
}: BlockArrowProps) => {
    const dimensions = useDimensions()
    const scales = useScales()

    const lineStart = getAbsolutePosition(start, units, dimensions.innerSize, scales)
    const lineEnd = getAbsolutePosition(end, units, dimensions.innerSize, scales)
    const points = getBlockArrowPoints({
        start: lineStart,
        end: lineEnd,
        heads,
        headWidth,
        headLength,
        stemWidth,
    })

    return (
        <Path
            variant={variant}
            points={points}
            className={className}
            style={style}
            setRole={setRole}
        />
    )
}
