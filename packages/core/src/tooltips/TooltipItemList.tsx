import { isArray, NumericPositionSpec } from '../general'
import { TooltipItem } from './TooltipItem'
import { defaultTooltipProps } from './defaults'
import { TooltipItemListProps } from './types'
import { useThemedProps } from '../themes'
import { getItemPositions } from '../legends/utils'

const UnthemedTooltipItemList = ({
    variant,
    position,
    ids,
    keys,
    labels,
    colors,
    // organization of items within the container
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    itemStyle,
    horizontal = defaultTooltipProps.horizontal,
    r = defaultTooltipProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelDistance = defaultTooltipProps.labelDistance,
    //
    className,
    setRole = true,
}: TooltipItemListProps) => {
    const rs = isArray(r) ? r : Array(keys?.length ?? 1).fill(r)
    const {
        itemPosition,
        itemSize: itemSizes,
        symbolPosition,
        labelPosition,
    } = getItemPositions(variant, position, horizontal, itemSize, itemPadding, labelDistance, rs)

    const content = itemPosition.map((pos: NumericPositionSpec, i: number) => {
        return (
            <TooltipItem
                variant={variant}
                key={'tooltip-item-' + i + '-' + ids?.[i]}
                position={pos}
                size={itemSizes[i]}
                padding={itemPadding}
                r={rs[i]}
                symbol={symbol}
                symbolPosition={symbolPosition[i]}
                symbolStyle={symbolStyle}
                item={keys ? keys[i] : ''}
                color={colors ? colors[i] : undefined}
                label={labels ? labels[i] : ''}
                labelPosition={labelPosition[i]}
                labelStyle={labelStyle}
                labelDistance={labelDistance}
                className={className}
                style={itemStyle}
                setRole={setRole}
            />
        )
    })

    return <>{content}</>
}

export const TooltipItemList = (props: TooltipItemListProps) => (
    <UnthemedTooltipItemList {...useThemedProps(props, 'TooltipItemList')} />
)
