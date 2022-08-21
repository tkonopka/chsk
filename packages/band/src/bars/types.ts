import { FC } from 'react'
import {
    BandScaleSpec,
    CategoricalScaleSpec,
    CssProps,
    LabelLocationSpec,
    LabelProps,
    LinearScaleSpec,
    NumericPositionSpec,
    ProcessedDataContextProps,
    RectangleProps,
    SizeSpec,
    SvgElementProps,
    TranslateSpec,
    ViewProps,
    WithId,
} from '@chask/core'

export type BarDataItem = WithId & Record<string, unknown>

export type BarProcessedDataItem = WithId & {
    index: number
    value: Array<number>
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

export interface BarProps extends Omit<ViewProps, 'scaleX' | 'scaleY'> {
    /** data */
    data: Array<BarDataItem>
    /** list of all keys associated with a band */
    keys: string[]
    /** display bands horizontally */
    horizontal?: boolean
    /** display stacked bars */
    stacked?: boolean
    /** padding between non-stacked bars */
    barPadding?: number
    /** scale for horizontal axis */
    scaleIndex?: BandScaleSpec
    /** scale for vertical axis */
    scaleValue?: LinearScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export interface BarsProps {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** keys to display (default to all keys) */
    keys?: string[]
    /** symbol for individual data points */
    bar?: FC<RectangleProps>
    /** style class */
    className?: string
    /** css style */
    style?: CssProps
}

export interface BarsLabelsProps extends SvgElementProps, LabelLocationSpec {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** keys to display (default to all keys) */
    keys?: string[]
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
