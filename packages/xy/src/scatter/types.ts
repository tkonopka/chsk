import { FC, ReactNode } from 'react'
import {
    AccessorFunction,
    ColorScaleSpec,
    ContainerProps,
    ContinuousScaleSpec,
    CssProps,
    CurveSpec,
    DataInteractivityProps,
    FourSideSizeSpec,
    InteractivityProps,
    LabelProps,
    LineProps,
    LocationProps,
    NumericPositionSpec,
    PathProps,
    SizeScaleSpec,
    SvgElementProps,
    SvgElementVariantProps,
    ComponentProps,
    SymbolProps,
    ViewProps,
    WithId,
} from '@chsk/core'

export type ScatterDataItemData = Array<Record<string, unknown>> | Record<string, unknown>
export type ScatterDataItem = WithId & { data: ScatterDataItemData }

export type XYProcessedDataItem = WithId & {
    index: number
    x: Array<number>
    y: Array<number>
    color?: Array<number>
}
export type ScatterProcessedDataItem = XYProcessedDataItem & {
    k: Array<number>
    size: Array<number>
}
export type ScatterPreparedDataItem = WithId & {
    index: number
    x: Array<number>
    y: Array<number>
    r: Array<number>
    color?: Array<string>
}

export interface ScatterProps
    extends SvgElementProps,
        Pick<ViewProps, 'container' | 'data' | 'autoRescale' | 'children'> {
    /** extraction of x-axis values from raw data */
    x: string | AccessorFunction<number>
    /** extraction of y-axis values from raw data */
    y: string | AccessorFunction<number>
    /** extraction of key values (indexes) from raw data */
    k?: string | AccessorFunction<number>
    /** extraction of dot size from raw data */
    valueSize?: number | string | AccessorFunction<number>
    /** extraction of a value for color */
    valueColor?: null | string | AccessorFunction<number>
    /** data */
    data: Array<ScatterDataItem>
    /** scale for horizontal axis */
    scaleX?: ContinuousScaleSpec
    /** scale for vertical axis */
    scaleY?: ContinuousScaleSpec
    /** scale for colors */
    scaleColor?: ColorScaleSpec
    /** scale for cell size */
    scaleSize?: SizeScaleSpec
}

export type ScatterInteractiveDataItem = WithId & {
    index?: number
    point?: NumericPositionSpec
    size?: number
    color?: number
    original?: Record<string, unknown>
}

// this uses symbolClassName and symbolStyle instead of SvgElementProps
// that is to facilitate transferring props from ScatterSeries to ScatterPoints
export interface ScatterPointsProps
    extends Pick<SvgElementProps, 'setRole'>,
        DataInteractivityProps<ScatterInteractiveDataItem, SymbolProps> {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** symbol for individual data points */
    symbol?: FC<SymbolProps>
    /** style class for data points */
    symbolClassName?: string
    /** style for data points */
    symbolStyle?: CssProps
}

export type SignalProcessingProps = {
    /** convolution mask */
    convolutionMask?: number[]
    /** offset used during convolution */
    convolutionOffset?: number
    /** down-sampling factor [0, 1] */
    downsampleFactor?: number
    /** offset used during down-sampling */
    downsampleIndex?: number
}

export interface ScatterCurveProps
    extends SvgElementProps,
        DataInteractivityProps<ScatterInteractiveDataItem, PathProps>,
        ComponentProps<PathProps>,
        SignalProcessingProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** curve type */
    curve?: CurveSpec
}

export interface ScatterLabelProps
    extends SvgElementVariantProps,
        LabelProps,
        Pick<ContainerProps, 'positionUnits'>,
        ComponentProps<LabelProps> {
    /** variant */
    variant?: 'xy' | 'x' | 'y'
    /** series id (defaults to first id) */
    id?: string
    /** set rotation automatically */
    autoRotate?: boolean
}

