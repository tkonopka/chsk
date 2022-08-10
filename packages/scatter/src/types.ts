import {
    AccessorFunction,
    ContinuousScaleSpec,
    CssProps,
    CurveSpec,
    SvgElementVariantProps,
    SymbolFunction,
    ViewProps,
} from '@chask/core'

export type ScatterDataItem = {
    id: string
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
}

export interface ScatterProps extends ViewProps {
    /** key or function to extract x-axis values from raw data */
    x: string | AccessorFunction<number>
    /** key or function to extract y-axis values from raw data */
    y: string | AccessorFunction<number>
    /** radius for dots, or key or function to extract radius from raw data */
    r: number | string | AccessorFunction<number>
    /** data */
    data: Array<ScatterDataItem>
    /** scale for horizontal axis */
    scaleX: ContinuousScaleSpec
    /** scale for vertical axis */
    scaleY: ContinuousScaleSpec
}

export interface ScatterPointsProps {
    /** series id */
    series: string
    /** symbol for individual data points */
    symbol?: SymbolFunction
    /** style class for data points */
    symbolClassName?: string
    /** style for data points */
    symbolStyle?: CssProps
}

export interface ScatterCurveProps extends SvgElementVariantProps {
    /** series id */
    series: string
    /** curve type */
    curve?: CurveSpec
}

export interface ScatterIntervalProps extends SvgElementVariantProps {
    /** series id */
    series: string
    /** key or function to extract lower bound for interval */
    lower: string | AccessorFunction<number>
    /** key or function to extract upper bound for interval */
    upper: string | AccessorFunction<number>
    /** curve type */
    curve?: CurveSpec
}
