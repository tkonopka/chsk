import { useDimensions, BOTTOM, HEIGHT, LEFT, RIGHT, TOP, WIDTH } from '../general'
import { composeClassName } from '../themes'
import { SurfaceProps } from './types'

export const Surface = ({
    variant = 'inner',
    expansion = [0, 0, 0, 0],
    className,
    style,
    setRole = true,
}: SurfaceProps) => {
    const dimensions = useDimensions()
    const isOuter = variant === 'outer'
    const x = isOuter ? -dimensions.padding[LEFT] : 0
    const y = isOuter ? -dimensions.padding[TOP] : 0
    const width = isOuter ? dimensions.size[WIDTH] : dimensions.innerSize[WIDTH]
    const height = isOuter ? dimensions.size[HEIGHT] : dimensions.innerSize[HEIGHT]
    const surfaceSize: [number, number] = [
        width + expansion[LEFT] + expansion[RIGHT],
        height + expansion[TOP] + expansion[BOTTOM],
    ]
    const compositeClassName = composeClassName([variant, className])
    return (
        <rect
            role={setRole ? 'surface-' + variant : undefined}
            x={x - expansion[LEFT]}
            y={y - expansion[TOP]}
            width={surfaceSize[WIDTH]}
            height={surfaceSize[HEIGHT]}
            className={compositeClassName}
            style={style}
        />
    )
}
