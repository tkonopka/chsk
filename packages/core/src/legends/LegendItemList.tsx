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
    itemSize = defaultLegendProps.itemSize,
    itemPadding = defaultLegendProps.itemPadding,
    itemStyle,
    horizontal = defaultLegendProps.horizontal,
    r = defaultLegendProps.r,
    labelDistance = defaultLegendProps.labelDistance,
    ...props
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
                {...props}
                key={'item-' + i}
                position={pos}
                size={itemSizes[i]}
                padding={itemPadding}
                r={rs[i]}
                symbolPosition={symbolPosition[i]}
                item={keys ? keys[i] : ''}
                label={labels ? labels[i] : ''}
                labelPosition={labelPosition[i]}
                labelDistance={labelDistance}
                style={itemStyle}
            />
        )
    })

    return <>{content}</>
}

export const LegendItemList = (props: LegendItemListProps) => (
    <UnthemedLegendItemList {...useThemedProps(props, 'LegendItemList')} />
)
