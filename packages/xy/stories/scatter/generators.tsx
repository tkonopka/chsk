// generate synthetic data with {x, y, lo, hi} keys
export const generateScatterSeriesWithInterval = (
    id: string,
    x: number[],
    y: (v: number) => number,
    interval: [number, number]
) => {
    const data = x.map(xVal => {
        const yVal = y(xVal)
        return {
            x: xVal,
            y: yVal,
            lo: yVal + interval[0] * Math.sqrt(yVal),
            hi: yVal + interval[1] * Math.sqrt(yVal),
        }
    })
    return { id, data }
}

// generate synthetic data with {x, y}
export const generateScatterSeries = (id: string, x: number[], y: (v: number) => number) => {
    const data = x.map(xVal => {
        const yVal = y(xVal)
        return {
            x: xVal,
            y: yVal,
        }
    })
    return { id, data }
}
