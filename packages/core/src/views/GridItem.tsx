import { GridItemProps } from './types'
import { DimensionsProvider, getTranslate, isArray, X, Y, zeroPadding } from '../general'
import { useGrid } from './contexts'

export const GridItem = ({
    index,
    position,
    className,
    setRole = true,
    style,
    children,
}: GridItemProps) => {
    const grid = useGrid()

    // convert array-based position/index into a single-integer index
    if (index === undefined && position !== undefined) {
        index = [position[Y], position[X]]
    }
    if (isArray(index)) {
        if (grid.variant === 'horizontal') {
            index = index[Y] + grid.grid[Y] * index[X]
        } else if (grid.variant === 'vertical') {
            index = index[Y] * grid.grid[X] + index[X]
        }
    }

    return (
        <g
            role={setRole ? 'grid-item' : undefined}
            className={className}
            style={style}
            transform={getTranslate(grid.positions?.[Number(index)] ?? [0, 0])}
        >
            <DimensionsProvider
                size={grid.sizes?.[Number(index)] ?? [0, 0]}
                padding={zeroPadding}
                role={'grid-item-content'}
            >
                {children}
            </DimensionsProvider>
        </g>
    )
}
