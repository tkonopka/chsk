import { getClassName, useThemedProps } from '../themes'
import { LegendTitleProps } from './types'
import { defaultLegendItemProps } from './defaults'
import { getTitlePosition } from './utils'
import { X, Y } from '../general'

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
    if (!children) return null
    const [x, y] = getTitlePosition(variant, position, size, padding)
    const compositeClassName = getClassName('legendTitle', className)
    return (
        <g role={setRole ? 'legend-title' : undefined} className={'legendTitle'}>
            <rect
                role={setRole ? 'legend-title' : undefined}
                x={0}
                y={0}
                width={size[X]}
                height={size[Y]}
                className={compositeClassName}
            />
            <text
                role={setRole ? 'legend-title' : undefined}
                x={x + translate[X]}
                y={y + translate[Y]}
                className={compositeClassName}
                style={style}
            >
                {children}
            </text>
        </g>
    )
}

export const LegendTitle = (props: LegendTitleProps) => (
    <UnthemedLegendTitle {...useThemedProps(props, 'LegendTitle')} />
)
