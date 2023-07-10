import { ReactNode } from 'react'
import {
    CategoricalScaleSpec,
    DataInteractivityProps,
    LabelProps,
    LocationProps,
    LinearScaleSpec,
    NumericPositionSpec,
    PathProps,
    SizeSpec,
    SvgElementProps,
    ViewProps,
    WithId,
    ComponentProps,
} from '@chsk/core'

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

export type VennSetsProps = SvgElementProps &
    DataInteractivityProps<VennInteractiveDataItem, PathProps> &
    ComponentProps<PathProps>

export interface VennSetLabelsProps
    extends SvgElementProps,
        Omit<LocationProps, 'position'>,
        ComponentProps<LabelProps> {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** relative radius for label labelPosition */
    rs?: number[]
    /** angles */
    angles?: number[]
    /** format for label content */
    format?: (v: string) => ReactNode
    /** size for label box */
    size?: SizeSpec
}

export interface VennIntersectionLabelsProps
    extends Omit<VennSetLabelsProps, 'rs' | 'angles' | 'format'> {
    /** format for label content */
    format?: (v: number, item?: VennPreparedDataItem) => ReactNode
}
