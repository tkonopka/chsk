import { ReactNode } from 'react'
import {
    BandScaleSpec,
    ColorScaleProps,
    ColorScaleSpec,
    ComponentProps,
    DataInteractivityProps,
    RectangleProps,
    SizeScaleProps,
    SizeScaleSpec,
    SvgElementProps,
    ViewProps,
    WithId,
    WithInteractive,
} from '@chsk/core'
import { BandHighlightProps } from '@chsk/band'

export type HeatMapDataItem = WithId & Record<string, unknown>

export type HeatMapProcessedDataItem = WithId & {
    index: number
    value: Array<number | string>
    size: Array<number>
}

export interface HeatMapProps extends SvgElementProps, Pick<ViewProps, 'container' | 'children'> {
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

export interface HeatMapCellProps extends Omit<RectangleProps, 'center' | 'setRole'> {
    /** value that determines cell color */
    cellValue?: number | string
    /** value that determines cell size */
    cellSize?: number
}

export type HeatMapInteractiveDataItem = {
    id: string
    key: string
    data: number | string
    size?: number
    label?: string
    color?: string
}

export interface HeatMapHighlightProps
    extends SvgElementProps,
        BandHighlightProps,
        DataInteractivityProps<HeatMapInteractiveDataItem, HeatMapCellProps> {
    /** keys to display (default to all keys) */
    keys?: string[]
}

export interface HeatMapCellsProps extends HeatMapHighlightProps, ComponentProps<HeatMapCellProps> {
    /** id and key coordinates for subset of cells */
    cells?: [string, string][]
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
