import { SvgElementVariantBaseProps } from '../common'

export type MarginSpec = {
    top: number
    bottom: number
    left: number
    right: number
}

export type DimensionsContextProps = {
    /** outer width of the chart */
    width: number
    /** outer height of the chart */
    height: number
    /** margin */
    margin: MarginSpec
    /** inner width of the chart */
    innerWidth: number
    /** outer height of the chart */
    innerHeight: number
}

export interface SurfaceProps extends SvgElementVariantBaseProps {
    /** variant */
    variant: 'inner' | 'outer'
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
    variant: 'inner' | 'outer'
    /** expansion of background surface */
    expansion?: MarginSpec
}
