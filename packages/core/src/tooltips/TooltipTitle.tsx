import { getClassName, useThemedProps } from '../themes'
import { TooltipTitleProps } from './types'
import { defaultTooltipItemProps } from './defaults'
import { getTitlePosition } from '../legends/utils'
import { X, Y } from '../general'

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
    if (!children) return null
    const [x, y] = getTitlePosition(variant, position, size, padding)
    const compositeClassName = getClassName('tooltip-title ' + variant, className)
    return (
        <text
            role={setRole ? 'tooltip-title' : undefined}
            x={x + translate[X]}
            y={y + translate[Y]}
            className={compositeClassName}
            style={style}
        >
            {children}
        </text>
    )
}

export const TooltipTitle = (props: TooltipTitleProps) => (
    <UnthemedTooltipTitle {...useThemedProps(props, 'TooltipTitle')} />
)
