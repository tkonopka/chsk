import { FC } from 'react'
import {
    CategoricalScaleSpec,
    DataInteractivityProps,
    LinearScaleSpec,
    SvgElementProps,
    ViewProps,
    WithId,
} from '@chsk/core'
import { PolarTypographyProps } from '../general'

export type PieDataItem = WithId & {
    data: number
}

export type PieProcessedDataItem = WithId & {
    index: number
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
    /** start angle for slice */
    startAngle: number
    /** end angle for slice */
    endAngle: number
    /** corner radius */
    r?: number
    /** adjustment for angles to create space between slices */
    padAngle?: number
}

export interface SlicesProps
    extends SvgElementProps,
        DataInteractivityProps<PieInteractiveDataItem, SliceProps> {
    /** /** ids to display (defaults to all ids) */
    ids?: string[]
    /** component used to draw individual bars */
    component?: FC<SliceProps>
    /** outer radius */
    rOuter?: number
    /** inner radius */
    rInner?: number
    /** radius for slices */
    rCorner?: number
    /** angle padding */
    padAngle?: number
}

export interface SlicesLabelsProps
    extends Omit<PolarTypographyProps, 'variant'>,
        Pick<SlicesProps, 'ids'> {
    /** radial position */
    r: number
    /** minimum angle (degrees) */
    minAngle?: number
    /** format for text */
    format?: (v: string | number) => string
    /** components used to render text */
    component?: FC<PolarTypographyProps>
}
