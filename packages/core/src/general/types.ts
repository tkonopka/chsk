import { CSSProperties } from 'react'

export type CssProps = Partial<CSSProperties>

export interface SvgElementVariantBaseProps {
    /** variant */
    variant?: 'default' | string
    /** class string */
    className?: string
    /** determines if a role is included in the svg source */
    setRole?: boolean
    /** css style */
    style?: CssProps
}

// size is an array [ width, height]
export type SizeSpec = [number, number]

// padding and extensions are arrays [top, right, bottom, left]
export type PaddingSpec = [number, number, number, number]
export type ExpansionSpec = PaddingSpec

export type DimensionsContextProps = {
    /** outer size of the chart */
    size: SizeSpec
    /** padding */
    padding: PaddingSpec
    /** inner size of chart / view */
    innerSize: SizeSpec
}

export interface SurfaceProps extends SvgElementVariantBaseProps {
    /** variant */
    variant?: 'inner' | 'outer'
    /** x coordinate of top-left surface corner */
    x: number
    /** y coordinate of top-left surface corner */
    y: number
    /** width and height */
    size: SizeSpec
}

export interface BackgroundSurfaceProps extends SvgElementVariantBaseProps {
    /** variant */
    variant?: 'inner' | 'outer'
    /** expansion of background surface */
    expansion?: ExpansionSpec
}
