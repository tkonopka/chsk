type XYFunction = (x: number) => number

// create an array of objects with coordinates
// can produce objects with arbitrary keys {x, k1, k2, k3 }
export const generateXYValues = (
    n: number,
    x: () => number,
    keys: string[],
    y: XYFunction[]
): Array<Record<string, unknown>> => {
    return Array(n)
        .fill(0)
        .map(() => {
            const item: Record<string, number> = {}
            const v = x()
            item['x'] = v
            keys.forEach((k, i) => {
                item[k] = y[i](v)
            })
            return item
        })
}
