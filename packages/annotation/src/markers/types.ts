import { CssProps } from '@chsk/core'

interface BaseMarkerProps {
    /** identifier */
    id: string
    /** marker size */
    size?: number
    /** style for marker path */
    style?: CssProps
}

export interface ArrowMarkerProps extends BaseMarkerProps {
    /** variant of arrowhead */
    variant: 'Triangle' | 'Chevron' | 'Winged'
    /** numeric parameter [0, 1] to control width of arrowhead */
    width?: number
}

export interface BluntMarkerProps extends BaseMarkerProps {
    /** variant of arrowhead */
    variant: 'Circle' | 'Square' | 'Diamond'
}
