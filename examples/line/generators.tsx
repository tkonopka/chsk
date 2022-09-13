import { randomNormalValue, randomUniformValue } from '../utils'

// produce a random walk with n steps
export const generateRandomWalk = (n: number, mean = 0, sd = 1) => {
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
    step: number
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

// produce a table with survival values
export const generateSurvivalMatrix = (
    nRisk = 80,
    tInterval = [5, 20],
    pEvent = 0.1,
    pCensor = 0.1,
    maxTime = 500
): Array<unknown> => {
    const result = [{ time: 0, surv: 1.0, lower: 1.0, upper: 1.0, nRisk, nEvent: 0, nCensor: 0 }]
    let survival = 1.0
    let denominator = nRisk
    let time = 0
    const pEvent2 = pEvent * pEvent
    const pCensor2 = pCensor * pCensor
    while (nRisk > 4 && time < maxTime) {
        time += Math.floor(randomUniformValue(tInterval[0], tInterval[1]))
        const e = Math.random()
        const c = Math.random()
        const nEvent = e < pEvent2 ? 2 : e < pEvent ? 1 : 0
        const nCensor = c < pCensor2 ? 2 : c < pCensor ? 1 : 0
        if (nEvent + nCensor > 0) {
            const row = {
                time,
                surv: (survival * (nRisk - nEvent)) / denominator,
                lower: -1,
                upper: -1,
                nRisk,
                nEvent,
                nCensor,
            }
            result.push(row)
            if (nCensor > 0) {
                denominator = nRisk - nEvent - nCensor
                survival = row.surv
            }
            nRisk -= nEvent + nCensor
        }
    }
    // add some made-up intervals
    return result.map(row => {
        const rowSurv = row['surv']
        if (row['lower'] < 0) {
            row['lower'] = Math.max(0, rowSurv - 0.05 - 0.15 * (1 - rowSurv))
        }
        if (row['upper'] < 0) {
            row['upper'] = Math.min(1.0, rowSurv + 0.05 + 0.15 * (1 - rowSurv))
        }
        return row
    })
}
