import { randomNormalValue } from '../utils'

// create an array of values from superposed normal distributions
export const generateMixedPopulation = (n: number[], mean: number[], sd: number[]) => {
    const result: number[][] = []
    n.forEach((size, i) => {
        const values: number[] = Array(size)
            .fill(0)
            .map(v => randomNormalValue(mean[i], sd[i]))
        result.push(values)
    })
    return result.flat()
}

export const makeBreaks = (interval: [number, number], step: number) => {
    let x = interval[0]
    const result = []
    while (x < interval[1]) {
        result.push(x)
        x += step
    }
    return result
}
