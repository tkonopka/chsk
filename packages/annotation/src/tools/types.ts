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
    skipAttributeNames: string[]
    /** list of roles to exclude from output */
    skipRoles: string[]
    /** attributes to simplify using number rounding */
    roundAttributeNames: string[]
    /** number of decimal places in coordinates */
    roundAttributeDecimalPlaces: number
    /** include newline characters in output for readability */
    newlineAfterTags: string[]
    /** remove redundant css definitions in styles tag */
    shakeStyles: boolean
}
