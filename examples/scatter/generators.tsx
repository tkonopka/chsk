type XYFunction = (x: number) => number

// create an array of objects with coordinates
// can produce objects with arbitrary keys {x, k1, k2, k3 }
export const generateXYValues = (
    x: number[],
    keys: string[],
    y: XYFunction[]
): Array<Record<string, unknown>> => {
    return x.map(v => {
        const item: Record<string, number> = {}
        item['x'] = v
        keys.forEach((k, i) => {
            item[k] = Number(y[i]?.(v))
        })
        return item
    })
}
