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

// position as an array [x, y]
export type PositionSpec = [number | string, number | string]
export type NumericPositionSpec = [number, number]

// a position with an interval [x, y1, y0]
export type NumericPositionIntervalSpec = [number, number, number]

// size as an array [width, height]
export type SizeUnit = 'absolute' | 'relative'
export type SizeSpec = [number, number]

// padding and extensions are arrays [top, right, bottom, left]
export type SideSizeSpec = [number, number, number, number]

export type DimensionsProviderBaseProps = {
    /** outer size of the chart */
    size: SizeSpec
    /** padding */
    padding: SideSizeSpec
}

export type DimensionsContextProps = DimensionsProviderBaseProps & {
    /** inner size of chart / view */
    innerSize: SizeSpec
}

export interface SurfaceProps extends SvgElementVariantProps {
    /** variant */
    variant?: 'inner' | 'outer'
    /** expansion of background surface */
    expansion?: SideSizeSpec
}

export type DataItem = Record<string, unknown>
export type AccessorFunction<T> = (item: DataItem) => T

export type LabelLocationSpec = {
    /** space between container and label */
    padding?: SideSizeSpec
    /** alignment for origin of label */
    align?: NumericPositionSpec
    /** style for text */
    style?: CssProps
}