export interface ScatterIntervalProps
    extends ScatterCurveProps,
        DataInteractivityProps<ScatterInteractiveDataItem, PathProps> {
    /** key or function to extract lower bound for interval */
    lower: string | AccessorFunction<number>
    /** key or function to extract upper bound for interval */
    upper: string | AccessorFunction<number>
}

export interface ScatterErrorBarProps extends SvgElementProps, InteractivityProps {
    /** horizontal or vertical error bar */
    variant: 'x' | 'y'
    /** width of cap at the end of error bar */
    capWidth?: number
    /** position of lower bound */
    lower: NumericPositionSpec
    /** position of upper bound */
    upper: NumericPositionSpec
}

export interface ScatterErrorsProps
    extends SvgElementVariantProps,
        DataInteractivityProps<ScatterInteractiveDataItem, ScatterErrorBarProps>,
        Pick<ScatterIntervalProps, 'ids' | 'lower' | 'upper'>,
        ComponentProps<ScatterErrorBarProps> {
    /** horizontal or vertical error bars */
    variant: 'x' | 'y'
    /** width of error bar ends */
    capWidth?: number
}

export interface ScatterAreaProps
    extends ScatterCurveProps,
        DataInteractivityProps<ScatterInteractiveDataItem, PathProps> {
    /** base for the area polygon */
    baseline?: number
}

export type ScatterSeriesLayer = 'area' | 'curve' | 'interval' | 'points'

export interface ScatterSeriesProps
    extends ScatterPointsProps,
        Omit<
            ScatterAreaProps,
            'dataComponent' | 'onMouseEnter' | 'onMouseMove' | 'onMouseLeave' | 'onClick'
        > {
    /** list of components to display */
    layers: ScatterSeriesLayer[]
    /** styles for areas */
    areaStyle?: CssProps
    /** styles for curve */
    curveStyle?: CssProps
    /** styles for points */
    symbolStyle?: CssProps
}

export type RegressionInteractiveData = WithId & {
    ids: string[]
    variant: 'series' | 'pooled'
}

export interface RegressionProps
    extends SvgElementVariantProps,
        DataInteractivityProps<RegressionInteractiveData, LineProps> {
    /** compute regressions for individual series or for pooled data */
    variant?: 'series' | 'pooled'
    /** ids to display (defaults to all ids) */
    ids?: string[]
}

export interface ScatterCrosshairProps
    extends DataInteractivityProps<ScatterInteractiveDataItem, SymbolProps>,
        SvgElementVariantProps,
        Pick<ScatterPointsProps, 'symbol' | 'symbolStyle' | 'symbolClassName'> {
    /** crosshair variant */
    variant?: 'xy' | 'x' | 'y'
    /** expansion of background surface */
    expansion?: FourSideSizeSpec
    /** minimum distance to nearest point */
    minDistance?: number
    /** format of tooltip label */
    tooltipFormat?: (data: ScatterInteractiveDataItem) => string
    /** visibility for crosshair lines */
    visible?: [boolean, boolean]
    /** style for crosshair lines */
    style?: CssProps
}

/** label packing */

export interface ScatterSelectedLabelData extends LocationProps {
    id: string
    index: number
    content: ReactNode
}

export interface ScatterSelectedLabelsProps
    extends SvgElementProps,
        Pick<ScatterLabelProps, 'component' | 'componentProps' | 'offset' | 'anchor'>,
        Pick<ScatterPointsProps, 'symbol' | 'symbolStyle' | 'symbolClassName'> {
    /** collection of labels */
    data: ScatterSelectedLabelData[]
    /** connector line between data point and label */
    connector?: FC<LineProps>
    /** style for connector line */
    connectorStyle?: CssProps
    /** style class for connector line */
    connectorClassName?: string
    /** distance between data points and label */
    clearance?: number
    /** maximum number of iterations in label placement calculations */
    maxIterations?: number
    /** maximum displacement of a label at each iteration */
    maxDelta?: number
    /** minimum label displacement at each iteration */
    minDelta?: number
}
