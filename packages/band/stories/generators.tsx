// generate some synthetic data from a uniform distribution
export const generateUniformValues = (n: number, interval: [number, number]) => {
    const size = interval[1] - interval[0]
    return Array(n)
        .fill(0)
        .map(v => interval[0] + Math.random() * size)
}
