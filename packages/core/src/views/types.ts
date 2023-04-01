import {
    FourSideSizeSpec,
    SizeSpec,
    NumericPositionSpec,
    SvgElementProps,
    SvgElementVariantProps,
    RecordWithId,
    ItemListProps,
    AlignSpec,
    ContainerProps,
    CssProps,
} from '../general'
import {
    AxisScaleProps,
    BandScaleProps,
    ColorScaleProps,
    ContinuousScaleProps,
    ScalesContextValue,
    SizeScaleProps,
} from '../scales'
import { FC, ReactNode } from 'react'
import { ButtonProps, DataInteractivityModifiers } from '../interactivity'

/** datasets associated with views */

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

/** View components */

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
    scaleX: AxisScaleProps
    scaleY: AxisScaleProps
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
    variant?: 'inner' | 'outer' | string
    /** expansion of background surface */
    expansion?: FourSideSizeSpec
}

export interface SurfaceThemedProps extends Pick<SurfaceProps, 'expansion'> {
    expansion: FourSideSizeSpec
}

/** View interactions */

export type ViewControllerMode = 'none' | 'pan' | 'zoom' | 'zoom-in' | 'zoom-out' | 'reset'

export interface ViewControllerProps
    extends SvgElementProps,
        Pick<ItemListProps, 'itemSize' | 'itemPadding' | 'itemStyle' | 'horizontal'> {
    /** variant of view */
    variant?: 'x' | 'y' | 'xy'
    /** buttons to display in toolbar */
    buttons?: ViewControllerMode[]
    /** zoomFactor */
    zoomFactor?: number
    /** initial state */
    mode?: ViewControllerMode
    /** position and size for toolbar */
    container?: ContainerProps
    /** alignment of content within the toolbar */
    itemAlign?: AlignSpec
    /** component displaying a button */
    component?: FC<ButtonProps>
    /** style modifiers */
    modifiers?: DataInteractivityModifiers
    /** style for selection rectangle */
    selectionStyle?: CssProps
}
