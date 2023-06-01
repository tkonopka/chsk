import { createElement, useMemo } from 'react'
import { X, Y } from '@chsk/core'
import { DENSITY_COLOR, DENSITY_COUNT, DensityCellsProps, DensityPreparedDataItem } from './types'
import { useDensityPreparedData } from './context'
import { toHex } from './utils'
import { DensitySimpleCell } from './DensitySimpleCell'

const max = Math.max

export const DensityCells = ({
    cell = DensitySimpleCell,
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

    const elements = data.map((item: DensityPreparedDataItem) => {
        const x = item[X]
        const y = item[Y]
        const value = item[DENSITY_COUNT]
        const cellAlpha = transparency || value === 0 ? toHex((255 * value) / maxCount) : ''
        const fill = item[DENSITY_COLOR] + cellAlpha
        return createElement(cell, {
            key: 'cell-' + x + '-' + y,
            value,
            x: x * binSize,
            y: y * binSize,
            width: binSize,
            height: binSize,
            className: className,
            style: { fill },
        })
    })

    return (
        <g role={setRole ? 'density-cells' : undefined} style={style}>
            {elements}
        </g>
    )
}
