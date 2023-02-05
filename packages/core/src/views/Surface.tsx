import { useDimensions, TOP, BOTTOM, LEFT, RIGHT, X, Y } from '../general'
import { getClassName, useThemedProps } from '../themes'
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
    const width = isOuter ? dimensions.size[X] : dimensions.innerSize[X]
    const height = isOuter ? dimensions.size[Y] : dimensions.innerSize[Y]
    const surfaceSize: [number, number] = [
        width + (expansion ? expansion[LEFT] + expansion[RIGHT] : 0),
        height + (expansion ? expansion[TOP] + expansion[BOTTOM] : 0),
    ]
    const compositeClassName = getClassName(variant, className)
    return (
        <rect
            role={setRole ? 'surface-' + variant : undefined}
            x={x - (expansion ? expansion[LEFT] : 0)}
            y={y - (expansion ? expansion[TOP] : 0)}
            width={surfaceSize[X]}
            height={surfaceSize[Y]}
            className={compositeClassName}
            style={style}
        />
    )
}

export const Surface = (props: SurfaceProps) => (
    <UnthemedSurface {...useThemedProps(props, 'Surface')} />
)
