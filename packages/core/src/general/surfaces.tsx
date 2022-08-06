import { BackgroundSurfaceProps, SurfaceProps } from './types'
import { BOTTOM, HEIGHT, LEFT, RIGHT, TOP, useDimensions, WIDTH } from './dimensions'
import { composeClassName } from '../themes'

export const Surface = ({
    variant,
    x,
    y,
    size,
    className,
    style,
    setRole = true,
}: SurfaceProps) => {
    const compositeClassName = composeClassName([variant, className])
    return (
        <rect
            role={setRole ? variant : undefined}
            x={x}
            y={y}
            width={size[WIDTH]}
            height={size[HEIGHT]}
            className={compositeClassName}
            style={style}
        />
    )
}

export const BackgroundSurface = ({
    variant = 'inner',
    expansion = [0, 0, 0, 0],
    className,
    style,
    setRole = true,
}: BackgroundSurfaceProps) => {
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
    return (
        <Surface
            variant={variant}
            x={x - expansion[LEFT]}
            y={y - expansion[TOP]}
            size={surfaceSize}
            className={className}
            style={style}
            setRole={setRole}
        />
    )
}
