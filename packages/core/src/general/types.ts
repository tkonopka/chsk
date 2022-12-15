import { CSSProperties } from 'react'

export type CssProps = Partial<CSSProperties>

export interface SvgElementProps {
    /** class string */
    className?: string
    /** determines if a role is included in the svg source */
    setRole?: boolean
    /** css style */
    style?: CssProps
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

export type DimensionsProviderBaseProps = {
    /** outer size of the chart */
    size: SizeSpec
    /** padding */
    padding: FourSideSizeSpec
}

export type DimensionsContextProps = DimensionsProviderBaseProps & {
    /** inner size of chart / view */
    innerSize: SizeSpec
}

export type DataItem = Record<string, unknown>
export type AccessorFunction<T> = (item: DataItem) => T
