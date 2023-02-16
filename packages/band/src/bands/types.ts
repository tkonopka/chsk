import { FC } from 'react'
import {
    BandScaleSpec,
    CategoricalScaleSpec,
    LabelLocationSpec,
    LabelProps,
    LinearScaleSpec,
    RectangleProps,
    SizeSpec,
    SizeUnit,
    SvgElementProps,
    TranslateSpec,
    TwoSideSizeSpec,
    ViewProps,
    WithInteractive,
} from '@chsk/core'

export interface BandSurfaceProps extends SvgElementProps, WithInteractive {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** expansion along the value axis */
    expansion?: TwoSideSizeSpec
    /** component */
    component?: FC<RectangleProps>
    /** use tooltip data to display surface */
    tooltip?: boolean
}

export interface BandLabelsProps extends SvgElementProps, LabelLocationSpec {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** position of label along the value axis */
    position?: number
    /** size of label box */
    size?: SizeSpec
    /** units */
    unit?: SizeUnit
    /** additional translation (in absolute units) */
    translate?: TranslateSpec
    /** format for text */
    format?: (v: Record<string, unknown>) => string
    /** component used to render label */
    component?: FC<LabelProps>
}

export interface BandHighlightProps extends SvgElementProps {
    /** target ids (defaults to all ids) */
    ids?: string[]
}

// base interface for BarProps, StripProps, QuantileProps
export interface BandProps extends Omit<ViewProps, 'variant' | 'scaleX' | 'scaleY' | 'scaleColor'> {
    /** list of all keys associated with a band */
    keys: string[]
    /** display bands horizontally */
    horizontal?: boolean
    /** padding between bands in the same group/index */
    paddingInternal?: number | null
    /** scale for axis with discrete indexes */
    scaleIndex?: BandScaleSpec
    /** scale for axis with continuous values */
    scaleValue?: LinearScaleSpec
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
