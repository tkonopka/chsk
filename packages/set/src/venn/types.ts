import {
    CategoricalScaleSpec,
    DataInteractivityProps,
    LabelLocationSpec,
    LabelProps,
    LinearScaleSpec,
    NumericPositionSpec,
    ProcessedDataContextProps,
    SizeSpec,
    SvgElementProps,
    SymbolProps,
    TranslateSpec,
    ViewProps,
    WithId,
} from '@chsk/core'
import { FC } from 'react'

export type VennDataItem = WithId & {
    data: unknown[]
}

export type VennProcessedDataItem = WithId & {
    index: number
    size: number
    intersection: number[]
    common: number
    position: NumericPositionSpec
    r: number
}

export type VennDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<VennProcessedDataItem>
}

export interface VennProps
    extends Omit<
        ViewProps,
        'variant' | 'scaleX' | 'scaleY' | 'scaleColor' | 'scaleSize' | 'autoRescale'
    > {
    /** primary data (used for color scale) */
    data: Array<VennDataItem>
    /** global rotation */
    angle?: number
    /** relative separation */
    separation?: number
    /** make 2-set diagram with areas proportional to set size */
    proportional?: boolean
    /** scale for horizontal axis */
    scaleX?: LinearScaleSpec
    /** scale for vertical axis */
    scaleY?: LinearScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export type VennInteractiveDataItem = WithId & {
    size: number
}

export interface VennSetsProps
    extends SvgElementProps,
        DataInteractivityProps<VennInteractiveDataItem, SymbolProps> {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** component used to draw individual bars */
    component?: FC<SymbolProps>
}

export interface VennSetLabelsProps extends SvgElementProps, LabelLocationSpec {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** relative radius for label position */
    rs?: number[]
    /** angles */
    angles?: number[]
    /** additional translation (in absolute units) */
    translate?: TranslateSpec
    /** format for text */
    format?: (v: string | number) => string
    /** size for label box */
    size?: SizeSpec
    /** components used to render label */
    component?: FC<LabelProps>
}

export type VennIntersectionSpec = {
    position: NumericPositionSpec
    value: number
    label: string
}

export interface VennIntersectionLabelsProps
    extends Omit<VennSetLabelsProps, 'ids' | 'rs' | 'angles'> {
    format?: (v: string | number, item?: VennIntersectionSpec) => string
}
