import { UpSetMembershipsProps } from './types'
import {
    addColor,
    BandAxisScale,
    CategoricalColorScale,
    useProcessedData,
    useScales,
} from '@chsk/core'
import { createElement } from 'react'
import { isUpSetProcessedData } from './predicates'
import { UpSetMembership } from './UpSetMembership'

export const UpSetMemberships = ({
    component = UpSetMembership,
    componentProps,
    symbol,
    line,
    symbolStyle,
    lineStyle,
    style,
    className,
    setRole = true,
}: UpSetMembershipsProps) => {
    const processedData = useProcessedData()
    const { scales } = useScales()
    const data = processedData.data
    if (!isUpSetProcessedData(data) || data.length == 0) return null
    const horizontal = data[0]?.horizontal
    const scaleIndex = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const scaleKeys = horizontal ? (scales.x as BandAxisScale) : (scales.y as BandAxisScale)
    const scaleColor = scales.color as CategoricalColorScale
    const r = Math.min(scaleIndex.bandwidth(), scaleKeys.bandwidth()) / 2
    const ids = data.map(x => x.id)

    const commonProps = {
        setRole: false,
        ...componentProps,
        r,
        symbol,
        symbolStyle: addColor(symbolStyle, scaleColor('')),
        line,
        lineStyle: addColor(lineStyle, scaleColor('')),
        className,
    }
    const cells = processedData.keys.map((k, i) => {
        let positions: [number, number][] = []
        ids.map((seriesId, seriesIndex) => {
            const value = data[seriesIndex]?.data[i] ?? 0
            if (value > 0) {
                positions.push([scaleIndex(seriesId), scaleKeys(k)])
            }
        })
        if (horizontal) {
            positions = positions.map(x => [x[1], x[0]])
        }
        return createElement(component, { key: 'm-' + k, ...commonProps, positions })
    })

    return (
        <g role={setRole ? 'upset-memberships' : undefined} style={style}>
            {cells}
        </g>
    )
}
