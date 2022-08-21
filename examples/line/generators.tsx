import { randomNormalValue } from '../utils'

// produce a random walk with n steps
export const generateRandomWalk = (n: number, mean: number = 0, sd: number = 1) => {
    let y = 0
    const result = [{ x: 0, y }]
    Array(n)
        .fill(0)
        .forEach((v, i) => {
            if (i === 0) return
            y += randomNormalValue(mean, sd)
            result.push({ x: i, y })
        })
    return result
}
