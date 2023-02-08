import { m } from 'framer-motion'
import { OpacityMotion } from '../charts'
import { useView } from '../views'
import { getClassName, useThemedProps } from '../themes'
import { DimensionsProvider, NumericPositionSpec, SideVariant, zeroPadding } from '../general'
import { X, Y, LEFT, RIGHT, TOP, BOTTOM } from '../general'
import { defaultTooltipProps } from './defaults'
import { TooltipTitle } from './TooltipTitle'
import { TooltipItemList } from './TooltipItemList'
import { useTooltip } from './contexts'
import { guessLabel } from './utils'
import { TooltipProps } from './types'

const UnthemedTooltip = ({
    // layout of container
    position = defaultTooltipProps.position,
    positionUnits = 'absolute',
    size,
    sizeUnits = 'absolute',
    anchor = defaultTooltipProps.anchor,
    padding = zeroPadding,
    rx = defaultTooltipProps.rx,
    ry = defaultTooltipProps.ry,
    // organization of items within the container
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    horizontal = defaultTooltipProps.horizontal,
    firstOffset = defaultTooltipProps.firstOffset,
    // title and items
    title,
    titleStyle,
    titleFormat,
    r = defaultTooltipProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset = defaultTooltipProps.labelOffset,
    labelFormat = guessLabel,
    //
    className,
    style,
    setRole = true,
    children,
}: TooltipProps) => {
    const { data: tooltip } = useTooltip()
    const data = tooltip.data ?? []
    const n = data.length
    title = title ?? (titleFormat ? titleFormat(tooltip) : tooltip.title)
    const sizeMultiplier = horizontal ? [n + (title ? 1 : 0), 1] : [1, n + (title ? 1 : 0)]
    size = size ?? [
        itemSize[X] * sizeMultiplier[X] + firstOffset[X] + padding[LEFT] + padding[RIGHT],
        itemSize[Y] * sizeMultiplier[Y] + firstOffset[Y] + padding[TOP] + padding[BOTTOM],
    ]
    const { x, y, dimsProps } = useView({
        position,
        positionUnits,
        size,
        sizeUnits,
        anchor,
    })
    // position of first non-title item
    const titlePosition: NumericPositionSpec = [padding[LEFT], padding[TOP]]
    const itemsPosition: NumericPositionSpec = [padding[LEFT], padding[TOP]]
    const step = horizontal ? [itemSize[0], 0] : [0, itemSize[1]]
    if (title) {
        itemsPosition[0] += step[0] + firstOffset[0]
        itemsPosition[1] += step[1] + firstOffset[1]
    }
    const variant: SideVariant = horizontal ? 'bottom' : 'right'
    const compositeClassName = getClassName('tooltip', className)

    const content = children ? (
        children
    ) : (
        <>
            <rect
                key={'tooltip-surface'}
                role={setRole ? 'tooltip-surface' : undefined}
                x={0}
                y={0}
                width={size[X]}
                height={size[Y]}
                rx={rx}
                ry={ry}
                className={getClassName('tooltip surface', className)}
                style={style}
            />
            <TooltipTitle
                key={'tooltip-title'}
                variant={variant}
                position={titlePosition}
                size={itemSize}
                padding={itemPadding}
                translate={[0, r]}
                style={titleStyle}
            >
                {title}
            </TooltipTitle>
            <TooltipItemList
                key={'tooltip-list'}
                variant={variant}
                horizontal={horizontal}
                position={itemsPosition}
                ids={data.map(item => item.id)}
                keys={data.map(item => item.key ?? item.id)}
                labels={data.map(item => labelFormat(item))}
                colors={data.map(item => item.color)}
                itemSize={itemSize}
                itemPadding={itemPadding}
                r={Array(data.length).fill(r)}
                symbol={symbol}
                symbolStyle={symbolStyle}
                labelStyle={labelStyle}
                labelOffset={labelOffset}
                setRole={setRole}
            />
        </>
    )

    const config = {
        x: x + (tooltip.x ?? 0),
        y: y + (tooltip.y ?? 0),
        originX: '0px',
        originY: '0px',
    }
    return (
        <OpacityMotion
            role={'tooltip-presence'}
            visible={tooltip.x !== undefined && tooltip.y !== undefined}
            firstRender={false}
        >
            <m.g
                role={setRole ? 'tooltip' : undefined}
                initial={config}
                animate={config}
                className={compositeClassName}
            >
                <DimensionsProvider {...dimsProps} role={setRole ? 'tooltip-content' : undefined}>
                    {content}
                </DimensionsProvider>
            </m.g>
        </OpacityMotion>
    )
}

export const Tooltip = (props: TooltipProps) => (
    <UnthemedTooltip {...useThemedProps(props, 'Tooltip')} />
)
