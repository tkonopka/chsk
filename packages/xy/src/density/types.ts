import { FC } from 'react'
import {
    DataInteractivityProps,
    NumericPositionSpec,
    ProcessedDataContextProps,
    RectangleProps,
    SvgElementProps,
    SymbolProps,
    ViewProps,
    WithId,
} from '@chsk/core'
import {
    ScatterCrosshairProps,
    ScatterPointsProps,
    ScatterProps,
    XYProcessedDataItem,
} from '../scatter'

// density processed items will only store intervals [min, max]
export type DensityProcessedDataItem = XYProcessedDataItem

// internal type summarizing a cell with a center (x, y), count, and values holding content
export type DensityPreparedDataItem = [number, number, number, string, number[]]
// indexes to access packing object (recall X=0, Y=1)
export const DENSITY_COUNT = 2 // number of elements in a density bin
export const DENSITY_COLOR = 3 // average color for bin
export const DENSITY_CONTENT = 4 // content of density bin

export type DensityDataContextProps = Omit<ProcessedDataContextProps, 'data'> & {
    /** bin size */
    binSize: number
    /** data */
    data: Array<DensityPreparedDataItem>
}

export interface DensityProps
    extends SvgElementProps,
        Pick<ViewProps, 'container' | 'children'>,
        Pick<ScatterProps, 'valueColor' | 'data' | 'x' | 'y' | 'scaleX' | 'scaleY' | 'scaleColor'> {
    /** bin size */
    binSize: number
}

export interface DensityCellProps extends Omit<RectangleProps, 'center' | 'variant' | 'rx' | 'ry'> {
    /** data count */
    value: number
}

export interface DensityCellsProps extends SvgElementProps {
    /** component used to draw a cell in the density map */
    cell?: FC<DensityCellProps>
    /** use transparency proportional to cell count */
    transparency?: boolean
}

export type DensityInteractiveDataItem = WithId & {
    bins: NumericPositionSpec
    count: number
    value?: number
    data: DensityPreparedDataItem
    color: string
}

export interface DensityCrosshairProps
    extends SvgElementProps,
        DataInteractivityProps<DensityInteractiveDataItem, SymbolProps>,
        Pick<ScatterPointsProps, 'symbol' | 'symbolStyle' | 'symbolClassName'>,
        Pick<ScatterCrosshairProps, 'variant' | 'expansion' | 'minDistance' | 'visible' | 'style'> {
    /** size of symbol */
    symbolR?: number
}
