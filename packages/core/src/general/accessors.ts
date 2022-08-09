import { AccessorFunction, DataItem } from './types'

export const getAccessor = <T>(k: string | AccessorFunction<T>): AccessorFunction<T> => {
    if (typeof k === 'string') {
        return (item: DataItem) => item[k] as T
    }
    return (item: DataItem) => k(item) as T
}
