import { DimensionsProvider, PaddingSpec, useDimensions } from '../general'
import { ScalesProvider } from '../scales'
import { ViewProps } from './types'

export const noPadding: PaddingSpec = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
}

export const View = ({
    x = 0,
    y = 0,
    width,
    height,
    padding = noPadding,
    data = [],
    scaleX,
    scaleY,
    children,
}: ViewProps) => {
    // this useDimensions gets measures from the parent
    const dimensions = useDimensions()
    const dimsProps = {
        width: width ?? dimensions.innerWidth,
        height: height ?? dimensions.innerHeight,
        padding,
    }
    // the view creates a nested DimensionsProvider
    return (
        <DimensionsProvider {...dimsProps}>
            <ScalesProvider {...dimsProps} scaleX={scaleX} scaleY={scaleY}>
                <g
                    role="chart-view"
                    transform={`translate(${x + padding.left},${y + padding.top})`}
                >
                    {children}
                </g>
            </ScalesProvider>
        </DimensionsProvider>
    )
}
