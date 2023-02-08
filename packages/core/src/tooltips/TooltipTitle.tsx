import { Typography } from '../typography'
import { useThemedProps } from '../themes'
import { TooltipTitleProps } from './types'
import { defaultTooltipItemProps } from './defaults'
import { getTitlePosition } from '../legends/utils'

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
    const [x, y] = getTitlePosition(variant, position, size, padding)
    return (
        <Typography
            position={[x + translate[0], y + translate[1]]}
            variant={'tooltip-title'}
            className={className}
            style={style}
            setRole={setRole}
        >
            {children}
        </Typography>
    )
}

export const TooltipTitle = (props: TooltipTitleProps) => (
    <UnthemedTooltipTitle {...useThemedProps(props, 'TooltipTitle')} />
)
