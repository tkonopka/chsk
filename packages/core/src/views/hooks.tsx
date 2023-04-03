import { useMemo } from 'react'
import {
    ContainerProps,
    getAnchoredOrigin,
    useDimensions,
    X,
    Y,
    LEFT,
    TOP,
    getInnerSize,
    getDimensionsProps,
} from '../general'
import { getAbsolutePosition, useScales } from '../scales'
import { defaultContainerProps } from './defaults'

export const useContainer = ({
    position = defaultContainerProps.position,
    positionUnits = defaultContainerProps.positionUnits,
    size = defaultContainerProps.size,
    sizeUnits = defaultContainerProps.sizeUnits,
    padding = defaultContainerProps.padding,
    anchor = defaultContainerProps.anchor,
    offset = defaultContainerProps.offset,
}: ContainerProps) => {
    const dimensions = useDimensions()
    const { scales } = useScales()
    const { dimsProps, origin, innerSize } = useMemo(() => {
        const dimsProps = getDimensionsProps(size, sizeUnits, dimensions.size, padding)
        const innerSize = getInnerSize(dimsProps.size, padding)
        const pos = getAbsolutePosition(position, positionUnits, dimensions.size, scales)
        const origin = getAnchoredOrigin(pos, dimsProps.size, anchor)
        return { dimsProps, origin, innerSize }
    }, [position, positionUnits, size, sizeUnits, padding, anchor, dimensions, scales])
    const x = origin[X] + padding[LEFT] + offset[X]
    const y = origin[Y] + padding[TOP] + offset[Y]
    return { dimensions, dimsProps, origin, x, y, innerSize }
}
