/**
 * shorthand general-purpose predicate functions
 */

export const isArray = Array.isArray

export const isString = (x: unknown): x is string => typeof x === 'string'

export const isNumber = (x: unknown): x is number => typeof x === 'number'
