import {
    BandScaleSpec,
    CssProps,
    DivergingScaleSpec,
    RectangleProps,
    SequentialScaleSpec,
    ViewProps,
    WithId,
} from '@chask/core'
import { ReactNode } from 'react'

export type HeatMapDataItem = WithId & Record<string, unknown>

export type HeatMapProcessedDataItem = WithId & {
    index: number
    value: Array<number>
}

export type HeatMapDataContextProps = {
    /** data */
    data: Array<HeatMapProcessedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

export interface HeatMapProps extends Omit<ViewProps, 'scaleX' | 'scaleY'> {
    /** data */
    data: Array<HeatMapDataItem>
    /** list of all keys associated with a heatmap row */
    keys: string[]
    /** scale for horizontal axis */
    scaleX?: BandScaleSpec
    /** scale for vertical axis */
    scaleY?: BandScaleSpec
    /** scale for colors */
    scaleColor?: SequentialScaleSpec | DivergingScaleSpec
}

export interface HeatMapCellsProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** keys to display (default to all keys) */
    keys?: string[]
    /** symbol for individual data points */
    cell?: (props: RectangleProps) => ReactNode
    /** style class */
    className?: string
    /** css style */
    style?: CssProps
}
