import { CSSProperties, RefObject } from 'react'

export type CssProps = Partial<CSSProperties>

export interface SvgElementProps {
    /** class string */
    className?: string
    /** css style */
    style?: CssProps
    /** toggle role attribute in svg code */
    setRole?: boolean
}

export interface SvgElementVariantProps extends SvgElementProps {
    /** variant */
    variant?: 'default' | string
}

/** unit that determines interpretation of position/size arrays */
export type PositionUnit = 'absolute' | 'relative' | 'view'
export type PositionUnits = PositionUnit | [PositionUnit, PositionUnit]

// position as an array [x, y]
export type PositionSpec = [number | string, number | string]
export type NumericPositionSpec = [number, number]
export type XY = NumericPositionSpec

// a position with an interval [x, y1, y0]
export type NumericPositionIntervalSpec = [number, number, number]

// size as an array [width, height]
export type SizeUnit = 'absolute' | 'relative'
export type SizeUnits = SizeUnit | [SizeUnit, SizeUnit]
export type SizeSpec = [number, number]

// angles
export type AngleUnit = 'degree' | 'radian'

// padding and extensions in all four directions [top, right, bottom, left]
export type FourSideSizeSpec = [number, number, number, number]
// some expansions are only before/after, i.e. two directions
export type TwoSideSizeSpec = [number, number]

// other spec types
export type AlignSpec = [number, number]
export type TranslateSpec = [number, number]
export type AnchorSpec = [number, number]
export type SideVariant = 'top' | 'right' | 'left' | 'bottom'

export type DimensionsProviderProps = {
    /** width and height */
    size: SizeSpec
    /** padding */
    padding: FourSideSizeSpec
    /** role */
    role?: string
}

export type DimensionsContextProps = Pick<DimensionsProviderProps, 'size'> & {
    /** ref to element that can provide client coordinates */
    ref: RefObject<SVGSVGElement>
    /** margin */
    margin: FourSideSizeSpec
}

export type DataItem = Record<string, unknown>
export type AccessorFunction<T> = (item: DataItem) => T

export type WithId = {
    /** identifier string */
    id: string
}
export type RecordWithId = WithId & Record<string, unknown>

// lists, e.g. for legends, tooltips
export interface ItemListProps {
    /** size of a single item */
    itemSize?: SizeSpec
    /** padding for a single item */
    itemPadding?: FourSideSizeSpec
    /** style for list items */
    itemStyle?: CssProps
    /** list title */
    title?: string
    /** style for list title */
    titleStyle?: CssProps
    /** arrange the items horizontally */
    horizontal?: boolean
    /** offset/translate first non-title item relative to default position */
    firstOffset?: NumericPositionSpec
}

// containers: e.g. for views, legends, tooltips
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

// fine-tuning location within a container, e.g. for labels, buttons
export type LocationProps = {
    /** position as an array [x, y] */
    position?: NumericPositionSpec
    /** size of bounding container */
    size?: SizeSpec
    /** space between container and label */
    padding?: FourSideSizeSpec
    /** position of anchor point relative to box size */
    anchor?: AlignSpec
    /** alignment of label within its bounding container */
    align?: AlignSpec
}

// rectangular region
export type RegionProps = {
    /** x coordinate */
    x: number
    /** y coordinate */
    y: number
    /** width */
    width: number
    /** height */
    height: number
}
