import { CssProps, NumericPositionSpec } from '../general'

export interface ArrowMarkerProps {
    /** variant of arrowhead */
    variant: 'Triangle' | 'Chevron' | 'Winged'
    /** identifier used to apply the marker to lines */
    id: string
    /** length of arrowhead */
    size?: number
    /** numeric parameter [0, 1] to control width of arrowhead */
    width?: number
    /** style for path */
    style?: CssProps
}

export interface LinearGradientProps {
    /** identifier for the gradient */
    id: string
    /** start position */
    start: NumericPositionSpec
    /** end position */
    end: NumericPositionSpec
    /** color stops */
    stops: string[]
    /** offsets for color stops */
    offsets?: number[]
}
