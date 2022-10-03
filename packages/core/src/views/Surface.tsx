import { useDimensions, BOTTOM, HEIGHT, LEFT, RIGHT, TOP, WIDTH } from '../general'
import { composeClassName, themedProps } from '../themes'
import { SurfaceProps } from './types'
import { defaultSurfaceProps } from './defaults'

const UnthemedSurface = ({
    variant = 'inner',
    expansion = defaultSurfaceProps.expansion,
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
        width + (expansion ? expansion[LEFT] + expansion[RIGHT] : 0),
        height + (expansion ? expansion[TOP] + expansion[BOTTOM] : 0),
    ]
    const compositeClassName = composeClassName([variant, className])
    return (
        <rect
            role={setRole ? 'surface-' + variant : undefined}
            x={x - (expansion ? expansion[LEFT] : 0)}
            y={y - (expansion ? expansion[TOP] : 0)}
            width={surfaceSize[WIDTH]}
            height={surfaceSize[HEIGHT]}
            className={compositeClassName}
            style={style}
        />
    )
}

export const Surface = (props: SurfaceProps) => (
    <UnthemedSurface {...themedProps(props, 'Surface')} />
)
