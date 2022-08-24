import { randomNormalValue } from '../utils'
import { roundDecimalPlaces, WithId } from '@chask/core'

// generate a matrix with numbers from normal distribution
// (includes parameter autocor that creates an auto-correlation between adjacent values)
export const generateHeatMapMatrixNormal = (
    ids: string[],
    keys: string[],
    mean: number = 0,
    sd: number = 1,
    autocor: number = 0.5
) => {
    return ids.map((id, i) => {
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
    min: number = 0,
    max: number = 100,
    autocor: number = 0.5
) => {
    const size = max - min
    return ids.map((id, i) => {
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
