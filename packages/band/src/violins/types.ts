import { ComponentProps, DataInteractivityProps, PathProps, WithId } from '@chsk/core'
import { BandPreparedDataItem, BandProcessedDataItem, BandProps, BandsProps } from '../bands'

export type ViolinDataItem = WithId & Record<string, unknown>

export type ViolinProcessedSummary =
    | undefined
    | {
          n: number
          values: number[]
          breaks?: number[]
      }

export type ViolinProcessedDataItem = BandProcessedDataItem<ViolinProcessedSummary>

export type ViolinPreparedSummary =
    | undefined
    | {
          n: number
          values: number[]
          breaks: number[]
          bandStart: number
          bandWidth: number
      }

export type ViolinPreparedDataItem = BandPreparedDataItem<ViolinPreparedSummary>

export type ViolinInteractiveDataItem = {
    id: string
    key: string
    n: number
}

export interface ViolinProps extends BandProps {
    /** variant */
    variant?: 'grouped' | 'layered'
    /** breaks to determine violin resolution */
    breaks?: number | number[]
    /** data */
    data: Array<ViolinDataItem>
}

export interface ViolinsProps
    extends BandsProps,
        DataInteractivityProps<ViolinInteractiveDataItem, PathProps>,
        ComponentProps<PathProps> {
    /** variant */
    variant?: 'smooth' | 'step'
}
