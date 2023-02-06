import { useDimensions, X, Y } from '../general'
import { AxisLabelProps } from './types'
import { Typography } from '../typography'
import { useThemedProps } from '../themes'
import { defaultAxisLabelProps } from './defaults'

const anchorPresets: Record<string, number> = { start: 0, middle: 0.5, end: 1.0 }
const getAnchorFraction = (anchor: string | number) => {
    if (typeof anchor === 'string') return anchorPresets[anchor] ?? 0
    return Number(anchor)
}

const UnthemedAxisLabel = ({
    variant,
    offset = defaultAxisLabelProps.offset,
    anchor = defaultAxisLabelProps.anchor,
    rotate = defaultAxisLabelProps.rotate,
    className,
    style,
    setRole,
    children,
}: AxisLabelProps) => {
    const { size } = useDimensions()
    if (children === undefined || children === '') return null

    const anchorFraction = getAnchorFraction(anchor)
    let x = 0,
        y = 0
    if (variant === 'left') x -= offset
    if (variant === 'right') x += offset
    if (variant === 'top') y -= offset
    if (variant === 'bottom') y += offset
    if (variant === 'left' || variant === 'right') y += (1 - anchorFraction) * size[Y]
    if (variant === 'top' || variant === 'bottom') x += anchorFraction * size[X]

    return (
        <Typography
            variant={'axis-label'}
            position={[x, y]}
            rotate={rotate}
            style={style}
            className={className ?? variant}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}

export const AxisLabel = (props: AxisLabelProps) => (
    <UnthemedAxisLabel {...useThemedProps(props, 'AxisLabel')} />
)
