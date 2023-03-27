import { AnimationSpec, TransitionSpec } from './types'
import { isNull, isUndefined } from 'lodash'
import { ThemeSpec, TransitionProps, AnimationProps } from '../themes'

export const getAnimationValue = (
    a: AnimationSpec,
    theme: ThemeSpec
): undefined | AnimationProps => {
    if (isUndefined(a) || isNull(a)) return undefined
    if (typeof a === 'string') return theme.Animation?.[a]
    return a as AnimationProps
}

export const getTransitionValue = (
    a: TransitionSpec,
    theme: ThemeSpec
): undefined | TransitionProps => {
    if (isUndefined(a) || isNull(a)) return undefined
    if (typeof a === 'string') return theme.Motion?.[a]
    return a as TransitionProps
}
