import { ReactNode } from 'react'
import { LegendProps } from './types'
import { useProcessedData, useView } from '../views'
import { LegendTitle } from './LegendTitle'
import { themedProps } from '../themes'
import { LegendItem } from './LegendItem'
import { DimensionsProvider, NumericPositionSpec } from '../general'
import { useScales } from '../scales'
import { LegendColorScale } from './LegendColorScale'
import { defaultLegendProps } from './defaults'

export const UnthemedLegend = ({
    variant = 'list',
    // layout of container
    position = [1, 0.5],
    units = 'relative',
    size = [0.2, 0.5],
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // organization of items within the container
    itemSize = defaultLegendProps.itemSize,
    itemPadding = defaultLegendProps.itemPadding,
    align = defaultLegendProps.align,
    horizontal = defaultLegendProps.horizontal,
    firstOffset = defaultLegendProps.firstOffset,
    // title
    title,
    titleStyle,
    // only for discrete items
    r = defaultLegendProps.r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset = defaultLegendProps.labelOffset,
    // only for color scale
    scaleSize = defaultLegendProps.scaleSize,
    // general svg
    className,
    style,
    setRole = true,
    children,
}: LegendProps) => {
    const scales = useScales()
    const data = useProcessedData()
    const { translate, dimsProps } = useView({ position, size, units, anchor, padding })

    // book-keeping for position of legend item position
    const pos: NumericPositionSpec = [0, 0]
    const step = horizontal ? [itemSize[0], 0] : [0, itemSize[1]]
    if (title) {
        pos[0] += step[0] + firstOffset[0]
        pos[1] += step[1] + firstOffset[1]
    }

    // legend content
    let content: ReactNode | null | ReactNode[] = null
    if (variant === 'list' && scales.color.variant === 'categorical') {
        content = data.keys.map((k: string, i: number) => {
            return (
                <LegendItem
                    variant={'legend-item'}
                    key={'legend-item-' + i}
                    position={[pos[0] + i * step[0], pos[1] + i * step[1]]}
                    size={itemSize}
                    padding={itemPadding}
                    align={align}
                    r={r}
                    symbol={symbol}
                    symbolStyle={symbolStyle}
                    label={k}
                    labelStyle={labelStyle}
                    labelOffset={labelOffset}
                    colorIndex={i}
                    setRole={setRole}
                />
            )
        })
    } else if (variant === 'color' && scales.color.variant !== 'categorical') {
        content = (
            <LegendColorScale
                key={'legend-color-scale'}
                variant={horizontal ? 'bottom' : 'right'}
                size={scaleSize}
                padding={itemPadding}
                position={pos}
            />
        )
    }

    return (
        <DimensionsProvider {...dimsProps}>
            <g
                role={setRole ? 'legend' : undefined}
                transform={translate}
                style={style}
                className={className}
            >
                {children ? (
                    children
                ) : (
                    <>
                        <LegendTitle
                            key={'legend-title'}
                            variant={'legend-title'}
                            position={[0, 0]}
                            size={itemSize}
                            padding={itemPadding}
                            translate={[0, r]}
                            align={align}
                            style={titleStyle}
                            setRole={setRole}
                        >
                            {title}
                        </LegendTitle>
                        {content}
                    </>
                )}
            </g>
        </DimensionsProvider>
    )
}

export const Legend = (props: LegendProps) => <UnthemedLegend {...themedProps(props, 'Legend')} />
