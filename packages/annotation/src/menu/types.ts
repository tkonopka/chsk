import { SvgElementVariantProps } from '@chask/core'
import { ReactNode } from 'react'

export interface DownloadProps extends SvgElementVariantProps {
    variant: 'data' | 'image'
    /** filename */
    filename: string
    /** children */
    children: ReactNode
}
