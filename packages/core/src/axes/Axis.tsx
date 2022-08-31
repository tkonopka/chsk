import { useDimensions } from '../general'
import { useTheme } from '../themes'
import { AxisProps } from './types'
import { AxisLine } from './AxisLine'
import { AxisLabel } from './AxisLabel'
import { AxisTicks } from './AxisTicks'
import { getAxisTranslate } from './utils'
import { themedProps } from '../themes/utils'
import { defaultAxisProps } from './defaults'

export const UnthemedAxis = ({
    variant,
    label,
    ticks = defaultAxisProps.ticks,
    offset = defaultAxisProps.offset,
    className,
    style,
    setRole = true,
    children,
}: AxisProps) => {
    const theme = useTheme().Axis
    const dimensions = useDimensions()
    const axisOffset = offset ?? (theme[variant]?.offset as number) ?? 0

    return (
        <g
            role={setRole ? 'axis-' + variant : undefined}
            transform={getAxisTranslate({
                variant,
                offset: axisOffset,
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

export const Axis = (props: AxisProps) => <UnthemedAxis {...themedProps(props, 'Axis')} />
