import { ReactNode } from 'react'
import { AngleUnit, NumericPositionSpec, SvgElementProps, SvgElementVariantProps } from '@chsk/core'

export interface OriginProps extends SvgElementProps {
    children?: ReactNode
}

// PolarItem is a grouping element like svg 'g'
// It contains a 'variant' prop for consistency with Typography and Label
export interface PolarItemProps extends Omit<SvgElementVariantProps, 'className' | 'style'> {
    /** position in polar coordinates [radius, angle] */
    position?: NumericPositionSpec
    /** angle units */
    angleUnit?: AngleUnit
    /** flag, orient text radially */
    radial?: boolean
    /** flag, orient text tangentially */
    tangential?: boolean
    /** children */
    children?: ReactNode
}
