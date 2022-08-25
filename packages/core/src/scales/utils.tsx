// get min and max values in an array
export const getMinMax = (values: Array<number>): [number, number] => {
    const min = values.reduce((acc, v) => Math.min(acc, v), values[0])
    const max = values.reduce((acc, v) => Math.max(acc, v), values[0])
    if (min === undefined && max === undefined) return [1, 1]
    return [min, max]
}
