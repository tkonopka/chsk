import { m } from 'framer-motion'
import {
    DimensionsProvider,
    LEFT,
    NumericPositionSpec,
    SideVariant,
    TOP,
    X,
    Y,
    zeroPadding,
    zeroPosition,
} from '../general'
import { OpacityMotion } from '../charts'
import { getClassName } from '../themes'
import { LegendProps } from '../legends'
import { defaultTooltipProps } from './defaults'
import { TooltipDataItem } from './types'
import { guessLabel } from './utils'
import { TooltipTitle } from './TooltipTitle'
import { TooltipItemList } from './TooltipItemList'

import { useTooltip } from './contexts'

type TooltipContentProps = Omit<
    LegendProps,
    | 'variant'
    | 'positionUnits'
    | 'size'
    | 'sizeUnits'
    | 'anchor'
    | 'scaleSize'
    | 'sizeTicks'
    | 'interactive'
> & {
    /** tooltip type */
    variant: SideVariant
    /** size */
    size: NumericPositionSpec
    /** horizontal corner radius */
    rx?: number
    /** vertical corner radius */
    ry?: number
    /** construction of label */
    labelFormat?: null | ((d: TooltipDataItem) => string)
    /** data */
    data: TooltipDataItem[]
}

export const BaseTooltip = ({
    // specific to BaseTooltip
    variant = 'right',
    position = [0, 0], // absolute position for DimensionProvider
    data = [],
    // props from Tooltip
    size = zeroPosition,
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
}: TooltipContentProps) => {
    const { data: tooltip } = useTooltip()

    // relative position of first non-title item
    const titlePosition: NumericPositionSpec = [padding[LEFT], padding[TOP]]
    const itemsPosition: NumericPositionSpec = [padding[LEFT], padding[TOP]]
    const step = horizontal ? [itemSize[0], 0] : [0, itemSize[1]]
    if (title) {
        itemsPosition[0] += step[0] + firstOffset[0]
        itemsPosition[1] += step[1] + firstOffset[1]
    }

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
            {labelFormat ? (
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
            ) : null}
        </>
    )

    const compositeClassName = getClassName('tooltip', className)
    const config = {
        x: position[X],
        y: position[Y],
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
                <DimensionsProvider
                    size={size}
                    padding={padding}
                    role={setRole ? 'tooltip-content' : undefined}
                >
                    {content}
                </DimensionsProvider>
            </m.g>
        </OpacityMotion>
    )
}