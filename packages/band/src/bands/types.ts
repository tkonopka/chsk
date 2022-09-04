import { FC } from 'react'
import {
    LabelLocationSpec,
    LabelProps,
    SizeSpec,
    SizeUnit,
    SvgElementProps,
    TranslateSpec,
    TwoSideSizeSpec,
    WithInteractive,
} from '@chask/core'

export interface BandSurfaceProps extends SvgElementProps, WithInteractive {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** expansion along the value axis */
    expansion?: TwoSideSizeSpec
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
    /** components used to render label */
    component?: FC<LabelProps>
}

export interface BandHighlightProps extends SvgElementProps {
    /** target ids (defaults to all ids) */
    ids?: string[]
}
