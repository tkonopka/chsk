import { GridLinesProps } from '@chsk/core'

export interface GridStripesProps extends GridLinesProps {
    /** toggle intervals used for stripes */
    parity?: 'even' | 'odd'
}
