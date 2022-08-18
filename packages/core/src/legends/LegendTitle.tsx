import { Typography } from '../typography'
import { LEFT, RIGHT, TOP } from '../general'
import { LegendTitleProps } from './types'
import { useTheme } from '../themes'

export const LegendTitle = ({
    position,
    size,
    padding,
    align = 'left',
    translate = [0, 0],
    className,
    style,
    setRole = true,
    children,
}: LegendTitleProps) => {
    const theme = useTheme().Legend
    const itemPadding = padding ?? theme.itemPadding
    const itemSize = size ?? theme.itemSize

    let x = position[0] + translate[0]
    const y = position[1] + translate[1] + itemPadding[TOP]
    if (align === 'left') {
        x += itemPadding[LEFT]
    } else if (align === 'right') {
        x += itemSize[0] - itemPadding[RIGHT]
    } else if (align === 'middle') {
        x += itemPadding[LEFT] + (itemSize[0] - itemPadding[LEFT] - itemPadding[RIGHT]) / 2
    }

    return (
        <Typography
            x={x}
            y={y}
            variant={'legendTitle'}
            className={className}
            style={style}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}
