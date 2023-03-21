import { ReactNode } from 'react'
import { AngleUnit, NumericPositionSpec, SvgElementVariantProps } from '@chsk/core'

export interface OriginProps extends SvgElementVariantProps {
    children?: ReactNode
}

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
