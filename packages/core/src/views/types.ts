import {
    PositionSpec,
    FourSideSizeSpec,
    SizeSpec,
    NumericPositionSpec,
    AnchorSpec,
    SvgElementProps,
    SvgElementVariantProps,
    PositionUnits,
    SizeUnits,
    RecordWithId,
} from '../general'
import {
    BandScaleProps,
    ColorScaleProps,
    ContinuousScaleProps,
    ScaleProps,
    ScalesContextValue,
    SizeScaleProps,
} from '../scales'
import { ReactNode } from 'react'

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
}
export interface ContainerThemedProps extends ContainerProps {
    position: PositionSpec
    positionUnits: PositionUnits
    size: SizeSpec
    sizeUnits: SizeUnits
    anchor: AnchorSpec
    padding: FourSideSizeSpec
}

export type ViewSeriesKeys = {
    /** prepared map from series ids to integers */
    seriesIndexes: Record<string, number>
    /** array of keys for a view */
    keys: string[]
}

export interface ViewProps extends SvgElementProps {
    /** position and size for bounding container */
    container?: ContainerProps
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
    scaleSize?: SizeScaleProps
    /** children components */
    children?: ReactNode
}

export interface ViewThemedProps
    extends Pick<ViewProps, 'scaleX' | 'scaleY' | 'scaleSize' | 'container' | 'setRole'> {
    scaleX: ScaleProps
    scaleY: ScaleProps
    scaleColor: ColorScaleProps
    scaleSize: SizeScaleProps
    container: ContainerProps
    setRole: boolean
}

export interface BaseViewProps
    extends SvgElementVariantProps,
        Pick<ProcessedDataContextProps, 'seriesIndexes' | 'keys'> {
    /** view position as an array [x, y] */
    position: NumericPositionSpec
    /** view size as an array [width, height] */
    size: SizeSpec
    /** view padding [top, right, bottom, left] **/
    padding: FourSideSizeSpec
    /** original dataset */
    originalData: Array<RecordWithId>
    /** processed dataset */
    processedData: Array<RecordWithId>
    /** scales, scale props, and scale prop update function */
    scalesContextValue: ScalesContextValue
    /** children components */
    children?: ReactNode
}

export interface SurfaceProps extends SvgElementVariantProps {
    /** variant */
    variant?: 'inner' | 'outer' | 'view' | string
    /** expansion of background surface */
    expansion?: FourSideSizeSpec
}

export interface SurfaceThemedProps extends Pick<SurfaceProps, 'expansion'> {
    expansion: FourSideSizeSpec
}
