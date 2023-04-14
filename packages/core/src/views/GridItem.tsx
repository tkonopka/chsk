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

    let itemIndex = 0
    if (Array.isArray(position)) {
        if (grid.variant === 'horizontal') {
            itemIndex = position[X] + grid.size[Y] * position[Y]
        } else if (grid.variant === 'vertical') {
            itemIndex = position[X] * grid.size[X] + position[Y]
        }
    } else {
        itemIndex = position
    }

    return (
        <g
            role={setRole ? 'grid-item' : undefined}
            className={className}
            style={style}
            transform={getTranslate(grid.itemPositions?.[itemIndex] ?? [0, 0])}
        >
            <DimensionsProvider
                size={grid.itemSize}
                padding={zeroPadding}
                role={'grid-item-content'}
            >
                {children}
            </DimensionsProvider>
        </g>
    )
}
