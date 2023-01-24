import { Typography } from '../typography'
import { LEFT, RIGHT, TOP } from '../general'
import { useThemedProps } from '../themes'
import { LegendTitleProps } from './types'
import { defaultLegendItemProps } from './defaults'
import { Rectangle } from '../shapes'

const UnthemedLegendTitle = ({
    variant = 'right',
    position,
    size = defaultLegendItemProps.size,
    padding = defaultLegendItemProps.padding,
    translate = defaultLegendItemProps.translate,
    className,
    style,
    setRole = true,
    children,
}: LegendTitleProps) => {
    let x = position[0] + translate[0]
    const y = position[1] + translate[1] + padding[TOP]
    if (variant === 'right') {
        x += padding[LEFT]
    } else if (variant === 'left') {
        x += size[0] - padding[RIGHT]
    } else if (variant === 'bottom' || variant === 'top') {
        x += padding[LEFT] + (size[0] - padding[LEFT] - padding[RIGHT]) / 2
    }

    return (
        <g role={setRole ? 'legend-title' : undefined} className={'legendTitle'}>
            <Rectangle
                variant={'legend-title'}
                x={0}
                y={0}
                width={size[0]}
                height={size[1]}
                className={className}
                setRole={setRole}
            />
            <Typography
                position={[x, y]}
                variant={'legend-title'}
                className={className}
                style={style}
                setRole={setRole}
            >
                {children}
            </Typography>
        </g>
    )
}

export const LegendTitle = (props: LegendTitleProps) => (
    <UnthemedLegendTitle {...useThemedProps(props, 'LegendTitle')} />
)
