import { FC, ReactNode } from 'react'
import {
    CssProps,
    DataInteractivityProps,
    LabelProps,
    LinearScaleSpec,
    NumericPositionSpec,
    ProcessedDataContextProps,
    RectangleProps,
    SizeSpec,
    WithId,
} from '@chsk/core'
import { BandProps, BandsProps } from '../bands'

export type BarDataItem = WithId & Record<string, unknown>

export type BarProcessedDataItem = WithId & {
    index: number
    data: Array<number>
    domain: Array<[number, number]>
}

export type BarProcessedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<BarProcessedDataItem>
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

export type BarInteractiveDataItem = {
    id: string
    key: string
    data: number
}

export interface BarProps extends Omit<BandProps, 'scaleValue'> {
    /** variant */
    variant?: 'grouped' | 'stacked' | 'layered'
    /** data */
    data: Array<BarDataItem>
    /** scale for axis with continuous values */
    scaleValue?: LinearScaleSpec
}

export interface BarsProps
    extends BandsProps,
        DataInteractivityProps<BarInteractiveDataItem, RectangleProps> {
    /** component used to draw individual bars */
    component?: FC<RectangleProps>
}

export interface BarsLabelsProps extends BandsProps, Omit<LabelProps, 'position'> {
    /** format for text */
    format?: (v: string | number) => ReactNode
    /** minimum size for displaying a label */
    minSize?: SizeSpec
    /** toggle visibility of labels outside of small bars */
    showOuter?: boolean
    /** css style for outer label */
    styleOuter?: CssProps
    /** components used to render label */
    component?: FC<LabelProps>
}
