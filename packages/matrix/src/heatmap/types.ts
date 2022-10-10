import { FC, ReactNode } from 'react'
import {
    BandScaleSpec,
    ColorScaleProps,
    ColorScaleSpec,
    ProcessedDataContextProps,
    RectangleProps,
    SizeScaleProps,
    SizeScaleSpec,
    SvgElementProps,
    ViewProps,
    WithId,
    WithInteractive,
} from '@chsk/core'

export type HeatMapDataItem = WithId & Record<string, unknown>

export type HeatMapProcessedDataItem = WithId & {
    index: number
    value: Array<number | string>
    size: Array<number>
}

export type HeatMapDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<HeatMapProcessedDataItem>
}

export interface HeatMapProps
    extends Omit<ViewProps, 'scaleX' | 'scaleY' | 'scaleColor' | 'scaleSize'> {
    /** list of all keys associated with a heatmap row */
    keys: string[]
    /** primary data (used for color scale) */
    data: Array<HeatMapDataItem>
    /** secondary data (used for size scale) */
    dataSize?: Array<HeatMapDataItem>
    /** scale for horizontal axis */
    scaleX?: BandScaleSpec
    /** scale for vertical axis */
    scaleY?: BandScaleSpec
    /** scale for colors */
    scaleColor?: ColorScaleSpec
    /** scale for cell size */
    scaleSize?: SizeScaleSpec
}

export interface HeatMapHighlightProps extends SvgElementProps {
    /** target ids (defaults to all ids) */
    ids?: string[]
    /** keys to display (default to all keys) */
    keys?: string[]
    /** interactive */
    interactive?: boolean
}

export interface HeatMapCellProps extends RectangleProps {
    /** value that determines cell color */
    cellValue?: number | string
    /** value that determines cell size */
    cellSize?: number
}

export interface HeatMapCellsProps extends HeatMapHighlightProps {
    /** symbol for individual data points */
    cell?: FC<HeatMapCellProps>
    /** scale for colors */
    scaleColor?: ColorScaleProps
    /** scale for size */
    scaleSize?: SizeScaleProps
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
