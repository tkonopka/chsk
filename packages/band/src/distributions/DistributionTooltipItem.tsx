import {
    addColor,
    ColorScale,
    CssProps,
    getClassName,
    LEFT,
    Square,
    TOP,
    useScales,
    X,
    Y,
    NumericPositionSpec,
    SizeSpec,
    defaultTooltipProps,
    getTranslate,
    defaultTooltipItemProps,
} from '@chsk/core'
import { createElement } from 'react'
import { DistributionTooltipItemProps } from './types'
import { isDistributionProcessedSummary } from './predicates'

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
    style,
}: {
    position: NumericPositionSpec
    size: SizeSpec
    labels: Array<string>
    values: Array<string | number | undefined>
    className: string
    style?: CssProps
}) => {
    return (
        <>
            {labels.map((label, i) => (
                <text
                    key={'label-' + i}
                    x={position[X]}
                    y={position[Y] + i * size[Y]}
                    className={className + ' label'}
                    style={style}
                >
                    {values[i] !== undefined ? label + ':' : ''}
                </text>
            ))}
            {values.map((value, i) => (
                <text
                    key={'value-' + i}
                    x={position[X] + size[X]}
                    y={position[Y] + i * size[Y]}
                    className={className + ' value'}
                    style={style}
                >
                    {value ?? ''}
                </text>
            ))}
        </>
    )
}

export const DistributionTooltipItem = ({
    position = [0, 0],
    data,
    padding = defaultTooltipItemProps.padding,
    // basic tooltip item with symbol and label
    color,
    r = defaultTooltipProps.r,
    symbol = Square,
    symbolStyle,
    label,
    labelStyle,
    labelOffset = defaultTooltipProps.labelOffset,
    // information table
    valueFormat = (x: number) => String(x),
    cellSize = [40, 20],
    cellPadding = 20,
    cellStyle,
    //
    className,
    style,
    setRole = true,
}: DistributionTooltipItemProps) => {
    const colorScale = useScales().color
    if (!isDistributionProcessedSummary(data)) return null
    if (!data) return null

    const item = 'key' in data ? String(data.key) : ''
    const symbolPosition = [r + padding[LEFT], r + padding[TOP]]
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
            labels={['n', 'mean', 'stdev', 'min', 'max']}
            values={[
                data.n,
                data.moments ? valueFormat(data.moments[0]) : undefined,
                data.moments && isFinite(data.moments[1])
                    ? valueFormat(Math.sqrt(data.moments[1]))
                    : undefined,
                valueFormat(data.extrema[0]),
                valueFormat(data.extrema[1]),
            ]}
            className={infoClassName}
            style={cellStyle}
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
        <g
            key={'tooltip-item-' + item}
            role={setRole ? 'tooltip-item' : undefined}
            transform={getTranslate(position[X], position[Y])}
            style={style}
            className={'tooltipItem'}
        >
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
                {label ?? item}
            </text>
            {content1}
            {content2}
        </g>
    )
}
