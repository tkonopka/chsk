import { GridProps } from './types'
import { getTranslate, NumericPositionSpec, SizeSpec } from '../general'
import { X, Y, zeroPosition } from '../general/constants'
import { defaultContainerProps } from './defaults'
import { useContainer } from './hooks'
import { GridProvider } from './contexts'

export const Grid = ({
    variant = 'horizontal',
    container = defaultContainerProps,
    size = [2, 2],
    spacing = zeroPosition,
    setRole = true,
    className,
    style,
    children,
}: GridProps) => {
    const { origin, innerSize } = useContainer(container)

    // size and positions of grid items / cells
    const itemSize: SizeSpec = [
        (innerSize[X] - spacing[X] * (size[X] - 1)) / size[X],
        (innerSize[Y] - spacing[Y] * (size[Y] - 1)) / size[Y],
    ]
    const n = size[X] * size[Y]
    const itemPositions: NumericPositionSpec[] = Array.from(Array(n).keys()).map(i => {
        let row: number, column: number
        if (variant === 'horizontal') {
            row = Math.floor(i / size[X])
            column = i - row * size[X]
        } else {
            column = Math.floor(i / size[Y])
            row = i - column * size[Y]
        }
        return [(itemSize[X] + spacing[X]) * column, (itemSize[Y] + spacing[Y]) * row]
    })

    return (
        <g
            role={setRole ? 'grid' : undefined}
            transform={getTranslate(origin[X], origin[Y])}
            style={style}
            className={className}
        >
            <GridProvider
                size={size}
                variant={variant}
                itemSize={itemSize}
                itemPositions={itemPositions}
            >
                {children}
            </GridProvider>
        </g>
    )
}
