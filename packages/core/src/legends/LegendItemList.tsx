import { NumericPositionSpec } from '../general'
import { LegendItem } from './LegendItem'
import { defaultLegendProps } from './defaults'
import { getItemPositions } from './utils'
import { LegendItemListProps } from './types'
import { useThemedProps } from '../themes'

const UnthemedLegendItemList = ({
    variant,
    position,
    keys,
    labels,
    // organization of items within the container
    itemSize = defaultLegendProps.itemSize,
    itemPadding = defaultLegendProps.itemPadding,
    itemStyle,
    horizontal = defaultLegendProps.horizontal,
    r = defaultLegendProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelDistance = defaultLegendProps.labelDistance,
    //
    interactive = defaultLegendProps.interactive,
    className,
    setRole = true,
}: LegendItemListProps) => {
    const rs = Array.isArray(r) ? r : Array(keys?.length ?? 1).fill(r)
    const {
        itemPosition,
        itemSize: itemSizes,
        symbolPosition,
        labelPosition,
    } = getItemPositions(variant, position, horizontal, itemSize, itemPadding, labelDistance, rs)

    const content = itemPosition.map((pos: NumericPositionSpec, i: number) => {
        return (
            <LegendItem
                variant={variant}
                key={'legend-item-' + i}
                position={pos}
                size={itemSizes[i]}
                padding={itemPadding}
                r={rs[i]}
                symbol={symbol}
                symbolPosition={symbolPosition[i]}
                symbolStyle={symbolStyle}
                item={keys ? keys[i] : ''}
                label={labels ? labels[i] : ''}
                labelPosition={labelPosition[i]}
                labelStyle={labelStyle}
                labelDistance={labelDistance}
                interactive={interactive}
                className={className}
                style={itemStyle}
                setRole={setRole}
            />
        )
    })

    return <>{content}</>
}

export const LegendItemList = (props: LegendItemListProps) => (
    <UnthemedLegendItemList {...useThemedProps(props, 'LegendItemList')} />
)
