// convert a pixel string to a number, e.g. '10px' -> 10
export const pxValue = (x: unknown) => Number(String(x).replace('px', ''))

export const colArray = (x?: string) => {
    if (x === undefined) return [NaN, NaN, NaN]
    const hex = x.replace('#', '').replace(';', '')
    let indexes = [0, 1, 2, 3, 4, 5]
    if (hex.length == 3) {
        indexes = [0, 0, 1, 1, 2, 2]
    }
    return [
        parseInt(hex[indexes[0]] + hex[indexes[1]], 16),
        parseInt(hex[indexes[2]] + hex[indexes[3]], 16),
        parseInt(hex[indexes[4]] + hex[indexes[5]], 16),
    ]
}
