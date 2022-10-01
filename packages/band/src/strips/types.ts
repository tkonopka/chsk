import { FC } from 'react'
import {
    CssProps,
    DataInteractivityProps,
    ProcessedDataContextProps,
    SymbolProps,
    WithId,
} from '@chask/core'
import { BandProps, BandsProps } from '../bands'

export type StripDataItem = WithId & Record<string, unknown>

export type StripProcessedPoints =
    | undefined
    | {
          internal: number[]
          value: number[]
          valueSize: number[]
      }

export type StripProcessedDataItem = WithId & {
    index: number
    data: StripProcessedPoints[]
    domain: Array<[number, number]>
}

export type StripProcessedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<StripProcessedDataItem>
}

export type StripPreparedPoints =
    | undefined
    | (StripProcessedPoints & {
          bandStart: number
          bandWidth: number
      })

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

export type StripInteractiveDataItem = {
    id: string
    key: string
    index: number
    value?: number
    valueSize?: number
}

export type StripVariant =
    | 'default'
    | 'jitter'
    | 'ascending'
    | 'increasing'
    | 'descending'
    | 'decreasing'
    | 'middle'

export interface StripProps extends BandProps {
    /** variant, determines how points are arranged within a strip */
    variant?: StripVariant
    /** data */
    data: Array<StripDataItem>
    /** size of dots */
    valueSize?: number
}

export interface StripsProps
    extends BandsProps,
        DataInteractivityProps<StripInteractiveDataItem, SymbolProps> {
    /** component used to draw box and whiskers */
    component?: FC<SymbolProps>
    /** style for symbols */
    symbolStyle?: CssProps
}
