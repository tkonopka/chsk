import { DimensionsProvider, LEFT, TOP, useDimensions } from '../general'
import { ScalesProvider } from '../scales'
import { ViewProps } from './types'

export const View = ({
    x = 0,
    y = 0,
    size,
    padding = [0, 0, 0, 0],
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
