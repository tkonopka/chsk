import { getTranslate, useDimensions } from '../general'
import { AxisProps } from './types'
import { AxisLine } from './AxisLine'
import { AxisLabel } from './AxisLabel'
import { AxisTicks } from './AxisTicks'
import { getAxisPosition } from './utils'
import { useThemedProps } from '../themes'
import { defaultAxisProps } from './defaults'

const UnthemedAxis = ({
    variant,
    label,
    ticks = defaultAxisProps.ticks,
    distance = defaultAxisProps.distance,
    className,
    style,
    setRole = true,
    children,
}: AxisProps) => {
    const { size } = useDimensions()
    return (
        <g
            role={setRole ? 'axis' : undefined}
            transform={getTranslate(getAxisPosition(variant, size, distance))}
            className={className}
            style={style}
        >
            {children ? (
                children
            ) : (
                <>
                    <AxisTicks variant={variant} ticks={ticks} />
                    <AxisLine style={style} variant={variant} />
                    <AxisLabel variant={variant}>{label}</AxisLabel>
                </>
            )}
        </g>
    )
}

export const Axis = (props: AxisProps) => <UnthemedAxis {...useThemedProps(props, 'Axis')} />
