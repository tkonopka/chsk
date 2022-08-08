import {
    getDimensionsProps,
    LEFT,
    PositionSpec,
    SideSizeSpec,
    SizeSpec,
    TOP,
    useDimensions,
} from '../general'
import { AnchorSpec } from './types'

// this function is separate from useView to facilitate unit tests
export const getAnchoredOrigin = ({
    position,
    positionRelative,
    size,
    anchor,
    parentSize,
}: {
    position: PositionSpec
    positionRelative: boolean
    size: SizeSpec
    anchor: AnchorSpec
    parentSize: SizeSpec
}): [number, number] => {
    const [x, y] = positionRelative
        ? [position[0] * parentSize[0], position[1] * parentSize[1]]
        : position
    return [x - anchor[0] * size[0], y - anchor[1] * size[1]]
}

export const useView = ({
    position,
    positionRelative,
    size,
    padding,
    anchor,
}: {
    position: PositionSpec
    positionRelative: boolean
    size?: SizeSpec
    padding: SideSizeSpec
    anchor: AnchorSpec
}) => {
    const dimensions = useDimensions()
    const dimsProps = getDimensionsProps({ size, dimensions, padding })
    const [x, y] = getAnchoredOrigin({
        position,
        positionRelative,
        size: dimsProps.size,
        anchor,
        parentSize: dimensions.innerSize,
    })
    const translate = 'translate(' + (x + padding[LEFT]) + ',' + (y + padding[TOP]) + ')'
    return { dimensions, dimsProps, xy: [x, y], translate }
}
