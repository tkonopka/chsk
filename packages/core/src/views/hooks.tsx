import {
    getDimensionsProps,
    LEFT,
    NumericPositionSpec,
    PositionSpec,
    SideSizeSpec,
    SizeSpec,
    SizeUnit,
    TOP,
    useDimensions,
} from '../general'
import { AnchorSpec } from './types'
import { getAbsolutePosition, useScales } from '../scales'

export const getAnchoredOrigin = (
    position: NumericPositionSpec,
    size: SizeSpec,
    anchor: AnchorSpec
): NumericPositionSpec => {
    return [position[0] - anchor[0] * size[0], position[1] - anchor[1] * size[1]]
}

export const useView = ({
    position,
    size,
    units,
    padding,
    anchor,
}: {
    position: PositionSpec
    size: SizeSpec
    units: SizeUnit
    padding: SideSizeSpec
    anchor: AnchorSpec
}) => {
    const dimensions = useDimensions()
    const scales = useScales()
    const dimsProps = getDimensionsProps(size, units, dimensions.innerSize, padding)
    const pos = getAbsolutePosition(position, units, dimensions.innerSize, scales)
    const [x, y] = getAnchoredOrigin(pos, dimsProps.size, anchor)
    const translate = 'translate(' + (x + padding[LEFT]) + ',' + (y + padding[TOP]) + ')'
    return { dimensions, dimsProps, xy: [x, y], translate }
}
