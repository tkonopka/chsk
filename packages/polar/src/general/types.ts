import { ReactNode } from 'react'
import { NumericPositionSpec, SvgElementVariantProps, TypographyProps } from '@chsk/core'

export type R = 0
export type THETA = 1

export interface OriginProps extends SvgElementVariantProps {
    children?: ReactNode
}

export interface PolarTypographyProps extends Omit<TypographyProps, 'variant' | 'position'> {
    /** variant */
    variant?: 'default' | 'polar-label' | string
    /** position in polar coordinates [r, theta (degrees)] */
    position?: NumericPositionSpec
    /** flag, orient text radially */
    radial?: boolean
    /** flag, orient text tangentially */
    tangential?: boolean
}
