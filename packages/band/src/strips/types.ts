import { ComponentProps, CssProps, DataInteractivityProps, SymbolProps, WithId } from '@chsk/core'
import { BandPreparedDataItem, BandProcessedDataItem, BandProps, BandsProps } from '../bands'

export type StripDataItem = WithId & Record<string, unknown>

export type StripProcessedPoints =
    | undefined
    | {
          internal: number[]
          value: number[]
          valueSize: number[]
      }

export type StripProcessedDataItem = BandProcessedDataItem<StripProcessedPoints>

export type StripPreparedPoints =
    | undefined
    | (StripProcessedPoints & {
          bandStart: number
          bandWidth: number
      })

export type StripPreparedDataItem = BandPreparedDataItem<StripPreparedPoints>

export type StripInteractiveDataItem = {
    id: string
    key: string
    index: number
    value?: number
    valueSize?: number
}

export type JitterVariant =
    | 'none'
    | 'random'
    | 'ascending'
    | 'increasing'
    | 'descending'
    | 'decreasing'
    | 'middle'

export interface StripProps extends BandProps {
    /** variant */
    variant?: 'grouped' | 'layered'
    /** determines how points are arranged within a strip */
    jitter?: JitterVariant
    /** data */
    data: Array<StripDataItem>
    /** size of dots */
    valueSize?: number
}

export interface StripsProps
    extends BandsProps,
        DataInteractivityProps<StripInteractiveDataItem, SymbolProps>,
        ComponentProps<SymbolProps> {
    /** style for symbols */
    symbolStyle?: CssProps
}
