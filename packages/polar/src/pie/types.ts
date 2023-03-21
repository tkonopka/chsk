import { FC } from 'react'
import {
    AlignSpec,
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
    extends Omit<
        ViewProps,
        'variant' | 'scaleX' | 'scaleY' | 'scaleColor' | 'scaleSize' | 'autoRescale'
    > {
    /** primary data (used for color scale) */
    data: Array<PieDataItem>
    /** global rotation */
    angle?: number
    /** angle alignment for first slice */
    angleAlign?: number
    /** outer radius */
    rOuter?: number
    /** inner radius */
    rInner?: number
    /** scale for radial axis */
    scaleR?: LinearScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export type PieInteractiveDataItem = PieProcessedDataItem

export interface SliceProps extends SvgElementProps {
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
    extends SliceProps,
        Omit<LabelProps, 'position' | 'size'>,
        Pick<PolarItemProps, 'radial' | 'tangential'> {
    /** content */
    format?: (x: string | number) => string
}

export interface SliceLabelsProps
    extends SvgElementVariantProps,
        Omit<PolarItemProps, 'variant' | 'children'>,
        Pick<SlicesProps, 'ids'>,
        Pick<DataInteractivityProps<PieInteractiveDataItem, SliceLabelProps>, 'dataComponent'> {
    /** alignment [r, theta] */
    align?: AlignSpec
    /** minimum angle (degrees) */
    minAngle?: number
    /** format for text */
    format?: (v: string | number) => string
    /** components used to render text */
    component?: FC<SliceLabelProps>
}
