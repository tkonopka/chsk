// convert a pixel string to a number, e.g. '10px' -> 10
export const pxValue = (x: unknown) => Number(String(x).replace('px', ''))

export const colArray = (x?: string): [number, number, number] => {
    if (x === undefined) return [NaN, NaN, NaN]
    const hex = x.replace('#', '').replace(';', '')
    let indexes: [number, number, number, number, number, number] = [0, 1, 2, 3, 4, 5]
    if (hex.length == 3) {
        indexes = [0, 0, 1, 1, 2, 2]
    }
    return [
        parseInt(String(hex[indexes[0]]) + String(hex[indexes[1]]), 16),
        parseInt(String(hex[indexes[2]]) + String(hex[indexes[3]]), 16),
        parseInt(String(hex[indexes[4]]) + String(hex[indexes[5]]), 16),
    ]
}
