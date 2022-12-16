import { PositionSpec, PositionUnits, LineProps, PathProps } from '@chsk/core'

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
