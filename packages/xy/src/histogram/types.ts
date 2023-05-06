import {
    CategoricalScaleSpec,
    ContinuousScaleSpec,
    CssProps,
    CurveSpec,
    DataInteractivityProps,
    ProcessedDataContextProps,
    PathProps,
    RectangleProps,
    SvgElementVariantProps,
    ViewProps,
    WithId,
    SvgElementProps,
    NumericPositionSpec,
} from '@chsk/core'
import { FC } from 'react'

export type HistogramDataItem = WithId & {
    data: Array<number>
}

export type HistogramProcessedDataItem = WithId & {
    index: number
    points: Array<NumericPositionSpec>
    breaks: number[]
    n: number
    mean?: number
    sd?: number
}

export type HistogramDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<HistogramProcessedDataItem>
}

export type HistogramInteractiveDataItem = HistogramProcessedDataItem & { bin?: number }

export interface HistogramProps
    extends SvgElementVariantProps,
        Pick<ViewProps, 'container' | 'data' | 'autoRescale' | 'children'> {
    /** variant */
    variant?: 'count' | 'density'
    /** data */
    data: Array<HistogramDataItem>
    /** breakpoints for bins */
    breaks: number | number[]
    /** scale for horizontal axis */
    scaleX?: ContinuousScaleSpec
    /** scale for vertical axis */
    scaleY?: ContinuousScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export interface HistogramCurveProps
    extends SvgElementProps,
        DataInteractivityProps<HistogramInteractiveDataItem, PathProps> {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** curve type */
    curve?: CurveSpec
}

export type HistogramSeriesLayer = 'area' | 'curve'

export interface HistogramSeriesProps extends HistogramCurveProps {
    /** list of components to display */
    layers: HistogramSeriesLayer[]
    /** styles for areas */
    areaStyle?: CssProps
    /** styles for curve */
    curveStyle?: CssProps
    /** styles for bars */
    barStyle?: CssProps
}

export interface HistogramBarsProps
    extends SvgElementProps,
        DataInteractivityProps<HistogramInteractiveDataItem, RectangleProps> {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** component type */
    component?: FC<RectangleProps>
}
