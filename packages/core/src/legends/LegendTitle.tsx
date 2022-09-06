import { Typography } from '../typography'
import { LEFT, RIGHT, TOP } from '../general'
import { themedProps } from '../themes'
import { LegendTitleProps } from './types'
import { defaultLegendItemProps } from './defaults'

export const UnthemedLegendTitle = ({
    variant = 'default',
    position,
    size = defaultLegendItemProps.size,
    padding = defaultLegendItemProps.padding,
    align = defaultLegendItemProps.align,
    translate = defaultLegendItemProps.translate,
    className,
    style,
    setRole = true,
    children,
}: LegendTitleProps) => {
    let x = position[0] + translate[0]
    const y = position[1] + translate[1] + padding[TOP]
    if (align === 'left') {
        x += padding[LEFT]
    } else if (align === 'right') {
        x += size[0] - padding[RIGHT]
    } else if (align === 'middle') {
        x += padding[LEFT] + (size[0] - padding[LEFT] - padding[RIGHT]) / 2
    }

    return (
        <Typography
            position={[x, y]}
            variant={variant === 'default' ? 'legend-title' : variant}
            className={className}
            style={style}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}

export const LegendTitle = (props: LegendTitleProps) => (
    <UnthemedLegendTitle {...themedProps(props, 'LegendTitle')} />
)
