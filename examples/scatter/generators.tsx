// create an array of objects with x,y coordinates
export const generateXYValues = (
    n: number,
    funX: () => number,
    funY: (x: number) => number
): Array<Record<string, unknown>> => {
    return Array(n)
        .fill(0)
        .map(() => {
            const x = funX()
            const y = funY(x)
            return { x, y }
        })
}
