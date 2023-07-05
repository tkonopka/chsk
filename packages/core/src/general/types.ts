import { CSSProperties, ReactNode, RefObject } from 'react'
import { Target } from 'framer-motion'

export type CssProps = Partial<CSSProperties>

export interface SvgElementProps {
    /** class string */
    className?: string
    /** css style */
    style?: CssProps
    /** toggle role attribute in svg code */
    setRole?: boolean
}

export type WithVariant = {
    /** variant */
    variant?: 'default' | string
}

export type SvgElementVariantProps = SvgElementProps & WithVariant

/** unit that determines interpretation of position/size arrays */
export type PositionUnit = 'absolute' | 'relative' | 'view'
export type PositionUnits = PositionUnit | [PositionUnit, PositionUnit]

// position as an array [x, y]
export type PositionSpec = [number | string, number | string]
export type NumericPositionSpec = [number, number]

// a position with an interval [x, y1, y0]
export type NumericPositionIntervalSpec = [number, number, number]

// size as an array [width, height]
export type SizeUnit = 'absolute' | 'relative'
export type SizeUnits = SizeUnit | [SizeUnit, SizeUnit]
export type SizeSpec = [number, number]

// angles
export type AngleUnit = 'degree' | 'radian'

// shifts on a band scale
export type ShiftUnit = 'band' | 'step'

// padding and extensions in all four directions [top, right, bottom, left]
export type FourSideSizeSpec = [number, number, number, number]
// some expansions are only before/after, i.e. two directions
export type TwoSideSizeSpec = [number, number]

// other spec types
export type AlignSpec = [number, number]
export type AnchorSpec = [number, number]
export type SideVariant = 'top' | 'right' | 'left' | 'bottom'

export type DimensionsProviderProps = {
    /** width and height */
    size: SizeSpec
    /** padding */
    padding: FourSideSizeSpec
    /** role */
    role?: string
    /** children */
    children?: ReactNode
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
    /** alignment within the item bounding box */
    itemAlign?: AlignSpec
    /** style for list items */
    itemStyle?: CssProps
    /** list title */
    title?: ReactNode
    /** style for list title */
    titleStyle?: CssProps
    /** arrange the items horizontally */
    horizontal?: boolean
    /** offset/translate first non-title item relative to default position */
    firstOffset?: NumericPositionSpec
}

// containers: e.g. for views, legends, tooltips
export interface ContainerProps {
    /** container position */
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
    /** offset/translation applied after anchoring, absolute units */
    offset?: NumericPositionSpec
}
export interface ContainerThemedProps extends ContainerProps {
    position: PositionSpec
    positionUnits: PositionUnits
    size: SizeSpec
    sizeUnits: SizeUnits
    anchor: AnchorSpec
    padding: FourSideSizeSpec
    offset: NumericPositionSpec
}

// location of an object within a container, e.g. for labels, buttons
export type LocationProps = {
    /** position */
    position?: NumericPositionSpec
    /** size of bounding container */
    size?: SizeSpec
    /** space between container and label */
    padding?: FourSideSizeSpec
    /** position of anchor point relative to box size */
    anchor?: AlignSpec
    /** alignment of content within the bounding container */
    align?: AlignSpec
    /** position offset added after anchoring and alignment */
    offset?: NumericPositionSpec
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

// settings for framer-motion transitions
export interface TransitionSpec {
    type?: 'spring' | 'tween'
    // tween settings
    duration?: number
    delay?: number
    // spring settings
    bounce?: number
    mass?: number
    stiffness?: number
    damping?: number
    // path length
    pathLength?: TransitionSpec
}

// settings for animations
export type AnimationSpec = Target

export type TargetTransformer = (config: Target) => Target

export interface AnimationProps {
    /** transition for animation */
    transition?: TransitionSpec
    /** (adjustment to) initial transition state */
    initial?: Target | TargetTransformer
    /** (adjustment to) target transition state */
    animate?: Target | TargetTransformer
    // (adjustment to) target exit state
    // exit?: Target | TargetTransformer
}
