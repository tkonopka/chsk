import { BandAxisScale, Circle, useProcessedData, useScales } from '@chsk/core'
import { UpSetGridProps } from './types'
import { createElement } from 'react'
import { isUpSetProcessedData } from './predicates'

export const UpSetGrid = ({
    symbol = Circle,
    symbolStyle,
    className,
    setRole = false,
}: UpSetGridProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const data = processedData.data
    const horizontal = data[0].horizontal
    if (!isUpSetProcessedData(data)) return null

    const scaleIndex = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const scaleKeys = horizontal ? (scales.x as BandAxisScale) : (scales.y as BandAxisScale)
    const cellR = Math.min(scaleIndex.bandwidth(), scaleKeys.bandwidth()) / 2

    const cells = scaleIndex
        .domain()
        .map(id => {
            const idCoordinate = scaleIndex(id)
            return scaleKeys.domain().map(k => {
                const keyCoordinate = scaleKeys(k)
                return createElement(symbol, {
                    key: 'cell-' + id + '-' + k,
                    cx: horizontal ? keyCoordinate : idCoordinate,
                    cy: horizontal ? idCoordinate : keyCoordinate,
                    r: cellR,
                    className: className,
                    style: symbolStyle,
                    setRole,
                })
            })
        })
        .flat()
        .filter(Boolean)

    return <g role={'upset-grid'}>{cells}</g>
}
