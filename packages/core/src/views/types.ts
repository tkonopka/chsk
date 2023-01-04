import {
    PositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    NumericPositionSpec,
    SvgElementVariantProps,
    PositionUnits,
    SizeUnits,
} from '../general'
import {
    BandScaleProps,
    ColorScaleProps,
    ContinuousScaleProps,
    ScaleProps,
    ScalesContextProps,
} from '../scales'
import { ReactNode } from 'react'

export type WithId = {
    /** identifier string */
    id: string
}

export type RecordWithId = WithId & Record<string, unknown>
export type RawData = Array<RecordWithId>

export type RawDataContextProps = {
    /** data */
    data: RawData
}

export type ProcessedDataContextProps = {
    /** data */
    data: Array<RecordWithId>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
}

/** alignment values in [0, 1] for x and y axes */
export type AnchorSpec = [number, number]

export interface ContainerProps {
    /** container position as an array [x, y] */
    position?: PositionSpec
    /** absolute or relative units for position */
    positionUnits?: PositionUnits
    /** container size as an array [width, height] */
    size?: SizeSpec
    /** absolute or relative units for position and size measurements */
    sizeUnits?: SizeUnits
    /** container anchor point */
    anchor?: AnchorSpec
    /** padding (absolute values) **/
    padding?: FourSideSizeSpec
    /** children components */
    children?: ReactNode
}

export type ViewSeriesKeys = {
    /** prepared map from series ids to integers */
    seriesIndexes: Record<string, number>
    /** array of keys for a view */
    keys: string[]
}

export interface ViewProps extends ContainerProps {
    /** variant of view */
    variant?: 'default' | string
    /** data array **/
    data?: RawData | ViewSeriesKeys
    /** automatically adjust scales if/when data subsets become disabled */
    autoRescale?: boolean
    /** scale for horizontal axis */
    scaleX?: Omit<ContinuousScaleProps, 'size'> | Omit<BandScaleProps, 'size'>
    /** scale for vertical axis */
    scaleY?: Omit<ContinuousScaleProps, 'size'> | Omit<BandScaleProps, 'size'>
    /** scale for color */
    scaleColor?: ColorScaleProps
    /** scale for size */
    scaleSize?: ContinuousScaleProps
}

export interface ViewThemedProps
    extends Pick<
        ViewProps,
        | 'scaleX'
        | 'scaleY'
        | 'scaleSize'
        | 'position'
        | 'positionUnits'
        | 'anchor'
        | 'size'
        | 'sizeUnits'
        | 'padding'
    > {
    scaleX: ScaleProps
    scaleY: ScaleProps
    scaleColor: ColorScaleProps
    scaleSize: ContinuousScaleProps
    sizeUnits: SizeUnits
    position: NumericPositionSpec
    positionUnits: PositionUnits
    anchor: NumericPositionSpec
    size: SizeSpec
    padding: FourSideSizeSpec
}

export interface BaseViewProps extends Pick<ProcessedDataContextProps, 'seriesIndexes' | 'keys'> {
    /** position as an array [x, y] */
    position: NumericPositionSpec
    /** size as an array [width, height] */
    size: SizeSpec
    /** padding (absolute values) **/
    padding: FourSideSizeSpec
    /** original dataset */
    originalData: Array<RecordWithId>
    /** processed dataset */
    processedData: Array<RecordWithId>
    /** scales */
    scales: ScalesContextProps
    /** role */
    role: string
    /** children components */
    children?: ReactNode
}

export interface SurfaceProps extends SvgElementVariantProps {
    /** variant */
    variant?: 'inner' | 'outer'
    /** expansion of background surface */
    expansion?: FourSideSizeSpec
}
