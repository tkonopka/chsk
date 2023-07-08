import {
    PositionSpec,
    PositionUnits,
    LineProps,
    PathProps,
    SvgElementVariantProps,
    InteractivityProps,
    AnimationProps,
} from '@chsk/core'

export interface BlockArrowProps
    extends SvgElementVariantProps,
        AnimationProps,
        InteractivityProps {
    /** variant */
    variant?: 'arrow' | 'caret'
    /** start position */
    start: PositionSpec
    /** end position */
    end: PositionSpec
    /** units for start and end positions */
    units?: PositionUnits
    /** toggling arrow heads at the start and end positions */
    heads?: [boolean, boolean]
    /** width/thickness of arrow stem */
    stemWidth?: number
    /** width of arrowhead (orthogonal to arrow axis) */
    headWidth?: number
    /** length of arrowhead (along arrow axis) */
    headLength?: number
}

export interface ArcArrowProps extends Omit<BlockArrowProps, 'variant'> {
    /** handedness of arc curvature */
    variant: 'left' | 'right'
    /** radius of arc */
    r?: number
}

export type FlowAnimationProp = {
    opacity?: number
    pathLength?: { duration?: number; delay?: number }
    fill?: string
    scale?: number
    delay?: number
}

export interface FlowPathProps
    extends Omit<PathProps, 'points' | 'd'>,
        Pick<LineProps, 'markerStart' | 'markerEnd'> {
    /** points along path */
    points: PositionSpec[]
    /** units for points */
    units?: PositionUnits
    /** transition */
    transition?: FlowAnimationProp
}
