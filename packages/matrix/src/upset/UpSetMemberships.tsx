import { UpSetMembershipsProps } from './types'
import { BandAxisScale, useProcessedData, useScales } from '@chsk/core'
import { createElement } from 'react'
import { isUpSetProcessedData } from './predicates'
import { UpSetMembership } from './UpSetMembership'

export const UpSetMemberships = ({
    component = UpSetMembership,
    symbol,
    line,
    symbolStyle,
    lineStyle,
    // interactive,
    className,
    setRole,
}: UpSetMembershipsProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const data = processedData.data
    const horizontal = data[0].horizontal
    if (!isUpSetProcessedData(data)) return null

    const scaleIndex = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const scaleKeys = horizontal ? (scales.x as BandAxisScale) : (scales.y as BandAxisScale)
    const r = Math.min(scaleIndex.bandwidth(), scaleKeys.bandwidth()) / 2
    const ids = data.map(x => x.id)

    const cells = processedData.keys.map((k, i) => {
        let positions: [number, number][] = []
        ids.map((seriesId, seriesIndex) => {
            const value = data[seriesIndex].data[i]
            if (value > 0) {
                positions.push([scaleIndex(seriesId), scaleKeys(k)])
            }
        })
        if (horizontal) {
            positions = positions.map(x => [x[1], x[0]])
        }
        return createElement(component, {
            key: 'membership-' + k,
            positions,
            r,
            symbol,
            symbolStyle,
            line,
            lineStyle,
            className,
            setRole,
        })
    })

    return <g role={'upset-memberships'}>{cells}</g>
}
