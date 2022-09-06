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

// produce a set of points that will trace a probability density function from a normal distribution
export const generateNormalPdf = (
    mean: number,
    sd: number,
    interval: [number, number],
    step: number,
    min = 1e-4
) => {
    const norm = 1 / (sd * Math.sqrt(2 * Math.PI))
    const value = (x: number) => {
        const z = (x - mean) / sd
        return norm * Math.exp(-0.5 * z * z)
    }
    const result = []
    // always include start of the interval
    let x = interval[0]
    result.push({ x, y: value(x) })
    // include points in the middle at intervals
    while (x < interval[1] - step) {
        x += step
        const y = value(x)
        result.push({ x, y })
    }
    // always include the end of the interval
    x = interval[1]
    result.push({ x, y: value(x) })
    return result
}
