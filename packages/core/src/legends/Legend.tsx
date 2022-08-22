import { ReactNode } from 'react'
import { LegendProps } from './types'
import { useProcessedData, useView } from '../views'
import { LegendTitle } from './LegendTitle'
import { useTheme } from '../themes'
import { LegendItem } from './LegendItem'
import {DimensionsProvider, NumericPositionSpec} from '../general'
import { useScales } from '../scales'
import {LegendColorScale} from "./LegendColorScale";

export const Legend = ({
    variant = 'list',
    // layout of container
    position = [1, 0.5],
    units = 'relative',
    size = [0.2, 0.5],
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // organization of items within the container
    itemSize,
    itemPadding,
    align,
    horizontal = false,
    firstOffset,
    // title
    title,
    titleStyle,
    // only for discrete items
    r,
    symbol,
    symbolStyle,
    labelStyle,
    labelOffset,
    // only for color scale
    scaleSize,
    // general svg
    className,
    style,
    setRole = true,
    children,
}: LegendProps) => {
    const theme = useTheme().Legend
    const scales = useScales()
    const data = useProcessedData()
    const { translate, dimsProps } = useView({ position, size, units, anchor, padding })

    // settings from props (preferred) or from theme
    const iSize = itemSize ?? theme.itemSize
    const sSize = scaleSize ?? theme.scaleSize
    const fOffset = firstOffset ?? theme.firstOffset
    const lOffset = labelOffset ?? theme.labelOffset
    const symbolR = r ?? theme.r

    // book-keeping for position of legend item position
    const pos: NumericPositionSpec = [0, 0]
    const step = horizontal ? [iSize[0], 0] : [0, iSize[1]]
    if (title) {
        pos[0] += step[0] + fOffset[0]
        pos[1] += step[1] + fOffset[1]
    }

    // legend content
    let content: ReactNode | null | ReactNode[] = null
    console.log("Legend variant: "+variant)
    console.log("scale variant: "+scales.color.variant)
    if (variant === 'list' && scales.color.variant === 'categorical') {
        content = data.keys.map((k: string, i: number) => {
            return (
                <LegendItem
                    key={'legend-item-' + i}
                    position={[pos[0] + i * step[0], pos[1] + i * step[1]]}
                    size={itemSize}
                    padding={itemPadding}
                    align={align}
                    r={symbolR}
                    symbol={symbol}
                    symbolStyle={symbolStyle}
                    label={k}
                    labelStyle={labelStyle}
                    labelOffset={lOffset}
                    colorIndex={i}
                    setRole={setRole}
                />
            )
        })
    } else if (variant === 'color' && scales.color.variant !== 'categorical') {
        console.log("Legend color with variant "+scales.color.variant)
        content = (
            <LegendColorScale
                key={'legend-color-scale'}
                size={sSize}
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
                            position={[0, 0]}
                            size={itemSize}
                            padding={itemPadding}
                            translate={[0, symbolR]}
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
