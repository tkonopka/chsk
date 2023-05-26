import { AnimationSpec, TransitionSpec } from './types'
import { ThemeSpec, TransitionProps, AnimationProps } from '../themes'

const isNullOrUndefined = (x: AnimationSpec | TransitionProps) => x === null || x === undefined

export const getAnimationValue = (
    a: AnimationSpec,
    theme: ThemeSpec
): undefined | AnimationProps => {
    if (isNullOrUndefined(a)) return undefined
    if (typeof a === 'string') return theme.Animation?.[a]
    return a as AnimationProps
}

export const getTransitionValue = (
    a: TransitionSpec,
    theme: ThemeSpec
): undefined | TransitionProps => {
    if (isNullOrUndefined(a)) return undefined
    if (typeof a === 'string') return theme.Motion?.[a]
    return a as TransitionProps
}
