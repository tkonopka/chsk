import { ScatterCrosshairProps, ScatterCrosshairVariant, ScatterInteractiveDataItem } from './types'
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
    variant = 'default',
    coordinates,
    size,
    style,
    setRole,
    className,
}: {
    variant: ScatterCrosshairVariant
    coordinates: [number, number]
    size: SizeSpec
    style?: CssProps
    setRole?: boolean
    className?: string
}) => {
    if (coordinates === undefined) return null
    return (
        <>
            {variant === 'default' || variant === 'vertical' ? (
                <Line
                    key={'vertical'}
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
            {variant === 'default' || variant === 'horizontal' ? (
                <Line
                    key={'horizontal'}
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
