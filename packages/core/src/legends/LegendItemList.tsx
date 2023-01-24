import { NumericPositionSpec } from '../general'
import { LegendItem } from './LegendItem'
import { defaultLegendProps } from './defaults'
import { getItemPositions } from './positions'
import { LegendItemListProps } from './types'
import { useThemedProps } from '../themes'

const UnthemedLegendItemList = ({
    variant,
    position,
    items,
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
    const { itemPosition, itemS, symbolPosition, labelPosition } = getItemPositions(
        variant,
        position,
        horizontal,
        itemSize,
        itemPadding,
        labelOffset,
        r ?? Array(items?.length).fill(1)
    )

    const content = itemPosition.map((pos: NumericPositionSpec, i: number) => {
        return (
            <LegendItem
                variant={variant}
                key={'legend-item-' + i}
                position={pos}
                size={itemS[i]}
                padding={itemPadding}
                r={r ? r[i] : 1}
                symbol={symbol}
                symbolPosition={symbolPosition[i]}
                symbolStyle={symbolStyle}
                item={items ? items[i] : ''}
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
