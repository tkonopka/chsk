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
    translate = defaultLegendProps.translate,
    rx = defaultLegendProps.rx,
    ry = defaultLegendProps.ry,
    // organization of items within the container
    itemSize = defaultLegendProps.itemSize,
    itemPadding = defaultLegendProps.itemPadding,
    horizontal = defaultLegendProps.horizontal,
    firstOffset = defaultLegendProps.firstOffset,
    // title
    title,
    titleStyle,
    // only for discrete items
    interactive = defaultLegendProps.interactive,
    r = defaultLegendProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset = defaultLegendProps.labelOffset,
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
    const scales = useScales()
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
    const { x, y, dimsProps } = useContainer({
        position,
        positionUnits,
        size: tooltipSize,
        sizeUnits,
        anchor,
    })

    const sideVariant: SideVariant = horizontal ? 'bottom' : 'right'
    const commonProps = {
        variant: sideVariant,
        horizontal,
        position: contentPosition,
        className,
        setRole,
    }

    // legend content
    let content: ReactNode | null | ReactNode[] = null
    if (variant === 'list' && scales.color.variant === 'categorical') {
        const colorDomain = scales.color.domain().map(String)
        content = (
            <LegendItemList
                key={'legend-list'}
                {...commonProps}
                variant={'right'}
                keys={colorDomain}
                labels={colorDomain}
                interactive={interactive}
                itemSize={itemSize}
                itemPadding={itemPadding}
                r={Array(colorDomain.length).fill(r)}
                symbol={symbol}
                symbolStyle={symbolStyle}
                labelStyle={labelStyle}
                labelOffset={labelOffset}
            />
        )
    } else if (variant === 'color' && scales.color.variant !== 'categorical') {
        content = <LegendColorScale key={'legend-color-scale'} {...commonProps} size={scaleSize} />
    } else if (variant === 'size') {
        content = (
            <LegendSizeScale
                key={'legend-size-scale'}
                {...commonProps}
                itemSize={itemSize}
                itemPadding={itemPadding}
                ticks={sizeTicks}
                symbol={symbol}
                symbolStyle={symbolStyle}
                labelStyle={labelStyle}
                labelOffset={labelOffset}
            />
        )
    }

    return (
        <g
            role={setRole ? 'legend' : undefined}
            transform={getTranslate(x + translate[X], y + translate[Y])}
            className={className}
        >
            <DimensionsProvider {...dimsProps} role={setRole ? 'legend-content' : undefined}>
                {children ? (
                    children
                ) : (
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
                            translate={[0, r]}
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
