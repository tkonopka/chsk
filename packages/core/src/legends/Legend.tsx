import { LegendProps } from './types'
import { useProcessedData, useView } from '../views'
import { LegendTitle } from './LegendTitle'
import { useTheme } from '../themes'
import { LegendItem } from './LegendItem'

export const Legend = ({
    // layout of container
    position = [1, 0.5],
    units = 'relative',
    size = [0.2, 0.5],
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // organization of items within the container
    itemSize,
    horizontal = false,
    firstOffset,
    // title
    title,
    titleStyle,
    // details for individual items
    r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset,
    // general svg
    className,
    style,
    setRole = true,
    children,
}: LegendProps) => {
    const theme = useTheme()
    const data = useProcessedData()
    const { translate } = useView({ position, size, units, anchor, padding })

    // settings from theme or from props
    const iSize = itemSize ?? theme.Legend.itemSize ?? [40, 10]
    const fOffset = firstOffset ?? theme.Legend.firstOffset ?? [0, 0]
    const lOffset = labelOffset ?? theme.Legend.labelOffset ?? [0, 0]
    const symbolR = r ?? theme.Legend.r ?? 1

    if (children) {
        return (
            <g
                role={setRole ? 'legend' : undefined}
                transform={translate}
                style={style}
                className={className}
            >
                {children}
            </g>
        )
    }

    // book-keeping for position of legend item position
    const pos = [0, 0]
    const step = horizontal ? [iSize[0], 0] : [0, iSize[1]]
    if (title) {
        pos[0] += step[0] + fOffset[0]
        pos[1] += step[1] + fOffset[1]
    }

    // legend content
    const items = data.keys.map((k: string, i: number) => {
        return (
            <LegendItem
                key={'legend-item-' + i}
                position={[pos[0] * i * step[0], pos[1] + i * step[1]]}
                r={symbolR}
                symbol={symbol}
                symbolStyle={symbolStyle}
                label={k}
                labelStyle={labelStyle}
                labelOffset={lOffset}
                colorIndex={i}
                setRole={setRole}
            />
        )
    })

    return (
        <g
            role={setRole ? 'legend' : undefined}
            transform={translate}
            style={style}
            className={className}
        >
            <LegendTitle key={'legend-title'} x={0} y={0} style={titleStyle} setRole={setRole}>
                {title}
            </LegendTitle>
            {items}
        </g>
    )
}
