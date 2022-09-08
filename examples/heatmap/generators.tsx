import { randomNormalValue } from '../utils'
import { roundDecimalPlaces, WithId } from '@chask/core'

// generate a matrix with numbers from normal distribution
// (includes parameter autocor that creates an auto-correlation between adjacent values)
export const generateHeatMapMatrixNormal = (
    ids: string[],
    keys: string[],
    mean = 0,
    sd = 1,
    autocor = 0.5
) => {
    return ids.map(id => {
        const item: WithId & Record<string, number | string> = { id }
        let temp = 0
        keys.map(k => {
            const value = (randomNormalValue(mean, sd) + autocor * temp) / (1 + autocor)
            item[k] = roundDecimalPlaces(value, 4)
            temp = value
        })
        return item
    })
}

// generate a matrix with numbers from a uniform interval
// (includes parameter autocor that creates an auto-correlation between adjacent values)
export const generateHeatMapMatrixUniform = (
    ids: string[],
    keys: string[],
    min = 0,
    max = 100,
    autocor = 0.5
) => {
    const size = max - min
    return ids.map(id => {
        const item: WithId & Record<string, number | string> = { id }
        let temp = 0
        keys.map(k => {
            const value = (min + Math.random() * size + autocor * temp) / (1 + autocor)
            item[k] = roundDecimalPlaces(value, 4)
            temp = value
        })
        return item
    })
}

// create one object with an id
export const generateHeatMapRowCategorical = (
    id: string,
    keys: string[],
    categories: string[],
    sorted = true
) => {
    const nCats = categories.length
    const randomCats = Array(keys.length)
        .fill(0)
        .map(() => categories[Math.floor(Math.random() * nCats)])
    if (sorted) randomCats.sort()
    const result: WithId & Record<string, string | number> = { id }
    keys.forEach((k, i) => (result[k] = randomCats[i]))
    return result
}
