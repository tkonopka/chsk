import { useDimensions } from '../general'
import { AxisProps } from './types'
import { AxisLine } from './AxisLine'
import { AxisLabel } from './AxisLabel'
import { AxisTicks } from './AxisTicks'
import { getAxisTranslate } from './utils'
import { useThemedProps } from '../themes/utils'
import { defaultAxisProps } from './defaults'

const UnthemedAxis = ({
    variant,
    label,
    ticks = defaultAxisProps.ticks,
    offset = defaultAxisProps.offset,
    className,
    style,
    setRole = true,
    children,
}: AxisProps) => {
    const dimensions = useDimensions()
    return (
        <g
            role={setRole ? 'axis-' + variant : undefined}
            transform={getAxisTranslate({
                variant,
                offset,
                size: dimensions.innerSize,
            })}
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
