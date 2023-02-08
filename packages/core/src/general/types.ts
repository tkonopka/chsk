import { CSSProperties, RefObject } from 'react'

export type CssProps = Partial<CSSProperties>

export interface SvgElementProps {
    /** class string */
    className?: string
    /** css style */
    style?: CssProps
    /** include role attribute in the svg source */
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
