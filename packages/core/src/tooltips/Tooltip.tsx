import { TooltipProps } from './types'
import { useView } from '../views'
import { composeClassName, useThemedProps } from '../themes'
import { DimensionsProvider, WIDTH, HEIGHT, NumericPositionSpec, X, Y } from '../general'
import { defaultTooltipProps } from './defaults'
import { SideType } from '../axes'
import { TooltipTitle } from './TooltipTitle'
import { TooltipItemList } from './TooltipItemList'
import { m } from 'framer-motion'
import { useTooltip } from './contexts'
import { OpacityMotion } from '../motion'

const UnthemedTooltip = ({
    // layout of container
    position = [0, 0],
    positionUnits = 'absolute',
    size,
    sizeUnits = 'absolute',
    anchor = [1, 1],
    padding = [0, 0, 0, 0],
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
    r = defaultTooltipProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset = defaultTooltipProps.labelOffset,
    //
    className,
    style,
    setRole = true,
    children,
}: TooltipProps) => {
    const tooltip = useTooltip()
    const data = tooltip.data ?? []
    const n = data.length
    const sizeMultiplier = horizontal ? [n + (title ? 1 : 0), 1] : [1, n + (title ? 1 : 0)]
    size = size ?? [
        itemSize[X] * sizeMultiplier[X] + firstOffset[X],
        itemSize[Y] * sizeMultiplier[Y] + firstOffset[Y],
    ]
    const { x, y, dimsProps } = useView({
        position,
        positionUnits,
        size,
        sizeUnits,
        anchor,
        padding,
    })
    // position of first non-title item
    const pos: NumericPositionSpec = [0, 0]
    const step = horizontal ? [itemSize[0], 0] : [0, itemSize[1]]
    if (title) {
        pos[0] += step[0] + firstOffset[0]
        pos[1] += step[1] + firstOffset[1]
    }
    const sideVariant: SideType = horizontal ? 'bottom' : 'right'
    const compositeClassName = composeClassName(['tooltip', className])

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
                <DimensionsProvider {...dimsProps}>
                    {children ? (
                        children
                    ) : (
                        <>
                            <rect
                                key={'tooltip-surface'}
                                role={setRole ? 'tooltip-surface' : undefined}
                                x={0}
                                y={0}
                                width={size[WIDTH]}
                                height={size[HEIGHT]}
                                rx={rx}
                                ry={ry}
                                className={compositeClassName}
                                style={style}
                            />
                            <TooltipTitle
                                key={'tooltip-title'}
                                variant={'right'}
                                position={[0, 0]}
                                size={itemSize}
                                padding={itemPadding}
                                translate={[0, r]}
                                style={titleStyle}
                                setRole={setRole}
                            >
                                {title}
                            </TooltipTitle>
                            <TooltipItemList
                                key={'tooltip-list'}
                                variant={sideVariant}
                                horizontal={horizontal}
                                position={pos}
                                items={data.map(item => item.key)}
                                labels={data.map(item => item.label)}
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
                    )}
                </DimensionsProvider>
            </m.g>
        </OpacityMotion>
    )
}

export const Tooltip = (props: TooltipProps) => (
    <UnthemedTooltip {...useThemedProps(props, 'Tooltip')} />
)
