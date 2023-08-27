import { GridProps } from './types'
import { getTranslate, NumericPositionSpec, SizeSpec } from '../general'
import { X, Y, zeroPosition } from '../general/constants'
import { defaultContainerProps } from './defaults'
import { useContainer } from './hooks'
import { GridProvider } from './contexts'
import { useMemo } from 'react'

/**
 * compute positions and sizes for all grid items
 *
 * @param horizontal toggle horizontal or vertical layout
 * @param innerSize absolute size of bounding container
 * @param grid number of [columns, rows]
 * @param spacing absolute [horizontal space, vertical space]
 * @param widths relative lengths of columns in the grid
 * @param heights relative lengths of rows in the grid
 */
const computeGrid = (
    horizontal: boolean,
    innerSize: SizeSpec,
    grid: SizeSpec,
    spacing: SizeSpec,
    widths?: number[],
    heights?: number[]
) => {
    // use custom grid widths/heights, or equal widths/heights
    widths = widths ?? Array(grid[X]).fill(1)
    heights = heights ?? Array(grid[Y]).fill(1)

    // space available space for grid items (innerSize minus all the spacings)
    const availableSize: SizeSpec = [
        innerSize[X] - spacing[X] * (grid[X] - 1),
        innerSize[Y] - spacing[Y] * (grid[Y] - 1),
    ]
    // x and y positions for the grid item boundaries
    const getBoundaries = (lengths: number[], spacing: number, size: number) => {
        const result: number[] = []
        const total = lengths.reduce((acc, v) => acc + v, 0)
        let current = 0
        lengths.forEach(v => {
            result.push(current)
            current += (v / total) * size
            result.push(current)
            current += spacing
        })
        return result
    }
    const x = getBoundaries(widths, spacing[X], availableSize[X])
    const y = getBoundaries(heights, spacing[Y], availableSize[Y])

    // construct positions and sizes for all grid items
    const positions: NumericPositionSpec[] = []
    const sizes: SizeSpec[] = []
    Array.from(Array(grid[X] * grid[Y]).keys()).map(i => {
        let row: number, column: number
        if (horizontal) {
            row = Math.floor(i / grid[X])
            column = i - row * grid[X]
        } else {
            column = Math.floor(i / grid[Y])
            row = i - column * grid[Y]
        }
        positions.push([Number(x[2 * column]), Number(y[2 * row])])
        sizes.push([
            Number(x[2 * column + 1]) - Number(x[2 * column]),
            Number(y[2 * row + 1]) - Number(y[2 * row]),
        ])
    })

    return { positions, sizes }
}

export const Grid = ({
    variant = 'horizontal',
    container = defaultContainerProps,
    grid = [2, 2],
    spacing = zeroPosition,
    widths,
    heights,
    setRole = true,
    className,
    style,
    children,
}: GridProps) => {
    const { origin, innerSize } = useContainer(container)

    const { sizes, positions } = useMemo(
        () => computeGrid(variant === 'horizontal', innerSize, grid, spacing, widths, heights),
        [variant, innerSize, grid, spacing, widths, heights]
    )

    return (
        <g
            role={setRole ? 'grid' : undefined}
            transform={getTranslate(origin[X], origin[Y])}
            style={style}
            className={className}
        >
            <GridProvider grid={grid} variant={variant} sizes={sizes} positions={positions}>
                {children}
            </GridProvider>
        </g>
    )
}
