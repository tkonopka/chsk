import { defaultLegendProps } from './defaults'
import { useThemedProps } from '../themes'
import { LegendSizeScaleProps } from './types'
import { getTickCoordinates, getTicks, useScales } from '../scales'
import { LegendItemList } from './LegendItemList'
import { zeroPosition } from '../general'

const UnthemedLegendSizeScale = ({
    variant = 'right',
    position = zeroPosition,
    // organization of items within the container
    horizontal = defaultLegendProps.horizontal,
    itemSize = defaultLegendProps.itemSize,
    itemPadding = defaultLegendProps.itemPadding,
    itemStyle,
    //
    symbol,
    symbolStyle,
    labelStyle,
    labelDistance = 4,
    //
    ticks = 3,
    sizes,
    //
    className,
    style,
    setRole = true,
}: LegendSizeScaleProps) => {
    const scale = useScales().scales.size
    const allTicks = sizes ?? (getTicks(scale, ticks) as number[])
    const allValues: number[] = getTickCoordinates(scale, ticks)
    const pairs = allTicks
        .map((a, i): [number, number] => [a, Number(allValues[i])])
        .filter(ab => ab[1] > 0) // avoid symbols with size zero

    return (
        <g role={setRole ? 'legend-size-scale' : undefined} className={className} style={style}>
            <LegendItemList
                key={'legend-size-scale'}
                variant={variant}
                keys={pairs.map(ab => String(ab[0]))}
                labels={pairs.map(ab => String(ab[0]))}
                position={position}
                itemSize={itemSize}
                itemPadding={itemPadding}
                itemStyle={itemStyle}
                horizontal={horizontal}
                r={pairs.map(ab => Number(ab[1]))}
                symbol={symbol}
                symbolStyle={symbolStyle}
                labelStyle={labelStyle}
                labelDistance={labelDistance}
                interactive={false}
                className={className}
                setRole={setRole}
            />
        </g>
    )
}

export const LegendSizeScale = (props: LegendSizeScaleProps) => (
    <UnthemedLegendSizeScale {...useThemedProps(props, 'LegendSizeScale')} />
)
