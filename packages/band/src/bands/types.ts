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
    ComponentProps,
} from '@chsk/core'

export type BandProcessedDataItem<T> = WithId & {
    index: number
    data: Array<T>
    domain: Array<[number, number] | undefined>
}

export type BandPreparedDataItem<T> = WithId & {
    index: number
    data: Array<T>
}

export interface BandSurfaceProps
    extends SvgElementProps,
        WithInteractive,
        DataInteractivityProps<WithId, RectangleProps>,
        ComponentProps<RectangleProps> {
    /** variant */
    variant?: 'band' | 'step'
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** expansion along the value axis */
    expansion?: TwoSideSizeSpec
    /** use tooltip data to display surface */
    tooltip?: boolean
}

export interface BandLabelsProps
    extends SvgElementProps,
        Omit<LocationProps, 'position'>,
        ComponentProps<LabelProps> {
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
