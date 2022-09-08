// generate synthetic data series
export const generateHistogramSeries = (id: string, n: number, generator: () => number) => {
    const data = Array(n)
        .fill(0)
        .map(() => generator())
    return { id, data }
}

/**
 * generate a random number from normal distribution
 * modified from:
 * https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
 *
 * @param mean center of distribution
 * @param sd width of distribution
 */
export const randomNormalValue = (mean: number, sd = 1) => {
    const u = 1 - Math.random()
    const v = Math.random()
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    return z * sd + mean
}
