import { roundDecimalPlaces, WithId } from '@chsk/core'

// generate an array of records suitable for a Bar chart
export const generateBarData = ({
    ids,
    keys,
    interval,
}: {
    ids: string[]
    keys: string[]
    interval: [number, number]
}) => {
    const result = ids.map(id => {
        const series: WithId & Record<string, number | string> = { id: id }
        return generateKeyValues(series, keys, interval)
    })
    return result
}

// add key-value pairs with random values into an existing object
export const generateKeyValues = (
    obj: WithId & Record<string, number | string>,
    keys: string[],
    interval: [number, number]
): WithId & Record<string, number | string> => {
    const intervalSize = interval[1] - interval[0]
    keys.forEach(k => {
        obj[k] = Math.round(interval[0] + Math.random() * intervalSize)
    })
    return obj
}

export const generateSortedValues = (n: number, interval: [number, number], dp = 0): number[] => {
    const size = interval[1] - interval[0]
    return Array(n)
        .fill(0)
        .map(() => interval[0] + size * Math.random())
        .map(v => roundDecimalPlaces(v, dp))
        .sort((a, b) => b - a)
}
