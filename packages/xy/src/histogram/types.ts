import {
    CategoricalScaleSpec,
    ContinuousScaleSpec,
    CssProps,
    CurveSpec,
    ProcessedDataContextProps,
    RectangleProps,
    SvgElementVariantProps,
    ViewProps,
    WithId,
    XY,
} from '@chask/core'
import { FC } from 'react'

export type HistogramDataItem = WithId & {
    data: Array<number>
}

export type HistogramProcessedDataItem = WithId & {
    index: number
    points: Array<XY>
}

export type HistogramDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<HistogramProcessedDataItem>
}

export interface HistogramProps extends Omit<ViewProps, 'scaleX' | 'scaleY' | 'scaleColor'> {
    /** data */
    data: Array<HistogramDataItem>
    /** breakpoints for bins */
    breaks: number | number[]
    /** toggle between count-based and density-based view */
    density?: boolean
    /** scale for horizontal axis */
    scaleX?: ContinuousScaleSpec
    /** scale for vertical axis */
    scaleY?: ContinuousScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export interface HistogramCurveProps extends SvgElementVariantProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** curve type */
    curve?: CurveSpec
}

export type HistogramSeriesLayer = 'area' | 'curve' | 'bars'

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

export interface HistogramBarsProps extends SvgElementVariantProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** component type */
    component?: FC<RectangleProps>
}
