import { ContinuousScaleSpec, CssProps, SymbolFunction, SymbolProps, ViewProps } from '@chask/core'
import { ReactNode } from 'react'

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
    /** series ids */
    seriesIds: string[]
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
}

export interface ScatterProps extends ViewProps {
    /** key or function to extract x-axis values from raw data */
    x: string
    /** key or function to extract y-axis values from raw data */
    y: string
    /** radius for dots, or key or function to extract radius from raw data */
    r: number
    /** data */
    data: Array<ScatterDataItem>
    /** scale for horizontal axis */
    scaleX: ContinuousScaleSpec
    /** scale for vertical axis */
    scaleY: ContinuousScaleSpec
}

export interface ScatterSeriesProps {
    /** series id */
    series: string
    /** symbol for individual data points */
    symbol?: (props: SymbolProps) => ReactNode
    /** style class for data points */
    symbolClassName?: string
    /** style for data points */
    symbolStyle?: CssProps
}
