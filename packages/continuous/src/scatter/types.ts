import {
    AccessorFunction,
    CategoricalScaleSpec,
    ContinuousScaleSpec,
    CssProps,
    CurveSpec,
    NumericPositionSpec,
    PositionUnit,
    SvgElementVariantProps,
    SymbolFunction,
    ViewProps,
    WithId,
} from '@chask/core'
import { ReactNode } from 'react'

export type ScatterDataItem = WithId & {
    data: Array<Record<string, unknown>>
}

export type ScatterProcessedDataItem = {
    id: string
    index: number
    x: Array<number>
    y: Array<number>
    r: Array<number>
}

export type ScatterDataContextProps = {
    /** data */
    data: Array<ScatterProcessedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** all series ids */
    seriesIds: string[]
}

export interface ScatterProps extends Omit<ViewProps, 'scaleX' | 'scaleY'> {
    /** key or function to extract x-axis values from raw data */
    x: string | AccessorFunction<number>
    /** key or function to extract y-axis values from raw data */
    y: string | AccessorFunction<number>
    /** radius for dots, or key or function to extract radius from raw data */
    r: number | string | AccessorFunction<number>
    /** data */
    data: Array<ScatterDataItem>
    /** scale for horizontal axis */
    scaleX?: ContinuousScaleSpec
    /** scale for vertical axis */
    scaleY?: ContinuousScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export interface ScatterPointsProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** symbol for individual data points */
    symbol?: SymbolFunction
    /** style class for data points */
    symbolClassName?: string
    /** style for data points */
    symbolStyle?: CssProps
}

export interface ScatterCurveProps extends SvgElementVariantProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** curve type */
    curve?: CurveSpec
}

export interface ScatterLabelProps extends SvgElementVariantProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** position along the x-axis */
    x: number
    /** absolute or relative units for position x */
    units?: PositionUnit
    /** translation with respect to data point */
    translate?: NumericPositionSpec
    /** rotation */
    rotate?: number
    /** set rotation automatically */
    autoRotate?: boolean
    /** child components */
    children?: ReactNode
}

export interface ScatterIntervalProps extends ScatterCurveProps {
    /** key or function to extract lower bound for interval */
    lower: string | AccessorFunction<number>
    /** key or function to extract upper bound for interval */
    upper: string | AccessorFunction<number>
}

export interface ScatterAreaProps extends ScatterCurveProps {
    /** base for the area polygon */
    baseline?: number
}

export type ScatterSeriesLayer = 'area' | 'curve' | 'interval' | 'points'

export interface ScatterSeriesProps extends ScatterPointsProps, ScatterAreaProps {
    /** list of components to display */
    layers: ScatterSeriesLayer[]
    /** styles for areas */
    areaStyle?: CssProps
    /** styles for curve */
    curveStyle?: CssProps
    /** styles for points */
    symbolStyle?: CssProps
}
