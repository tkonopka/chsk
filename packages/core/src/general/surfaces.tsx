import { BackgroundSurfaceProps, SurfaceProps } from './types'
import { useDimensions } from './dimensions'
import { Style } from '../themes/style'

export const SurfaceStyles = ({ id }: { id: string }) => (
    <Style id={id} themeKey={'surface'} component={'rect'} prefix={'surface'} />
)

export const Surface = ({ variant, x, y, width, height, style }: SurfaceProps) => {
    return (
        <rect
            role={'surface'}
            x={x}
            y={y}
            width={width}
            height={height}
            className={'surface-' + variant}
            style={style}
        />
    )
}

export const BackgroundSurface = ({
    variant = 'inner',
    expansion = { top: 0, right: 0, bottom: 0, left: 0 },
    style,
}: BackgroundSurfaceProps) => {
    const dimensions = useDimensions()
    const isOuter = variant === 'outer'
    const x = isOuter ? -dimensions.margin.left : 0
    const y = isOuter ? -dimensions.margin.top : 0
    const width = isOuter ? dimensions.width : dimensions.innerWidth
    const height = isOuter ? dimensions.height : dimensions.innerHeight
    return (
        <Surface
            variant={variant}
            x={x - expansion.left}
            y={y - expansion.top}
            width={width + expansion.left + expansion.right}
            height={height + expansion.top + expansion.bottom}
            style={style}
        />
    )
}
