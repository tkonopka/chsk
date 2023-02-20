import {
    addColor,
    ColorScale,
    CssProps,
    getClassName,
    LEFT,
    Square,
    TOP,
    useScales,
    useTooltip,
    X,
    Y,
    NumericPositionSpec,
    SizeSpec,
    Tooltip,
    defaultTooltipProps,
    TooltipTitle,
} from '@chsk/core'
import { createElement } from 'react'
import { QuantileTooltipProps } from './types'
import { isQuantileProcessedSummary } from './predicates'

const getSymbolStyle = (
    style: CssProps | undefined,
    color: string | number | undefined,
    colorScale: ColorScale,
    item: string
) => {
    const itemColor =
        typeof color === 'number'
            ? colorScale(color)
            : color ?? colorScale(colorScale.domain().indexOf(item ?? ''))
    return addColor(style, itemColor)
}

// create a set of label: value pairs
const InformationTable = ({
    position,
    size,
    labels,
    values,
    className,
}: {
    position: NumericPositionSpec
    size: SizeSpec
    labels: Array<string>
    values: Array<string | number>
    className: string
}) => {
    return (
        <>
            {labels.map((label, i) => (
                <text
                    key={'label-' + i}
                    x={position[X]}
                    y={position[Y] + i * size[Y]}
                    className={className + ' label'}
                >
                    {label + ':'}
                </text>
            ))}
            {values.map((value, i) => (
                <text
                    key={'value-' + i}
                    x={position[X] + size[X]}
                    y={position[Y] + i * size[Y]}
                    className={className + ' value'}
                >
                    {value}
                </text>
            ))}
        </>
    )
}

export const QuantileTooltip = ({
    // layout of container
    translate = defaultTooltipProps.translate,
    size,
    anchor = defaultTooltipProps.anchor,
    padding = defaultTooltipProps.padding,
    rx = defaultTooltipProps.rx,
    ry = defaultTooltipProps.ry,
    maxOverhang = defaultTooltipProps.maxOverhang,
    // organization of items within the container
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    firstOffset = defaultTooltipProps.firstOffset,
    // title and items
    title,
    titleStyle,
    titleFormat,
    color,
    r = defaultTooltipProps.r,
    symbol = Square,
    symbolStyle,
    label,
    labelStyle,
    labelOffset = defaultTooltipProps.labelOffset,
    labelFormat,
    //
    className,
    style,
    setRole = true,
    //
    valueFormat = (x: number) => String(x),
    cellSize = [40, 20],
    cellPadding = 20,
}: //

QuantileTooltipProps) => {
    const { data: tooltip } = useTooltip()
    const colorScale = useScales().color
    const data = tooltip?.data?.[0] ?? null
    if (!isQuantileProcessedSummary(data)) return null

    const item = data.key ?? ''
    title =
        title ?? (titleFormat === null ? '' : titleFormat ? titleFormat(tooltip) : tooltip.title)
    const titlePosition: NumericPositionSpec = [padding[LEFT], padding[TOP]]
    const itemPosition: NumericPositionSpec = [padding[LEFT], padding[TOP]]
    const step = [0, itemSize[Y]]
    if (title) {
        itemPosition[0] += step[0] + firstOffset[0]
        itemPosition[1] += step[1] + firstOffset[1]
    }
    const symbolPosition = [itemPosition[X] + r, itemPosition[Y] + r]
    const labelPosition = [symbolPosition[X] + r + labelOffset, symbolPosition[Y]]

    const itemStyle = getSymbolStyle(symbolStyle, color, colorScale, item)
    const symbolClassName = getClassName('tooltipSymbol right', className)
    const textClassName = getClassName('tooltipItem right', className)
    const infoClassName = getClassName('tooltipItem', className) as string

    const infoPosition: NumericPositionSpec = [
        padding[LEFT],
        Math.max(padding[TOP] + cellSize[Y] * 1.5, labelPosition[Y] * 2),
    ]
    const content1 = (
        <InformationTable
            key="info-n-mean"
            position={infoPosition}
            size={cellSize}
            labels={['n', 'mean', 'min', 'max']}
            values={[
                data.n,
                valueFormat(data.mean),
                valueFormat(data.extrema[0]),
                valueFormat(data.extrema[1]),
            ]}
            className={infoClassName}
        />
    )
    const content2 = (
        <InformationTable
            key={'info-q'}
            position={[infoPosition[X] + 2 * cellSize[X] + cellPadding, infoPosition[Y]]}
            size={cellSize}
            labels={data.quantiles.map(q => String(q * 100) + '%')}
            values={data.values.map(v => valueFormat(v))}
            className={infoClassName}
        />
    )

    return (
        <Tooltip
            translate={translate}
            size={size}
            padding={[0, 0, 0, 0]}
            anchor={anchor}
            rx={rx}
            ry={ry}
            maxOverhang={maxOverhang}
            style={style}
            setRole={setRole}
        >
            <TooltipTitle
                key={'tooltip-title'}
                variant={'right'}
                position={titlePosition}
                size={itemSize}
                padding={itemPadding}
                translate={[0, r]}
                style={titleStyle}
            >
                {title}
            </TooltipTitle>
            {createElement(symbol, {
                key: 'tooltip-symbol-' + item,
                cx: symbolPosition[X],
                cy: symbolPosition[Y],
                r: r,
                className: symbolClassName,
                style: itemStyle,
                setRole: false,
            })}
            <text
                key={'tooltip-label'}
                x={labelPosition[X]}
                y={labelPosition[Y]}
                className={textClassName}
                style={labelStyle}
            >
                {label ?? labelFormat ? labelFormat?.(data) : item}
            </text>
            {content1}
            {content2}
        </Tooltip>
    )
}
