import { Typography } from '../typography'
import { LEFT, RIGHT, TOP } from '../general'
import { useThemedProps } from '../themes'
import { TooltipTitleProps } from './types'
import { defaultTooltipItemProps } from './defaults'
import { Rectangle } from '../shapes'

const UnthemedTooltipTitle = ({
    variant = 'right',
    position,
    size = defaultTooltipItemProps.size,
    padding = defaultTooltipItemProps.padding,
    translate = defaultTooltipItemProps.translate,
    className,
    style,
    setRole = true,
    children,
}: TooltipTitleProps) => {
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
        <g role={setRole ? 'tooltip-title' : undefined} style={style} className={'tooltipTitle'}>
            <Rectangle
                variant={'legend-title'}
                x={0}
                y={0}
                width={size[0]}
                height={size[1]}
                setRole={false}
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

export const TooltipTitle = (props: TooltipTitleProps) => (
    <UnthemedTooltipTitle {...useThemedProps(props, 'TooltipTitle')} />
)
