import { FC, ReactNode } from 'react'
import {
    FourSideSizeSpec,
    NumericPositionSpec,
    SvgElementProps,
    SvgElementVariantProps,
    RecordWithId,
    ItemListProps,
    AlignSpec,
    ContainerProps,
    CssProps,
    DimensionsProviderProps,
    SizeSpec,
} from '../general'
import {
    AxisScaleProps,
    BandScaleProps,
    ColorScaleProps,
    ContinuousScaleProps,
    ScalesContextValue,
    SizeScaleProps,
} from '../scales'
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

export type PreparedDataContextProps<T> = ProcessedDataContextProps & {
    /** data */
    data: Array<T>
}

/** View components */

export type ViewSeriesKeys = {
    /** prepared map from series ids to integers */
    seriesIndexes: Record<string, number>
    /** array of keys for a view */
    keys: string[]
}

export interface ViewProps extends SvgElementProps, Pick<DimensionsProviderProps, 'children'> {
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
        Omit<DimensionsProviderProps, 'role'>,
        Pick<ProcessedDataContextProps, 'seriesIndexes' | 'keys'> {
    /** view position as an array [x, y] */
    position: NumericPositionSpec
    /** original dataset */
    originalData: Array<RecordWithId>
    /** processed dataset */
    processedData: Array<RecordWithId>
    /** scales, scale props, and scale prop update function */
    scalesContextValue: ScalesContextValue
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

export interface ViewClipProps
    extends Pick<DimensionsProviderProps, 'children'>,
        Pick<SurfaceProps, 'expansion' | 'variant'> {
    /** variant */
    variant?: 'default' | string
    /** id for clip path */
    id: string
}
export interface ViewClipThemedProps extends Pick<ViewClipProps, 'expansion'> {
    expansion: FourSideSizeSpec
}

/** View interactions */

export type ViewControllerValue = 'none' | 'pan' | 'zoom' | 'zoom-in' | 'zoom-out' | 'reset'

export interface ViewControllerProps
    extends SvgElementProps,
        Pick<ItemListProps, 'itemSize' | 'itemPadding' | 'itemStyle' | 'horizontal'> {
    /** variant of view */
    variant?: 'x' | 'y' | 'xy'
    /** buttons to display in toolbar */
    values?: ViewControllerValue[]
    /** zoomFactor */
    zoomFactor?: number
    /** initial selected state */
    value?: ViewControllerValue
    /** position and size for toolbar */
    container?: ContainerProps
    /** alignment of content within the toolbar */
    itemAlign?: AlignSpec
    /** component displaying a button */
    component?: FC<ButtonProps>
    /** style modifiers */
    modifiers?: DataInteractivityModifiers
    /** style for selection rectangle */
    boxStyle?: CssProps
}

/** Grids */

type GridVariant = 'horizontal' | 'vertical'

export interface GridContextProps {
    /** size of grid as [rows, columns] */
    grid: SizeSpec
    /** variant */
    variant: GridVariant
    /** sizes of all grid items */
    sizes: SizeSpec[]
    /** positions of all grid items */
    positions: NumericPositionSpec[]
}

export interface GridProps extends SvgElementVariantProps {
    /** variant, order of grid items in grid */
    variant?: GridVariant
    /** location of grid */
    container?: ContainerProps
    /** size of grid as [columns, rows] */
    grid?: SizeSpec
    /** spacing between rows and columns */
    spacing?: SizeSpec
    /** relative widths of columns */
    widths?: number[]
    /** relative heights of columns */
    heights?: number[]
    /** children */
    children?: ReactNode
}

export interface GridItemProps extends SvgElementProps {
    /** position of item in grid as [column, row] */
    position?: NumericPositionSpec
    /** location of item in grid (overrides position) */
    index?: NumericPositionSpec | number
    /** children */
    children?: ReactNode
}
