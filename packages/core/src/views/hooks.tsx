import {
    NumericPositionSpec,
    PositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    PositionUnits,
    SizeUnits,
    useDimensions,
    X,
    Y,
    LEFT,
    TOP,
} from '../general'
import { getDimensionsProps } from '../general/dimensions'
import { AnchorSpec } from './types'
import { getAbsolutePosition, useScales } from '../scales'
import { useMemo } from 'react'

export const getAnchoredOrigin = (
    position: NumericPositionSpec,
    size: SizeSpec,
    anchor: AnchorSpec
): NumericPositionSpec => {
    return [position[X] - anchor[X] * size[X], position[Y] - anchor[Y] * size[Y]]
}

export const useView = ({
    position,
    positionUnits,
    size,
    sizeUnits,
    padding,
    anchor,
}: {
    position: PositionSpec
    positionUnits: PositionUnits
    size: SizeSpec
    sizeUnits: SizeUnits
    padding: FourSideSizeSpec
    anchor: AnchorSpec
}) => {
    const dimensions = useDimensions()
    const scales = useScales()
    const { dimsProps, origin } = useMemo(() => {
        const dimsProps = getDimensionsProps(size, sizeUnits, dimensions.innerSize, padding)
        const pos = getAbsolutePosition(position, positionUnits, dimensions.innerSize, scales)
        const origin = getAnchoredOrigin(pos, dimsProps.size, anchor)
        return { dimsProps, origin }
    }, [position, positionUnits, size, sizeUnits, padding, anchor, dimensions, scales])
    const translate =
        'translate(' + (origin[X] + padding[LEFT]) + ',' + (origin[Y] + padding[TOP]) + ')'
    return { dimensions, dimsProps, origin, translate }
}
