import { FC } from 'react'
import { CssProps, ProcessedDataContextProps, SymbolProps, WithId } from '@chask/core'
import { BarProps, BarsProps } from '../bars'

export type StripDataItem = WithId & Record<string, unknown>

export type StripProcessedPoints = {
    internal: number[]
    value: number[]
    r: number[]
}

export type StripProcessedDataItem = WithId & {
    index: number
    data: StripProcessedPoints[]
    // values will hold a subset from the summaries to shortcut computing domains for scales
    values: number[]
}

export type StripProcessedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<StripProcessedDataItem>
}

export type StripPreparedPoints = StripProcessedPoints & {
    bandStart: number
    bandWidth: number
}

export type StripPreparedDataItem = WithId & {
    index: number
    data: StripPreparedPoints[]
}

export type StripPreparedDataContextProps = {
    /** data */
    data: Array<StripPreparedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

export type StripVariant =
    | 'default'
    | 'jitter'
    | 'ascending'
    | 'increasing'
    | 'descending'
    | 'decreasing'

export interface StripProps extends Omit<BarProps, 'stacked' | 'variant'> {
    /** data */
    data: Array<StripDataItem>
    /** variant, determines how points are arranged within a strip */
    variant?: StripVariant
    /** radius for dots */
    r?: number
}

export interface StripsProps extends Omit<BarsProps, 'component'> {
    /** component used to draw box and whiskers */
    component?: FC<SymbolProps>
    /** style for symbols */
    symbolStyle?: CssProps
}
