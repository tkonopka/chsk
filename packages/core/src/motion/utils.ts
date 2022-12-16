import { AnimationSpec, AnimationTransitionSpec, GAnimationProp, GTransitionProp } from './types'
import { motionPresets, transitionPresets } from './presets'

export const getMotionValue = (a: AnimationSpec): undefined | GAnimationProp => {
    if (!a) return undefined
    if (typeof a === 'string') {
        if (a in motionPresets) return motionPresets[a]
        return motionPresets['none']
    }
    return a
}

export const getTransitionValue = (a: AnimationTransitionSpec): undefined | GTransitionProp => {
    if (!a) return undefined
    if (typeof a === 'string') {
        if (a in transitionPresets) return transitionPresets[a]
        return transitionPresets['default']
    }
    return a
}
