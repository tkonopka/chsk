import { FC } from 'react'
import {
    DataInteractivityProps,
    LabelProps,
    LinearScaleSpec,
    ProcessedDataContextProps,
    SideVariant,
    WithId,
    PathProps,
    SvgElementProps,
} from '@chsk/core'
import { BandProps, BandsProps } from '../bands'

export type DendrogramDataItem = WithId & {
    merge: Array<[number, number]>
    height: number[]
    ids: string[]
}

export type DendrogramProcessedDataItem = WithId & {
    index: number
    domain: [number, number]
}

export type DendrogramProcessedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<DendrogramProcessedDataItem>
}

export type DendrogramPreparedDataItem = WithId & {
    index: number
    merge: Array<[number, number]>
    position: number[]
    height: number[]
    leafPosition: number[]
    leafHeight: number[]
    interval: [number, number][]
}

export type DendrogramPreparedDataContextProps = {
    /** data */
    data: Array<DendrogramPreparedDataItem>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

export type DendrogramInteractiveDataItem = {
    id: string
    key: string
    data: number
}

export interface DendrogramProps
    extends Omit<BandProps, 'keys' | 'scaleValue' | 'autoRescale' | 'paddingInternal'> {
    /** variant */
    variant?: SideVariant
    /** data */
    data: Array<DendrogramDataItem>
    /** scale for axis with continuous values */
    scaleValue?: LinearScaleSpec
    /** hang size for leaf nodes */
    hang?: number
}

export interface DendrogramTreeProps
    extends Omit<BandsProps, 'keys' | 'variant'>,
        DataInteractivityProps<DendrogramInteractiveDataItem, PathProps> {
    /** component used to draw individual bars */
    component?: FC<PathProps>
}

export interface DendrogramLeafLabelsProps extends SvgElementProps, Omit<LabelProps, 'position'> {
    /** ids to display (defaults to all ids) */
    ids?: string[]
    /** format for text */
    format?: (v: string) => string
    /** components used to render label */
    component?: FC<LabelProps>
}
