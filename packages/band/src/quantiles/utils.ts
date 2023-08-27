// helper function to compute a quantile in a sorted array of values
const getQuantile = (values: number[], quantile: number, n: number): number => {
    const realIndex = n * Math.max(0, Math.min(1, quantile))
    const intIndex = Math.floor(realIndex)
    if (realIndex === intIndex) return Number(values[intIndex])
    const v1 = Number(values[intIndex]),
        v2 = Number(values[intIndex + 1])
    return v1 + (v2 - v1) * (realIndex - intIndex)
}

// compute a series of quantiles in a sorted array of values
export const getQuantiles = (values: number[], quantiles: number[]): number[] => {
    const n1 = values.length - 1
    const sortedValues = [...values].sort((a, b) => a - b)
    return quantiles.map(v => getQuantile(sortedValues, v, n1))
}
