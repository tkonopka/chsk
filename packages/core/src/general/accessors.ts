import { AccessorFunction, DataItem } from './types'

export const getAccessor = <T>(k: string | AccessorFunction<T>): AccessorFunction<T> => {
    if (typeof k === 'string') {
        return (item: DataItem) => item[k] as T
    }
    return (item: DataItem) => k(item) as T
}

export const getNumberAccessor = (
    k: number | string | AccessorFunction<number>
): AccessorFunction<number> => {
    if (typeof k === 'string') {
        return (item: DataItem) => Number(item[k])
    }
    if (typeof k === 'number') {
        return () => Number(k)
    }
    return (item: DataItem) => Number(k(item))
}
