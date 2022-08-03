import { BackgroundSurfaceProps, SurfaceProps } from './types'
import { useDimensions } from './dimensions'
import { getStyles } from '../themes'
import { composeClassName } from '../themes'

export const getSurfaceStyles = (id: string) => {
    return getStyles({ chartId: id, themeKey: 'surface', component: 'rect' })
}

export const Surface = ({
    variant,
    x,
    y,
    width,
    height,
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
            width={width}
            height={height}
            className={compositeClassName}
            style={style}
        />
    )
}

export const BackgroundSurface = ({
    variant = 'inner',
    expansion = { top: 0, right: 0, bottom: 0, left: 0 },
    className,
    style,
    setRole = true,
}: BackgroundSurfaceProps) => {
    const dimensions = useDimensions()
    const isOuter = variant === 'outer'
    const x = isOuter ? -dimensions.padding.left : 0
    const y = isOuter ? -dimensions.padding.top : 0
    const width = isOuter ? dimensions.width : dimensions.innerWidth
    const height = isOuter ? dimensions.height : dimensions.innerHeight
    return (
        <Surface
            variant={variant}
            x={x - expansion.left}
            y={y - expansion.top}
            width={width + expansion.left + expansion.right}
            height={height + expansion.top + expansion.bottom}
            className={className}
            style={style}
            setRole={setRole}
        />
    )
}
