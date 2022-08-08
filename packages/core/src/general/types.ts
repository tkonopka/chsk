import { CSSProperties } from 'react'

export type CssProps = Partial<CSSProperties>

export interface SvgElementProps {
    /** key */
    key?: string | number
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

// position as an array [x, y]
export type PositionSpec = [number, number]

// size as an array [width, height]
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
    /** x coordinate of top-left surface corner */
    x: number
    /** y coordinate of top-left surface corner */
    y: number
    /** width and height */
    size: SizeSpec
}

export interface BackgroundSurfaceProps extends SvgElementVariantProps {
    /** variant */
    variant?: 'inner' | 'outer'
    /** expansion of background surface */
    expansion?: SideSizeSpec
}
