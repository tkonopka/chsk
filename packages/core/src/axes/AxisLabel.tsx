import { useDimensions } from '../general'
import { AxisLabelProps } from './types'
import { Typography } from '../typography'
import { themedProps } from '../themes'
import { defaultAxisLabelProps } from './defaults'

const anchorPresets: Record<string, number> = { start: 0, middle: 0.5, end: 1.0 }
const getAnchorFraction = (anchor: string | number | unknown) => {
    if (typeof anchor === 'string') return anchorPresets[anchor] ?? 0
    if (typeof anchor === 'number') return anchor
    return 0.5
}

export const UnthemedAxisLabel = ({
    variant,
    offset = defaultAxisLabelProps.offset,
    anchor = defaultAxisLabelProps.anchor,
    rotate = defaultAxisLabelProps.rotate,
    className,
    style,
    setRole,
    children,
}: AxisLabelProps) => {
    const dimensions = useDimensions()
    if (children === undefined || children === '') return null

    const [width, height] = dimensions.innerSize
    const anchorFraction = getAnchorFraction(anchor)

    let x = 0,
        y = 0
    if (variant === 'left') x -= offset
    if (variant === 'right') x += offset
    if (variant === 'top') y -= offset
    if (variant === 'bottom') y += offset
    if (variant === 'left' || variant === 'right') y += (1 - anchorFraction) * height
    if (variant === 'top' || variant === 'bottom') x += anchorFraction * width
    const rotation = rotate === 0 ? '' : ' rotate(' + String(Number(rotate)) + ')'

    return (
        <Typography
            variant={'axis-label'}
            transform={'translate(' + x + ', ' + y + ')' + rotation}
            style={style}
            className={className ?? variant}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}

export const AxisLabel = (props: AxisLabelProps) => (
    <UnthemedAxisLabel {...themedProps(props, 'AxisLabel')} />
)
