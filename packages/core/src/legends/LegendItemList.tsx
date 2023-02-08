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
    horizontal = defaultLegendProps.horizontal,
    r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset = defaultLegendProps.labelOffset,
    //
    interactive = defaultLegendProps.interactive,
    className,
    style,
    setRole = true,
}: LegendItemListProps) => {
    const rs = r ?? Array(keys?.length ?? 1).fill(r)
    const {
        itemPosition,
        itemSize: itemSizes,
        symbolPosition,
        labelPosition,
    } = getItemPositions(variant, position, horizontal, itemSize, itemPadding, labelOffset, rs)

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
                labelOffset={labelOffset}
                interactive={interactive}
                className={className}
                style={style}
                setRole={setRole}
            />
        )
    })

    return <>{content}</>
}

export const LegendItemList = (props: LegendItemListProps) => (
    <UnthemedLegendItemList {...useThemedProps(props, 'LegendItemList')} />
)
