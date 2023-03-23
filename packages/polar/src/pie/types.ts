import { FC } from 'react'
import {
    AlignSpec,
    AngleUnit,
    CategoricalScaleSpec,
    DataInteractivityProps,
    LabelProps,
    LinearScaleSpec,
    SvgElementProps,
    SvgElementVariantProps,
    ViewProps,
    WithId,
} from '@chsk/core'
import { PolarItemProps } from '../general'

export type PieDataItem = WithId & {
    data: number
}

export type PieProcessedDataItem = WithId & {
    index: number
    rInner: number
    rOuter: number
    startAngle: number
    endAngle: number
    data: number
    proportion: number
}

export interface PieProps
    extends SvgElementProps,
        Pick<ViewProps, 'container' | 'children' | 'data'> {
    /** primary data (used for color scale) */
    data: Array<PieDataItem>
    /** global rotation */
    angle?: number
    /** angle unit */
    angleUnit?: AngleUnit
    /** angle alignment for first slice */
    angleAlign?: number
    /** outer radius */
    rOuter?: number
    /** inner radius */
    rInner?: number
    /** scale for horizontal axis */
    scaleX?: LinearScaleSpec
    /** scale for vertical axis */
    scaleY?: LinearScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export type PieInteractiveDataItem = PieProcessedDataItem

export interface SliceProps extends SvgElementProps, Pick<PolarItemProps, 'angleUnit'> {
    /** inner radius in absolute coordinates */
    innerRadius: number
    /** outer radius in absolute coordinates */
    outerRadius: number
    /** start angle for slice (radians) */
    startAngle: number
    /** end angle for slice (radians) */
    endAngle: number
    /** corner radius */
    r?: number
    /** angle padding to create space between slices */
    padAngle?: number
}

export interface SlicesProps
    extends SvgElementProps,
        DataInteractivityProps<PieInteractiveDataItem, SliceProps> {
    /** /** ids to display (defaults to all ids) */
    ids?: string[]
    /** component used to draw individual bars */
    component?: FC<SliceProps>
    /** radius for slices */
    r?: number
    /** angle padding */
    padAngle?: number
}

export interface SliceLabelProps
    extends SvgElementVariantProps,
        Omit<SliceProps, 'r' | 'padAngle'>,
        Pick<LabelProps, 'align' | 'children'>,
        Pick<PolarItemProps, 'radial' | 'tangential'> {
    /** content */
    format?: (x: string | number) => string
}

export interface SliceLabelsProps
    extends SvgElementVariantProps,
        Pick<PolarItemProps, 'radial' | 'tangential'>,
        Pick<SlicesProps, 'ids'>,
        Pick<DataInteractivityProps<PieInteractiveDataItem, SliceLabelProps>, 'dataComponent'> {
    /** alignment [r, theta] */
    align?: AlignSpec
    /** minimum angle (degrees) */
    minAngle?: number
    /** angle unit */
    angleUnit?: AngleUnit
    /** format for text */
    format?: (v: PieProcessedDataItem) => string
    /** components used to render text */
    component?: FC<SliceLabelProps>
}
