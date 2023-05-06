import { ScatterCrosshairProps, ScatterInteractiveDataItem } from './types'
import {
    addColor,
    Circle,
    CssProps,
    Line,
    NumericAxisScale,
    NumericPositionSpec,
    Scales,
    SimpleDataComponent,
    SizeSpec,
    X,
    Y,
} from '@chsk/core'
import { createElement } from 'react'

export const createCrosshairLines = ({
    visible,
    coordinates,
    size,
    style,
    setRole,
    className,
}: {
    visible: [boolean, boolean]
    coordinates: [number, number]
    size: SizeSpec
    style?: CssProps
    setRole?: boolean
    className?: string
}) => {
    return (
        <>
            {visible[X] ? (
                <Line
                    key={'x'}
                    variant={'crosshair'}
                    x1={coordinates[X]}
                    x2={coordinates[X]}
                    y1={0}
                    y2={size[Y]}
                    style={style}
                    className={className}
                    setRole={setRole}
                />
            ) : null}
            {visible[Y] ? (
                <Line
                    key={'y'}
                    variant={'crosshair'}
                    x1={0}
                    x2={size[X]}
                    y1={coordinates[Y]}
                    y2={coordinates[Y]}
                    style={style}
                    className={className}
                    setRole={setRole}
                />
            ) : null}
        </>
    )
}

export const createActiveSymbol = ({
    activeData,
    coordinates,
    scales,
    seriesIndex,
    dataComponent = SimpleDataComponent,
    symbol = Circle,
    symbolStyle,
    symbolClassName,
    setRole,
}: Pick<
    ScatterCrosshairProps,
    'symbol' | 'dataComponent' | 'symbolStyle' | 'symbolClassName' | 'setRole'
> & {
    activeData?: ScatterInteractiveDataItem
    coordinates: NumericPositionSpec
    scales: Scales
    seriesIndex: number
}) => {
    if (activeData === undefined || activeData.point === undefined) return null
    const scaleSize = scales.size as NumericAxisScale
    return createElement(dataComponent, {
        key: 'active-' + seriesIndex + '-' + activeData.index,
        component: symbol,
        props: {
            variant: 'active',
            cx: coordinates[X],
            cy: coordinates[Y],
            r: scaleSize(activeData.size ?? 0),
            className: symbolClassName,
            style: addColor(symbolStyle, scales.color(seriesIndex)),
            setRole,
        },
    })
}
