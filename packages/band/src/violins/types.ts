import {
    ComponentProps,
    DataInteractivityProps,
    PathProps,
    ProcessedDataContextProps,
    WithId,
} from '@chsk/core'
import { BandProps, BandsProps } from '../bands'

export type ViolinDataItem = WithId & Record<string, unknown>

export type ViolinProcessedSummary =
    | undefined
    | {
          n: number
          values: number[]
          breaks?: number[]
      }

export type ViolinProcessedDataItem = WithId & {
    index: number
    data: ViolinProcessedSummary[]
    domain: Array<[number, number] | undefined>
}

export type ViolinPreparedSummary =
    | undefined
    | {
          n: number
          values: number[]
          breaks: number[]
          bandStart: number
          bandWidth: number
      }

export type ViolinPreparedDataItem = WithId & {
    index: number
    data: ViolinPreparedSummary[]
}

export type ViolinPreparedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<ViolinPreparedDataItem>
}

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
