import { Target } from 'framer-motion'
import { TargetTransformer } from './types'

export const getMotionTarget = (base: Target, update?: Target | TargetTransformer): Target => {
    if (update === undefined) return base
    if (typeof update === 'function') return update(base)
    return { ...base, ...update }
}
