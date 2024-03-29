import { ReactNode } from 'react'
import {
    ComponentProps,
    CssProps,
    DataInteractivityProps,
    InteractivityProps,
    SizeSpec,
    SvgElementProps,
    TooltipDataItem,
    TooltipItemProps,
    TooltipProps,
    WithId,
} from '@chsk/core'
import { BandPreparedDataItem, BandProcessedDataItem, BandProps, BandsProps } from '../bands'

export type QuantileDataItem = WithId & Record<string, unknown>

export type FiveNumbers = [number, number, number, number, number]

export type QuantileProcessedSummary =
    | undefined
    | {
          n: number
          // parametric summary statistics
          moments?: [number, number]
          interval?: [number, number]
          // non-parametric summary statistics (quantiles)
          quantiles: FiveNumbers
          values: FiveNumbers
          extrema: [number, number]
      }

export type QuantileProcessedDataItem = BandProcessedDataItem<QuantileProcessedSummary>

export type QuantilePreparedSummary =
    | undefined
    | (QuantileProcessedSummary & {
          bandStart: number
          bandWidth: number
      })

export type QuantilePreparedDataItem = BandPreparedDataItem<QuantilePreparedSummary>

export type QuantileInteractiveDataItem = {
    id: string
    key: string
    values: FiveNumbers
    quantiles: FiveNumbers
    extrema: [number, number]
}

export interface BoxAndWhiskersProps extends SvgElementProps, InteractivityProps {
    /** information with coordinates */
    data: QuantilePreparedSummary
    /** orientation of the chart */
    horizontal: boolean
    /** style for box */
    boxStyle?: CssProps
    /** style for whiskers */
    whiskerStyle?: CssProps
    /** style for line representing the distribution center */
    middleStyle?: CssProps
    /** width of whisker cap */
    whiskerCapWidth?: number
}

export interface QuantileProps extends BandProps {
    /** variant */
    variant?: 'grouped' | 'layered'
    /** data */
    data: Array<QuantileDataItem>
    /** five quantiles for whiskers bounds, box bounds, and central line */
    quantiles?: [number, number, number, number, number]
}

export type QuantilesProps = BandsProps &
    DataInteractivityProps<QuantileInteractiveDataItem, BoxAndWhiskersProps> &
    ComponentProps<BoxAndWhiskersProps> &
    Pick<BoxAndWhiskersProps, 'boxStyle' | 'whiskerStyle' | 'middleStyle' | 'whiskerCapWidth'>

export interface QuantileTooltipProps
    extends Omit<TooltipProps, 'variant' | 'horizontal' | 'children'>,
        Pick<TooltipItemProps, 'color'> {
    /** format for quantile values */
    valueFormat?: (x: number) => string | number
    /** size of each cell in information table */
    cellSize?: SizeSpec
    /** padding between columns in information table */
    cellPadding?: number
    /** style for cells in information table */
    cellStyle?: CssProps
}

export interface QuantileTooltipItemProps
    extends Omit<TooltipItemProps, 'variant' | 'data' | 'size'>,
        Pick<QuantileTooltipProps, 'valueFormat' | 'cellSize' | 'cellPadding' | 'cellStyle'> {
    /** data */
    data: TooltipDataItem & QuantileProcessedSummary
    /** string label next to color symbol */
    label: ReactNode
}
