import { ReactNode } from 'react'
import {
    ComponentProps,
    CssProps,
    DataInteractivityProps,
    LabelProps,
    LinearScaleSpec,
    LocationProps,
    NumericPositionSpec,
    RectangleProps,
    SizeSpec,
    WithId,
} from '@chsk/core'
import { BandProcessedDataItem, BandProps, BandsProps } from '../bands'

export type BarDataItem = WithId & Record<string, unknown>

export type BarProcessedDataItem = BandProcessedDataItem<number>

export type BarPreparedDataItem = WithId & {
    index: number
    position: Array<NumericPositionSpec>
    size: Array<SizeSpec>
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

export type BarsProps = BandsProps &
    DataInteractivityProps<BarInteractiveDataItem, RectangleProps> &
    ComponentProps<RectangleProps>

export interface BarsLabelsProps
    extends BandsProps,
        Omit<LocationProps, 'position' | 'size'>,
        Pick<LabelProps, 'variant' | 'angle' | 'children'>,
        ComponentProps<LabelProps> {
    /** format for text */
    format?: (v: number) => ReactNode
    /** minimum size for displaying a label */
    minSize?: SizeSpec
    /** toggle visibility of labels outside of small bars */
    showOuter?: boolean
    /** css style for outer label */
    styleOuter?: CssProps
}
