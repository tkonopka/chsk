import {
    CategoricalScaleSpec,
    DataInteractivityProps,
    LabelLocationSpec,
    LabelProps,
    LinearScaleSpec,
    NumericPositionSpec,
    PathProps,
    ProcessedDataContextProps,
    SizeSpec,
    SvgElementProps,
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
    // counts of set elements
    size: number
    intersection: number[]
    common: number
    // layout
    r: number
    center: NumericPositionSpec
    points: NumericPositionSpec[]
    largeArcs: number[]
}

export type VennPreparedDataItem = WithId & {
    membership: boolean[]
    label: string
    labelPosition: NumericPositionSpec
    value: number
    color: string
    d: string
}

export type VennDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<VennPreparedDataItem>
}

export type VennInterpolation = (c1: string, c2: string, c3?: string) => string

export interface VennProps
    extends SvgElementProps,
        Pick<ViewProps, 'container' | 'data' | 'children'> {
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
    /** interpolation of colors for set intersections */
    interpolation?: VennInterpolation
}

export type VennInteractiveDataItem = VennPreparedDataItem

export interface VennSetsProps
    extends SvgElementProps,
        DataInteractivityProps<VennInteractiveDataItem, PathProps> {
    /** component used to draw individual bars */
    component?: FC<PathProps>
}

export interface VennSetLabelsProps extends SvgElementProps, LabelLocationSpec {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** relative radius for label labelPosition */
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

export interface VennIntersectionLabelsProps
    extends Omit<VennSetLabelsProps, 'ids' | 'rs' | 'angles'> {
    format?: (v: string | number, item?: VennPreparedDataItem) => string
}
