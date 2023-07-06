import { ReactNode } from 'react'
import {
    DataInteractivityProps,
    LabelProps,
    LinearScaleSpec,
    ProcessedDataContextProps,
    SideVariant,
    WithId,
    PathProps,
    RectangleProps,
    FourSideSizeSpec,
    ShiftUnit,
    WithInteractive,
    ComponentProps,
} from '@chsk/core'
import { BandProps, BandsProps } from '../bands'

export type DendrogramDataItem = WithId & {
    merge: Array<[number, number]>
    height: number[]
    keys: string[]
}

export type DendrogramProcessedDataItem = WithId & {
    index: number
    domain: [number, number]
}

export type DendrogramPreparedDataItem = WithId & {
    index: number
    merge: Array<[number, number]>
    position: number[]
    height: number[]
    leafPosition: number[]
    leafHeight: number[]
    positionInterval: [number, number][]
    heightInterval: [number, number][]
}

export type DendrogramPreparedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<DendrogramPreparedDataItem>
}

export type DendrogramInteractiveDataItem = {
    id: string
    level: number
    data: DendrogramDataItem
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
    extends BandsProps,
        DataInteractivityProps<DendrogramInteractiveDataItem, PathProps>,
        ComponentProps<PathProps> {
    /** hierarchy levels */
    levels?: number[]
}

export interface DendrogramLeafLabelsProps
    extends BandsProps,
        Omit<LabelProps, 'position'>,
        ComponentProps<LabelProps> {
    /** format for text */
    format?: (v: string) => ReactNode
}

export interface DendrogramSurfaceProps
    extends BandsProps,
        WithInteractive,
        DataInteractivityProps<DendrogramInteractiveDataItem, RectangleProps>,
        ComponentProps<RectangleProps> {
    /** hierarchy levels */
    levels?: number[]
    /** expansion */
    expansion?: FourSideSizeSpec
    /** expansion unit */
    expansionUnit?: ShiftUnit
}
