import { WithId } from '@chsk/core'

export type FloodProps = {
    floodColor?: string
    floodOpacity?: number
}

export interface FilterInsetColorProps extends WithId, FloodProps {
    erodeR?: number
}

export interface FilterInsetBorderProps extends FilterInsetColorProps {
    erodeR?: number
    r?: number
}

export interface FilterInsetShadowProps extends WithId, FloodProps {
    blurStdDeviation?: number
}
