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
    skipAttributeNames: string[]
    roundAttributeNames: string[]
    roundAttributeDecimalPlaces: number
    newlineAfterTags: string[]
}
