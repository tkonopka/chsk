import {
    CategoricalScaleSpec,
    DataInteractivityProps,
    LinearScaleSpec,
    NumericPositionSpec,
    ProcessedDataContextProps,
    SvgElementProps,
    SymbolProps,
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

export type VennInteractiveDataItem = {
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
