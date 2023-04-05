import { SvgElementVariantProps } from '@chsk/core'
import { ReactNode } from 'react'

export interface DownloadProps extends SvgElementVariantProps {
    variant: 'data' | 'image'
    /** filename */
    filename: string
    /** configuration for cleaning svg content */
    cleanSvgConfig?: CleanSvgConfig
    /** children */
    children: ReactNode
}

export interface CleanSvgConfig {
    /** attribute names to exclude from output */
    skipAttributes: string[]
    /** list of roles to exclude from output */
    skipRoles: string[]
    /** attributes to simplify using number rounding */
    roundAttributes: string[]
    /** number of decimal places in coordinates */
    roundAttributeDecimalPlaces: number
    /** include newline characters in output for readability */
    newlineTags: string[]
    /** remove redundant css definitions in styles tag */
    shake: boolean
}
