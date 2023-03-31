import { FC } from 'react'
import {
    CssProps,
    DataInteractivityProps,
    LabelProps,
    LocationProps,
    NumericPositionSpec,
    ProcessedDataContextProps,
    RectangleProps,
    SizeSpec,
    TranslateSpec,
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

export interface BarProps extends BandProps {
    /** variant */
    variant?: 'grouped' | 'stacked' | 'layered'
    /** data */
    data: Array<BarDataItem>
}

export interface BarsProps
    extends BandsProps,
        DataInteractivityProps<BarInteractiveDataItem, RectangleProps> {
    /** component used to draw individual bars */
    component?: FC<RectangleProps>
}

export interface BarsLabelsProps extends BandsProps, LocationProps {
    /** additional translation (in absolute units) */
    translate?: TranslateSpec
    /** format for text */
    format?: (v: string | number) => string
    /** minimum size for displaying a label */
    minSize?: SizeSpec
    /** toggle visibility of labels outside of small bars */
    showOuter?: boolean
    /** css style for outer label */
    styleOuter?: CssProps
    /** components used to render label */
    component?: FC<LabelProps>
}
