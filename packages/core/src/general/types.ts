import { CSSProperties } from 'react'

export interface SvgElementVariantBaseProps {
    /** variant */
    variant?: 'default' | string
    /** class string */
    className?: string
    /** determines if a role is included in the svg source */
    setRole?: boolean
    /** css style */
    style?: Partial<CSSProperties>
}

export type MarginSpec = {
    top: number
    bottom: number
    left: number
    right: number
}
// just a different name
export type PaddingSpec = MarginSpec

export type DimensionsContextProps = {
    /** outer width of the chart */
    width: number
    /** outer height of the chart */
    height: number
    /** padding */
    padding: PaddingSpec
    /** inner width of the chart */
    innerWidth: number
    /** outer height of the chart */
    innerHeight: number
}

export interface SurfaceProps extends SvgElementVariantBaseProps {
    /** variant */
    variant?: 'inner' | 'outer'
    /** x coordinate of top-left surface corner */
    x: number
    /** y coordinate of top-left surface corner */
    y: number
    /** width */
    width: number
    /** height */
    height: number
}

export interface BackgroundSurfaceProps extends SvgElementVariantBaseProps {
    /** variant */
    variant?: 'inner' | 'outer'
    /** expansion of background surface */
    expansion?: MarginSpec
}
