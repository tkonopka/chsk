import { FC, ReactNode } from 'react'
import {
    BandScaleSpec,
    ColorScaleProps,
    ColorScaleSpec,
    ProcessedDataContextProps,
    RectangleProps,
    SvgElementProps,
    ViewProps,
    WithId,
    WithInteractive,
} from '@chask/core'

export type HeatMapDataItem = WithId & Record<string, unknown>

export type HeatMapProcessedDataItem = WithId & {
    index: number
    value: Array<number | string>
}

export type HeatMapDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<HeatMapProcessedDataItem>
}

export interface HeatMapProps extends Omit<ViewProps, 'scaleX' | 'scaleY' | 'scaleColor'> {
    /** data */
    data: Array<HeatMapDataItem>
    /** list of all keys associated with a heatmap row */
    keys: string[]
    /** scale for horizontal axis */
    scaleX?: BandScaleSpec
    /** scale for vertical axis */
    scaleY?: BandScaleSpec
    /** scale for colors */
    scaleColor?: ColorScaleSpec
}

export interface HeatMapHighlightProps extends SvgElementProps {
    /** target ids (defaults to all ids) */
    ids?: string[]
    /** keys to display (default to all keys) */
    keys?: string[]
}

export interface HeatMapCellsProps extends HeatMapHighlightProps {
    /** symbol for individual data points */
    cell?: FC<RectangleProps>
    /** scale for colors */
    scaleColor?: ColorScaleProps
    /** children */
    children?: ReactNode
}

export interface HeatMapSurfaceProps extends SvgElementProps, WithInteractive {
    /** interval of ids */
    ids?: string[]
    /** interval of keys */
    keys?: string[]
    /** expansion along the ids and keys axes */
    expansion?: [[number, number], [number, number]]
}
