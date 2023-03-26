import { AnimationSpec, AnimationTransitionSpec } from './types'
import { isNull, isUndefined } from 'lodash'
import { GAnimationProps, GTransitionProps, ThemeSpec } from '../themes'

export const getMotionValue = (a: AnimationSpec, theme: ThemeSpec): undefined | GAnimationProps => {
    if (isUndefined(a) || isNull(a)) return undefined
    if (typeof a === 'string') return theme.Animation?.[a]
    return a as GAnimationProps
}

export const getTransitionValue = (
    a: AnimationTransitionSpec,
    theme: ThemeSpec
): undefined | GTransitionProps => {
    if (isUndefined(a) || isNull(a)) return undefined
    if (typeof a === 'string') return theme.Transition?.[a]
    return a as GTransitionProps
}
