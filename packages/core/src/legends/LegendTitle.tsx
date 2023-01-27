import { Rectangle } from '../shapes'
import { Typography } from '../typography'
import { useThemedProps } from '../themes'
import { LegendTitleProps } from './types'
import { defaultLegendItemProps } from './defaults'
import { getTitlePosition } from './positions'

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
    const [x, y] = getTitlePosition(variant, position, size, padding)
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
                position={[x + translate[0], y + translate[1]]}
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
