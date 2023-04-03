import { useContainer } from '../views'
import { useThemedProps } from '../themes'
import { NumericPositionSpec, useDimensions, X, Y } from '../general'
import { getSizeEstimate } from '../legends/utils'
import { defaultTooltipProps } from './defaults'
import { useTooltip } from './contexts'
import { guessLabel } from './utils'
import { BaseTooltip } from './BaseTooltip'
import { AxisTooltipProps } from './types'
import { useMemo } from 'react'

const UnthemedAxisTooltip = ({
    variant = 'right',
    // layout of container
    offset = defaultTooltipProps.offset,
    size,
    anchor = defaultTooltipProps.anchor,
    padding = defaultTooltipProps.padding,
    rx = defaultTooltipProps.rx,
    ry = defaultTooltipProps.ry,
    // organization of items within the container
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    horizontal = defaultTooltipProps.horizontal,
    firstOffset = defaultTooltipProps.firstOffset,
    // title and items
    title,
    titleStyle,
    titleFormat,
    r = defaultTooltipProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelDistance = defaultTooltipProps.labelDistance,
    labelFormat = guessLabel,
    //
    className,
    style,
    setRole = true,
    children,
}: AxisTooltipProps) => {
    const { data: tooltip } = useTooltip()
    const container = useDimensions()
    const data = tooltip.data ?? []
    const n = labelFormat === null ? 0 : data.length
    title = title ?? (titleFormat ? titleFormat(tooltip) : tooltip.title)
    const hasTitle = title !== '' && tooltip !== undefined
    const tooltipSize = useMemo(
        () => size ?? getSizeEstimate(padding, itemSize, n, firstOffset, hasTitle, false),
        [size, padding, itemSize, n, firstOffset, hasTitle]
    )
    const { origin } = useContainer({
        position: offset,
        positionUnits: 'absolute',
        size: tooltipSize,
        sizeUnits: 'absolute',
        anchor,
    })
    const tooltipPosition: NumericPositionSpec = [
        origin[X] + (tooltip.x ?? 0),
        origin[Y] + (tooltip.y ?? 0),
    ]
    if (variant === 'top') {
        tooltipPosition[Y] = origin[Y]
    } else if (variant === 'right') {
        tooltipPosition[X] = origin[X] + container.size[X]
    } else if (variant === 'bottom') {
        tooltipPosition[Y] = origin[Y] + container.size[Y]
    } else if (variant === 'left') {
        tooltipPosition[X] = origin[X]
    }

    return (
        <BaseTooltip
            variant={variant}
            position={tooltipPosition}
            size={tooltipSize}
            padding={padding}
            data={data}
            title={title}
            rx={rx}
            ry={ry}
            horizontal={horizontal}
            firstOffset={firstOffset}
            itemSize={itemSize}
            itemPadding={itemPadding}
            titleStyle={titleStyle}
            labelFormat={labelFormat}
            r={r}
            symbol={symbol}
            symbolStyle={symbolStyle}
            labelStyle={labelStyle}
            labelDistance={labelDistance}
            className={className}
            style={style}
            setRole={setRole}
        >
            {children}
        </BaseTooltip>
    )
}

export const AxisTooltip = (props: AxisTooltipProps) => (
    <UnthemedAxisTooltip {...useThemedProps(props, 'AxisTooltip')} />
)
