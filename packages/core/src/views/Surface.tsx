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
    const { size, margin } = useDimensions()
    const isOuter = variant === 'outer'
    const x = isOuter ? -margin[LEFT] : 0
    const y = isOuter ? -margin[TOP] : 0
    const width = size[X] + (isOuter ? margin[LEFT] + margin[RIGHT] : 0)
    const height = size[Y] + (isOuter ? margin[TOP] + margin[BOTTOM] : 0)
    const surfaceSize: [number, number] = expansion
        ? [width + expansion[LEFT] + expansion[RIGHT], height + expansion[TOP] + expansion[BOTTOM]]
        : [width, height]

    const compositeClassName = getClassName('surface ' + variant, className)
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
