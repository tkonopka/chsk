import { CSSProperties } from 'react'

export interface SvgElementVariantBaseProps {
    /** variant */
    variant?: 'default' | string
    /** class string */
    className?: string
    /** determines if a role is included in the definition */
    setRole?: boolean
    /** css style */
    style?: Partial<CSSProperties>
}
