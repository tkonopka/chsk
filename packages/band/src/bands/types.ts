import { FC } from 'react'
import {
    AlignSpec,
    BandScaleSpec,
    CategoricalScaleSpec,
    DataInteractivityProps,
    LabelProps,
    LocationProps,
    RectangleProps,
    SizeSpec,
    SizeUnit,
    SvgElementProps,
    TwoSideSizeSpec,
    ViewProps,
    WithId,
    WithInteractive,
    NumericScaleSpec,
    TimeScaleSpec,
    ContinuousScaleSpec,
} from '@chsk/core'

export interface BandSurfaceProps
    extends SvgElementProps,
        WithInteractive,
        DataInteractivityProps<WithId, RectangleProps> {
    /** variant */
    variant?: 'band' | 'step'
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** expansion along the value axis */
    expansion?: TwoSideSizeSpec
    /** component */
    component?: FC<RectangleProps>
    /** use tooltip data to display surface */
    tooltip?: boolean
}

export interface BandLabelsProps extends SvgElementProps, Omit<LocationProps, 'position'> {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** position of label along the value axis */
    position?: number
    /** size of label box */
    size?: SizeSpec
    /** units */
    unit?: SizeUnit
    /** format for text */
    format?: (v: Record<string, unknown>) => string
    /** component used to render label */
    component?: FC<LabelProps>
}

export interface BandHighlightProps extends SvgElementProps {
    /** target ids (defaults to all ids) */
    ids?: string[]
    /** toggle response to mouse motion */
    interactive?: boolean
    /** animate appearance from edges */
    edgeAnimation?: boolean
    /** alignment of tooltip within a highlighted zone */
    tooltipAlign?: AlignSpec
}

export type ScaleWithBandwidthSpec =
    | BandScaleSpec
    | (NumericScaleSpec & { bandwidth: [number, number] })
    | (TimeScaleSpec & { bandwidth: [Date, Date] })

// base interface for BarProps, StripProps, QuantileProps
export interface BandProps
    extends SvgElementProps,
        Pick<ViewProps, 'container' | 'children' | 'data' | 'autoRescale'> {
    /** list of all keys associated with a band */
    keys: string[]
    /** display bands horizontally */
    horizontal?: boolean
    /** padding between bands in the same group/index */
    paddingInternal?: number
    /** scale for axis with discrete indexes */
    scaleIndex?: ScaleWithBandwidthSpec
    /** scale for axis with continuous values */
    scaleValue?: ContinuousScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

// base interface for BarsProps, StripsProps, QuantilesProps
export interface BandsProps extends SvgElementProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** keys to display (default to all keys) */
    keys?: string[]
}
