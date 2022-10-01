import { ReactNode } from 'react'
import { motionPresets, transitionPresets } from './presets'

export type WithInteractive = {
    /** activate interactive features */
    interactive?: boolean
}

export interface OpacityMotionProps {
    /** role string */
    role: string
    /** flag to indicate first render */
    firstRender: boolean
    /** flag to indicate visibility, used for exit animation */
    visible?: boolean
    /** children components */
    children: ReactNode
}

/** settings for framer's 'transition' */
export type GTransitionProp = {
    duration?: number
    delay?: number
    stiffness?: number
}

/** selected settings for animating 'g' elements */
export type GAnimationProp = {
    opacity?: number
    x?: number
    y?: number
    fill?: string
    scale?: number
}
export type AnimationSpec = undefined | null | keyof typeof motionPresets | GAnimationProp
export type AnimationTransitionSpec =
    | undefined
    | null
    | keyof typeof transitionPresets
    | GTransitionProp

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
    /** transition settings */
    transition?: AnimationTransitionSpec
    /** default visibility setting */
    visible?: boolean
}
