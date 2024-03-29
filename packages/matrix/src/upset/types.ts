import { FC } from 'react'
import {
    BandScaleSpec,
    CategoricalScaleSpec,
    ComponentProps,
    CssProps,
    FourSideSizeSpec,
    LineProps,
    NumericPositionSpec,
    SvgElementProps,
    SymbolProps,
    ViewProps,
    WithId,
    WithInteractive,
} from '@chsk/core'
import { BarProps } from '@chsk/band'

export type UpSetDataItem = WithId & {
    data: unknown[]
}

export type UpSetProcessedDataItem = WithId & {
    index: number
    data: Array<number>
    horizontal: boolean
}

export interface UpSetProps
    extends SvgElementProps,
        Pick<ViewProps, 'container' | 'data' | 'children'> {
    /** primary data (used for color scale) */
    data: Array<UpSetDataItem>
    /** display set pairs horizontally */
    horizontal?: boolean
    /** scale for axis with sets */
    scaleIndex?: BandScaleSpec
    /** scale for axis with set membership */
    scaleMembership?: BandScaleSpec
    /** scale for colors */
    scaleColor?: CategoricalScaleSpec
}

export interface UpSetGridProps extends SvgElementProps {
    /** component drawing a symbol for line edges */
    symbol?: FC<SymbolProps>
    /** styles for symbol */
    symbolStyle?: CssProps
}

export interface UpSetMembershipProps extends UpSetGridProps, WithInteractive {
    /** coordinates for symbols */
    positions: NumericPositionSpec[]
    /** radius of symbol */
    r: number
    /** component drawing a line */
    line?: FC<LineProps>
    /** styles for line */
    lineStyle?: CssProps
}

export type UpSetMembershipsProps = Omit<UpSetMembershipProps, 'positions' | 'r'> &
    ComponentProps<UpSetMembershipProps>

export interface UpSetBarProps
    extends Pick<BarProps, 'scaleIndex' | 'scaleValue' | 'scaleColor' | 'children'> {
    /** padding */
    padding?: FourSideSizeSpec
    /** size of view along the value axis */
    size: number
}
