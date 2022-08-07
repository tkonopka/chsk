import { DimensionsProvider, LEFT, PositionSpec, SizeSpec, TOP, useDimensions } from '../general'
import { ScalesProvider } from '../scales'
import { AnchorSpec, ViewProps } from './types'

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

export const View = ({
    position = [0, 0],
    positionRelative = false,
    size,
    padding = [0, 0, 0, 0],
    anchor = [0, 0],
    data = [],
    scaleX,
    scaleY,
    children,
}: ViewProps) => {
    // this useDimensions gets measures from the parent
    const dimensions = useDimensions()
    const dimsProps = {
        size: size ?? dimensions.innerSize,
        padding,
    }
    const [x, y] = getAnchoredOrigin({
        position,
        positionRelative,
        size: dimsProps.size,
        anchor,
        parentSize: dimensions.innerSize,
    })
    const translate = 'translate(' + (x + padding[LEFT]) + ',' + (y + padding[TOP]) + ')'
    // the view creates a nested DimensionsProvider
    return (
        <DimensionsProvider {...dimsProps}>
            <ScalesProvider {...dimsProps} scaleX={scaleX} scaleY={scaleY}>
                <g role="chart-view" transform={translate}>
                    {children}
                </g>
            </ScalesProvider>
        </DimensionsProvider>
    )
}
