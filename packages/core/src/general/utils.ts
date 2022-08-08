/** round a number x to n decimal places, e.g. 33.3333 -> 33.3 */
export const roundDecimalPlaces = (x: number, n: number) => {
    if (n === 0) return Math.round(x)
    if (n === 3) return Math.round(x * 1000) / 1000
    if (n === 1) return Math.round(x * 10) / 10
    const pow10 = Math.pow(10, n)
    return Math.round(x * pow10) / pow10
}
