import { GridLinesProps, LineProps } from '@chsk/core'

export interface GridStripesProps extends GridLinesProps {
    /** toggle intervals used for stripes */
    parity?: 'even' | 'odd'
}

export interface ConnectorProps extends LineProps {
    /** variant */
    variant: 'line' | 'hl' | 'lh' | 'vl' | 'lv'
    /** smoothing parameter */
    beta?: number
    /** position of elbow in segmented lines */
    elbow?: number
    /** unit for elbow position */
    elbowUnit?: 'absolute' | 'relative'
}
