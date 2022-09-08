import { BarProps, BarsProps } from '../bars'
import { CssProps, ProcessedDataContextProps, SvgElementProps, WithId } from '@chask/core'
import { FC } from 'react'

export type QuantileDataItem = WithId & Record<string, unknown>

export type FiveNumbers = [number, number, number, number, number]

export type QuantileProcessedSummary =
    | undefined
    | {
          values: FiveNumbers
          quantiles: FiveNumbers
          extrema: [number, number]
      }

export type QuantileProcessedDataItem = WithId & {
    index: number
    data: QuantileProcessedSummary[]
    domain: Array<[number, number]>
}

export type QuantileProcessedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<QuantileProcessedDataItem>
}

export type QuantilePreparedSummary =
    | undefined
    | (QuantileProcessedSummary & {
          bandStart: number
          bandWidth: number
      })

export type QuantilePreparedDataItem = WithId & {
    index: number
    data: QuantilePreparedSummary[]
}

export type QuantilePreparedDataContextProps = {
    /** data */
    data: Array<QuantilePreparedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

export interface BoxAndWhiskersProps extends SvgElementProps {
    /** information with coordinates */
    data: QuantilePreparedSummary
    /** orientation of the chart */
    horizontal: boolean
    /** style for box */
    boxStyle?: CssProps
    /** style for whiskers */
    whiskerStyle?: CssProps
    /** style for median line */
    medianStyle?: CssProps
    /** width of whisker cap */
    whiskerCapWidth?: number
}

export interface QuantileProps extends Omit<BarProps, 'variant'> {
    /** data */
    data: Array<QuantileDataItem>
    /** five quantiles for whiskers bounds, box bounds, and central line */
    quantiles?: [number, number, number, number, number]
}

export interface QuantilesProps
    extends Omit<BarsProps, 'component'>,
        Pick<BoxAndWhiskersProps, 'boxStyle' | 'whiskerStyle' | 'medianStyle' | 'whiskerCapWidth'> {
    /** component used to draw box and whiskers */
    component?: FC<BoxAndWhiskersProps>
}
