import { FourSideSizeSpec, WithId } from '@chsk/core'

export type FloodProps = {
    floodColor?: string
    floodOpacity?: number
}

export interface InsetColorFilterProps extends WithId, FloodProps {
    erodeR?: number
}

export interface InsetBorderFilterProps extends InsetColorFilterProps {
    erodeR?: number
    r?: number
}

export interface InsetShadowFilterProps extends WithId, FloodProps {
    blurStdDeviation?: number
}

export interface BackgroundColorFilterProps extends WithId, FloodProps {
    expansion?: FourSideSizeSpec
}

export interface BlurFilterProps extends WithId {
    blurStdDeviation?: number
}
