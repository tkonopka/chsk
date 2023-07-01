import { ReactNode, useMemo } from 'react'
import { LegendProps } from './types'
import { useContainer } from '../views'
import { getClassName, useThemedProps } from '../themes'
import {
    DimensionsProvider,
    getTranslate,
    NumericPositionSpec,
    SideVariant,
    X,
    Y,
    TOP,
    LEFT,
} from '../general'
import { useScales } from '../scales'
import { LegendColorScale } from './LegendColorScale'
import { defaultLegendProps } from './defaults'
import { LegendTitle } from './LegendTitle'
import { LegendItemList } from './LegendItemList'
import { LegendSizeScale } from './LegendSizeScale'
import { getContentPosition, getSizeEstimate } from './utils'

const UnthemedLegend = ({
    variant = 'list',
    // layout of container
    position = [1, 0.5],
    positionUnits = 'relative',
    size,
    sizeUnits = 'absolute',
    anchor = [0, 0],
    padding = defaultLegendProps.padding,
    offset = defaultLegendProps.offset,
    rx = defaultLegendProps.rx,
    ry = defaultLegendProps.ry,
    // organization of item list within the container
    itemSize = defaultLegendProps.itemSize,
    itemPadding = defaultLegendProps.itemPadding,
    itemStyle,
    horizontal = defaultLegendProps.horizontal,
    firstOffset = defaultLegendProps.firstOffset,
    title,
    titleStyle,
    // only for discrete items
    interactive = defaultLegendProps.interactive,
    disabledStyle = defaultLegendProps.disabledStyle,
    allowDisableAll = defaultLegendProps.allowDisableAll,
    r = defaultLegendProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelDistance = defaultLegendProps.labelDistance,
    // only for color scale
    scaleSize = defaultLegendProps.scaleSize,
    // only for size legends
    sizeTicks = 4,
    // general svg
    className,
    style,
    setRole = true,
    children,
}: LegendProps) => {
    const { scales } = useScales()
    const colorDomain = scales.color.domain().map(String)
    const n = colorDomain.length

    // position of title and first non-title item (in Legend DimensionsProvider)
    const titlePosition: NumericPositionSpec = padding ? [padding[LEFT], padding[TOP]] : [0, 0]
    const contentPosition = getContentPosition(
        titlePosition,
        itemSize,
        firstOffset,
        title,
        horizontal
    )
    // size and position of entire legend
    const hasTitle = title !== '' && title !== undefined
    const tooltipSize = useMemo(
        () => size ?? getSizeEstimate(padding, itemSize, n, firstOffset, hasTitle, horizontal),
        [size, padding, itemSize, n, firstOffset, hasTitle, horizontal]
    )
    const { origin, dimsProps } = useContainer({
        position,
        positionUnits,
        size: tooltipSize,
        sizeUnits,
        anchor,
        offset,
    })

    const sideVariant: SideVariant = horizontal ? 'bottom' : 'right'
    const commonProps = {
        variant: sideVariant,
        horizontal,
        position: contentPosition,
        className,
        setRole,
    }
    const listProps = {
        itemSize,
        itemPadding,
        itemStyle,
        symbol,
        symbolStyle,
        labelStyle,
        labelDistance,
        disabledStyle,
        allowDisableAll,
    }

    // legend content
    let content: ReactNode | null | ReactNode[] = null
    if (variant === 'list' && scales.color.variant === 'categorical') {
        const colorDomain = scales.color.domain().map(String)
        content = (
            <LegendItemList
                key={'legend-list'}
                {...commonProps}
                {...listProps}
                variant={'right'}
                keys={colorDomain}
                labels={colorDomain}
                interactive={interactive}
                r={Array(colorDomain.length).fill(r)}
            />
        )
    } else if (variant === 'color' && scales.color.variant !== 'categorical') {
        content = <LegendColorScale key={'legend-color-scale'} {...commonProps} size={scaleSize} />
    } else if (variant === 'size') {
        content = (
            <LegendSizeScale
                key={'legend-size-scale'}
                {...commonProps}
                {...listProps}
                ticks={sizeTicks}
            />
        )
    }

    return (
        <g
            role={setRole ? 'legend' : undefined}
            transform={getTranslate(origin)}
            className={className}
        >
            <DimensionsProvider {...dimsProps} role={setRole ? 'legend-content' : undefined}>
                {children ?? (
                    <>
                        <rect
                            key={'legend-surface'}
                            role={setRole ? 'legend-surface' : undefined}
                            x={0}
                            y={0}
                            width={tooltipSize[X]}
                            height={tooltipSize[Y]}
                            rx={rx}
                            ry={ry}
                            className={getClassName('legend surface', className)}
                            style={style}
                        />
                        <LegendTitle
                            key={'legend-title'}
                            variant={'right'}
                            position={titlePosition}
                            size={itemSize}
                            padding={itemPadding}
                            offset={[0, r]}
                            className={className}
                            style={titleStyle}
                            setRole={setRole}
                        >
                            {title}
                        </LegendTitle>
                        {content}
                    </>
                )}
            </DimensionsProvider>
        </g>
    )
}

export const Legend = (props: LegendProps) => (
    <UnthemedLegend {...useThemedProps(props, 'Legend')} />
)
