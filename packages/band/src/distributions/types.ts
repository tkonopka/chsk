import { FC } from 'react'
import {
    CssProps,
    DataInteractivityProps,
    InteractivityProps,
    ProcessedDataContextProps,
    SizeSpec,
    SvgElementProps,
    TooltipDataItem,
    TooltipItemProps,
    TooltipProps,
    WithId,
} from '@chsk/core'
import { BandProps, BandsProps } from '../bands'

export type DistributionDataItem = WithId & Record<string, unknown>

export type FiveNumbers = [number, number, number, number, number]

export type DistributionProcessedSummary =
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

export type DistributionProcessedDataItem = WithId & {
    index: number
    data: DistributionProcessedSummary[]
    domain: Array<[number, number]>
}

export type DistributionProcessedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<DistributionProcessedDataItem>
}

export type DistributionPreparedSummary =
    | undefined
    | (DistributionProcessedSummary & {
          bandStart: number
          bandWidth: number
      })

export type DistributionPreparedDataItem = WithId & {
    index: number
    data: DistributionPreparedSummary[]
}

export type DistributionPreparedDataContextProps = {
    /** data */
    data: Array<DistributionPreparedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

export type DistributionInteractiveDataItem = {
    id: string
    key: string
    values: FiveNumbers
    quantiles: FiveNumbers
    extrema: [number, number]
}

export interface BoxAndWhiskersProps extends SvgElementProps, InteractivityProps {
    /** information with coordinates */
    data: DistributionPreparedSummary
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

export interface DistributionProps extends Omit<BandProps, 'scaleSize'> {
    /** variant */
    variant?: 'grouped' | 'layered'
    /** data */
    data: Array<DistributionDataItem>
    /** five quantiles for whiskers bounds, box bounds, and central line */
    quantiles?: [number, number, number, number, number]
}

export interface DistributionsProps
    extends BandsProps,
        DataInteractivityProps<DistributionInteractiveDataItem, BoxAndWhiskersProps>,
        Pick<BoxAndWhiskersProps, 'boxStyle' | 'whiskerStyle' | 'middleStyle' | 'whiskerCapWidth'> {
    /** component used to draw box and whiskers */
    component?: FC<BoxAndWhiskersProps>
}

export interface DistributionTooltipProps
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

export interface DistributionTooltipItemProps
    extends Omit<TooltipItemProps, 'variant' | 'data' | 'size'>,
        Pick<DistributionTooltipProps, 'valueFormat' | 'cellSize' | 'cellPadding' | 'cellStyle'> {
    /** data */
    data: TooltipDataItem & DistributionProcessedSummary
    /** string label next to color symbol */
    label: string
}
