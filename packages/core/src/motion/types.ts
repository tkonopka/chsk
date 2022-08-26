import { ReactNode } from 'react'
import { motionPresets } from './presets'

export interface OpacityMotionProps {
    /** role string */
    role: string
    /** flag to indicate first render */
    firstRender: boolean
    /** children components */
    children: ReactNode
}

export type GAnimationProp = {
    opacity?: number
    x?: number
    y?: number
    fill?: string
    scale?: number
}
export type AnimationSpec = undefined | null | keyof typeof motionPresets | GAnimationProp

export interface MilestoneMotionProps {
    /** role string */
    role?: string
    /** initial animation settings */
    initial?: AnimationSpec
    /** milestone on which to initialize animation */
    initialOn?: string
    /** exit animation settings */
    exit?: AnimationSpec
    /** milestone on which to activate exit animation */
    exitOn?: string
    /** children components */
    children: ReactNode
    /** base animation setting */
    animate?: AnimationSpec
    /** default visibility setting */
    visible?: boolean
}
