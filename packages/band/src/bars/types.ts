import {
    BandScaleSpec,
    CategoricalScaleSpec,
    CssProps,
    LinearScaleSpec,
    NumericPositionSpec,
    RectangleProps,
    SizeSpec,
    ViewProps,
    WithId,
} from '@chask/core'
import { ReactNode } from 'react'

export type BarDataItem = WithId & Record<string, unknown>

export type BarProcessedDataItem = WithId & {
    index: number
    value: Array<number>
}

export type BarProcessedDataContextProps = {
    /** data */
    data: Array<BarProcessedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

export type BarPreparedDataItem = WithId & {
    index: number
    position: Array<NumericPositionSpec>
    size: Array<SizeSpec>
}

export type BarPreparedDataContextProps = {
    /** data */
    data: Array<BarPreparedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

export interface BarProps extends Omit<ViewProps, 'scaleX' | 'scaleY'> {
    /** data */
    data: Array<BarDataItem>
    /** list of all keys associated with a band */
    keys: string[]
    /** display bands horizontally */
    horizontal?: boolean
    /** display stacked bars */
    stacked?: boolean
    /** padding between non-stacked bars */
    barPadding?: number
    /** scale for horizontal axis */
    scaleIndex?: BandScaleSpec
    /** scale for vertical axis */
    scaleValue?: LinearScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export interface BarsProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** keys to display (default to all keys) */
    keys?: string[]
    /** symbol for individual data points */
    bar?: (props: RectangleProps) => ReactNode
    /** style class */
    className?: string
    /** css style */
    style?: CssProps
}
