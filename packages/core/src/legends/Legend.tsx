import { ReactNode } from 'react'
import { LegendProps } from './types'
import { useView } from '../views'
import { LegendTitle } from './LegendTitle'
import { useThemedProps } from '../themes'
import {
    DimensionsProvider,
    NumericPositionSpec,
    SideVariant,
    zeroPadding,
    zeroPosition,
} from '../general'
import { useScales } from '../scales'
import { LegendColorScale } from './LegendColorScale'
import { defaultLegendProps } from './defaults'
import { LegendItemList } from './LegendItemList'
import { LegendSizeScale } from './LegendSizeScale'

const UnthemedLegend = ({
    variant = 'list',
    // layout of container
    position = [1, 0.5],
    positionUnits = 'relative',
    size = [0.2, 0.5],
    sizeUnits = 'relative',
    anchor = [0, 0],
    padding = zeroPadding,
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
    const { translate, dimsProps } = useView({
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

    const sideVariant: SideVariant = horizontal ? 'bottom' : 'right'
    const vhp = { variant: sideVariant, horizontal, position: pos }

    // legend content
    let content: ReactNode | null | ReactNode[] = null
    if (variant === 'list' && scales.color.variant === 'categorical') {
        const colorDomain = scales.color.domain().map(String)
        content = (
            <LegendItemList
                key={'legend-list'}
                {...vhp}
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
                setRole={setRole}
            />
        )
    } else if (variant === 'color' && scales.color.variant !== 'categorical') {
        content = (
            <LegendColorScale
                key={'legend-color-scale'}
                {...vhp}
                size={scaleSize}
                padding={itemPadding}
            />
        )
    } else if (variant === 'size') {
        content = (
            <LegendSizeScale
                key={'legend-size-scale'}
                {...vhp}
                itemSize={itemSize}
                itemPadding={itemPadding}
                ticks={sizeTicks}
                symbol={symbol}
                symbolStyle={symbolStyle}
                labelStyle={labelStyle}
                labelOffset={labelOffset}
                setRole={setRole}
            />
        )
    }

    return (
        <g
            role={setRole ? 'legend' : undefined}
            transform={translate}
            style={style}
            className={className}
        >
            <DimensionsProvider {...dimsProps} role={setRole ? 'legend-content' : undefined}>
                {children ? (
                    children
                ) : (
                    <>
                        <LegendTitle
                            key={'legend-title'}
                            variant={'right'}
                            position={zeroPosition}
                            size={itemSize}
                            padding={itemPadding}
                            translate={[0, r]}
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
