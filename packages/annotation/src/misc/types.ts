import { GridLinesProps, LineProps } from '@chsk/core'

export interface GridStripesProps extends GridLinesProps {
    /** toggle intervals used for stripes */
    parity?: 'even' | 'odd'
}

export interface ConnectorProps extends LineProps {
    /** variant */
    variant: 'line' | 'arc-left' | 'arc-right' | 'h-start' | 'h-end' | 'v-start' | 'v-end'
    /** x radius for arc-based connector */
    rx?: number
    /** x radius for arc-based connector */
    ry?: number
    /** angle of rotation for arc-based connector */
    angle?: number
    /** position of elbow in segmented lines */
    elbow?: number
    /** unit for elbow position */
    elbowUnit?: 'absolute' | 'relative'
}
