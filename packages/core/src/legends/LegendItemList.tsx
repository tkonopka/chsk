import {
    BOTTOM,
    FourSideSizeSpec,
    LEFT,
    NumericPositionSpec,
    RIGHT,
    SizeSpec,
    TOP,
    X,
    Y,
} from '../general'
import { LegendItem } from './LegendItem'
import { defaultLegendProps } from './defaults'
import { LegendItemListProps } from './types'
import { useThemedProps } from '../themes'
import { SideType } from '../axes'
import { getMinMax } from '../scales'

// compute absolute positions for item bounding rectangles, symbols, and labels
const getLegendItemPositions = (
    variant: SideType,
    position: NumericPositionSpec,
    horizontal: boolean,
    itemSize: SizeSpec,
    itemPadding: FourSideSizeSpec,
    labelOffset: number,
    symbolSizes: number[]
) => {
    // shorthand and book-keeping
    const pad = itemPadding
    const stepSize = horizontal ? itemSize[0] : itemSize[1]
    const stepPadding = horizontal ? pad[LEFT] + pad[RIGHT] : pad[TOP] + pad[BOTTOM]
    const step: NumericPositionSpec = horizontal ? [stepSize, 0] : [0, stepSize]
    const stepMultiplier = horizontal ? [1, 0] : [0, 1]
    const maxSize: number = getMinMax(symbolSizes)[1]
    const centerX = pad[LEFT] + (itemSize[X] - pad[LEFT] - pad[RIGHT]) / 2

    const itemPosition: NumericPositionSpec[] = []
    const itemS: NumericPositionSpec[] = []
    const labelPosition: NumericPositionSpec[] = []
    const symbolPosition: NumericPositionSpec[] = []
    const pos = [position[0], position[1]]
    symbolSizes.map((s, i) => {
        const r = symbolSizes[i]
        const extraStep = Math.max(0, 2 * r + stepPadding - stepSize)
        itemPosition.push([pos[X], pos[Y]])
        pos[X] += step[X] + extraStep * stepMultiplier[X]
        pos[Y] += step[Y] + extraStep * stepMultiplier[Y]
        const symbolPos: [number, number] = [maxSize + pad[LEFT], r + pad[TOP]]
        const labelPos: [number, number] = [2 * maxSize + pad[LEFT] + labelOffset, r + pad[TOP]]
        if (variant === 'left') {
            symbolPos[X] = itemSize[X] - maxSize - pad[RIGHT]
            labelPos[X] = symbolPos[X] - maxSize - labelOffset
        } else if (variant === 'top') {
            symbolPos[X] = centerX
            symbolPos[Y] = maxSize + pad[TOP]
            labelPos[X] = centerX
            labelPos[Y] = pad[TOP] - labelOffset
        } else if (variant === 'bottom') {
            symbolPos[X] = centerX
            symbolPos[Y] = maxSize + pad[TOP]
            labelPos[X] = centerX
            labelPos[Y] = 2 * maxSize + pad[TOP] + labelOffset
        }
        symbolPosition.push(symbolPos)
        labelPosition.push(labelPos)
        itemS.push([
            itemSize[X] + extraStep * stepMultiplier[X],
            itemSize[Y] + extraStep * stepMultiplier[Y],
        ])
    })
    return { itemPosition, itemS, labelPosition, symbolPosition }
}

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
    setRole = true,
}: LegendItemListProps) => {
    const { itemPosition, itemS, symbolPosition, labelPosition } = getLegendItemPositions(
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
                colorIndex={i}
                interactive={interactive}
                className={className}
                setRole={setRole}
            />
        )
    })

    return <>{content}</>
}

export const LegendItemList = (props: LegendItemListProps) => (
    <UnthemedLegendItemList {...useThemedProps(props, 'LegendItemList')} />
)
