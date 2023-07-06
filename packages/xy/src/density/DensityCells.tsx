import { createElement, useMemo } from 'react'
import { createAxisScale, NumericAxisScale, X, Y } from '@chsk/core'
import { DENSITY_COLOR, DENSITY_COUNT, DensityCellsProps, DensityPreparedDataItem } from './types'
import { useDensityPreparedData } from './context'
import { DensitySimpleCell } from './DensitySimpleCell'

const max = Math.max

const alphaScale: NumericAxisScale = createAxisScale({
    variant: 'sqrt',
    domain: [0, 1],
    size: 1,
}) as NumericAxisScale

export const DensityCells = ({
    component = DensitySimpleCell,
    componentProps,
    transparency = true,
    className,
    style,
    setRole = true,
}: DensityCellsProps) => {
    const { data, binSize } = useDensityPreparedData()
    const maxCount = useMemo(
        () => data.reduce((acc, item) => max(acc, item[DENSITY_COUNT]), 1),
        [data]
    )

    const commonProps = { ...componentProps, className }
    const elements = data.map((item: DensityPreparedDataItem) => {
        const x = item[X]
        const y = item[Y]
        const value = item[DENSITY_COUNT]
        const opacity = transparency || value === 0 ? alphaScale(value / maxCount) : 1
        const fill = item[DENSITY_COLOR]
        return createElement(component, {
            key: x + '-' + y,
            ...commonProps,
            value,
            x: x * binSize,
            y: y * binSize,
            width: binSize,
            height: binSize,
            style: { fill, opacity },
        })
    })

    return (
        <g role={setRole ? 'density-cells' : undefined} style={style}>
            {elements}
        </g>
    )
}
