import { SvgElementVariantBaseProps, CssProps, SideType } from '@chask/core'
import { ReactNode } from 'react'

export interface BoxedLabelProps extends SvgElementVariantBaseProps {
    /** identifier for the chart */
    variant: SideType
    /** distance from axis */
    offset?: number
    /** size of the box (height for a horizontal label, width for vertical label) */
    size?: number
    /** extent of the box (width for a horizontal label, height for horizontal label) */
    extent?: number
    /** expansion of span of the box */
    expansion?: number
    /** horizontal radius of box */
    rx?: number
    /** vertical radius of box */
    ry?: number
    /** style for box */
    boxStyle?: CssProps
    /** style for text */
    textStyle?: CssProps
    /** children */
    children?: string | ReactNode
}
