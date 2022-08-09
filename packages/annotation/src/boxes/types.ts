import {
    SvgElementProps,
    CssProps,
    ContainerProps,
    SvgElementVariantProps,
    SideType,
    SideSizeSpec,
} from '@chask/core'
import { ReactNode } from 'react'

interface BoxedTextProps {
    /** expansion of box size */
    expansion?: SideSizeSpec
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

export interface BoxedLabelProps extends SvgElementProps, ContainerProps, BoxedTextProps {
    /** position of center of label */
    position: [number, number]
    /** additional translation */
    translate?: [number, number]
    /** anchor */
    anchor?: [number, number]
    /** rotation */
    rotate?: number
}

export interface BoxedTitleProps extends SvgElementVariantProps, BoxedTextProps {
    /** variant, side of the chart */
    variant: SideType
    /** size of box orthogonal to axis */
    size?: number
    /** distance from axis */
    offset?: number
}
