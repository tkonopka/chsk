export const generateBandData = ({
    ids,
    keys,
    interval,
}: {
    ids: string[]
    keys: string[]
    interval: [number, number]
}) => {
    const intervalSize = interval[1] - interval[0]
    const result = ids.map(id => {
        const series: Record<string, number | string> = { id: id }
        keys.forEach(k => {
            series[k] = Math.round(interval[0] + Math.random() * intervalSize)
        })
        return series
    })
    return result
}
