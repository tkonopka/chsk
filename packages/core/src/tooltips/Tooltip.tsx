import { TooltipProps } from './types'
import { Surface, useView } from '../views'
import { composeClassName, useThemedProps } from '../themes'
import { DimensionsProvider, NumericPositionSpec } from '../general'
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
    size = [100, 20],
    sizeUnits = 'absolute',
    anchor = [1, 1],
    padding = [0, 0, 0, 0],
    // organization of items within the container
    itemSize = defaultTooltipProps.itemSize,
    itemPadding = defaultTooltipProps.itemPadding,
    horizontal = defaultTooltipProps.horizontal,
    firstOffset = defaultTooltipProps.firstOffset,
    // title
    title,
    titleStyle,
    // only for discrete items
    r = defaultTooltipProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset = defaultTooltipProps.labelOffset,
    // general svg
    className,
    style,
    setRole = true,
    children,
}: TooltipProps) => {
    const tooltip = useTooltip()
    const { x, y, dimsProps } = useView({
        position,
        positionUnits,
        size,
        sizeUnits,
        anchor,
        padding,
    })
    // position of first non-title item/element of the legend content
    const pos: NumericPositionSpec = [0, 0]
    const step = horizontal ? [itemSize[0], 0] : [0, itemSize[1]]
    if (title) {
        pos[0] += step[0] + firstOffset[0]
        pos[1] += step[1] + firstOffset[1]
    }

    const sideVariant: SideType = horizontal ? 'bottom' : 'right'
    const compositeClassName = composeClassName(['tooltip', className])
    const data = tooltip.data ?? []
    const offsetX = tooltip.x ?? 0
    const offsetY = tooltip.y ?? 0
    const config = { x: x + offsetX, y: y + offsetY, originX: '0px', originY: '0px' }

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
                            <Surface
                                key={'tooltip-content-surface'}
                                variant={'inner'}
                                className={'tooltip'}
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
