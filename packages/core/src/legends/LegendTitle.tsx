import { getClassName, useThemedProps } from '../themes'
import { LegendTitleProps } from './types'
import { defaultLegendItemProps } from './defaults'
import { getTitlePosition } from './utils'
import { X, Y, zeroPosition } from '../general'

const UnthemedLegendTitle = ({
    variant = 'right',
    position = zeroPosition,
    size = defaultLegendItemProps.size,
    padding = defaultLegendItemProps.padding,
    offset = defaultLegendItemProps.offset,
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
                x={position[X]}
                y={position[Y]}
                width={size[X]}
                height={size[Y]}
                className={compositeClassName}
            />
            <text
                role={setRole ? 'legend-title' : undefined}
                x={x + offset[X]}
                y={y + offset[Y]}
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
