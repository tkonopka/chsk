import { GridItemProps } from './types'
import { DimensionsProvider, getTranslate, X, Y, zeroPadding } from '../general'
import { useGrid } from './contexts'

export const GridItem = ({
    position = 0,
    className,
    setRole = true,
    style,
    children,
}: GridItemProps) => {
    const grid = useGrid()

    let index = 0
    if (Array.isArray(position)) {
        if (grid.variant === 'horizontal') {
            index = position[X] + grid.grid[Y] * position[Y]
        } else if (grid.variant === 'vertical') {
            index = position[X] * grid.grid[X] + position[Y]
        }
    } else {
        index = position
    }

    return (
        <g
            role={setRole ? 'grid-item' : undefined}
            className={className}
            style={style}
            transform={getTranslate(grid.positions?.[index] ?? [0, 0])}
        >
            <DimensionsProvider
                size={grid.sizes?.[index] ?? [0, 0]}
                padding={zeroPadding}
                role={'grid-item-content'}
            >
                {children}
            </DimensionsProvider>
        </g>
    )
}
