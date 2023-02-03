import { motionPresets, transitionPresets } from './presets'
import { AnimationSpec, AnimationTransitionSpec, GAnimationProp, GTransitionProp } from './types'
import { isNull, isUndefined } from 'lodash'

export const getMotionValue = (a: AnimationSpec): undefined | GAnimationProp => {
    if (isUndefined(a) || isNull(a)) return undefined
    if (typeof a === 'string') {
        if (a in motionPresets) return motionPresets[a]
        return motionPresets['none']
    }
    return a as GAnimationProp
}

export const getTransitionValue = (a: AnimationTransitionSpec): undefined | GTransitionProp => {
    if (isUndefined(a) || isNull(a)) return undefined
    if (typeof a === 'string') {
        if (a in transitionPresets) return transitionPresets[a]
        return transitionPresets['default']
    }
    return a as GTransitionProp
}
