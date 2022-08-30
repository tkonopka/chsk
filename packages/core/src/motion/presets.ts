import { GAnimationProp, GTransitionProp } from './types'

// presets for animations
export const motionPresets: Record<string, GAnimationProp> = {
    none: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
    },
    hidden: {
        opacity: 0,
    },
    invisible: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    halfSize: {
        scale: 0.5,
        opacity: 0,
    },
    doubleSize: {
        scale: 2,
        opacity: 0,
    },
}

export const transitionPresets: Record<string, GTransitionProp> = {
    default: {
        delay: 0,
    },
}
