import { createElement, ReactNode, useMemo } from 'react'
import {
    ContinuousAxisScale,
    deg2rad,
    getIdKeySets,
    SimpleDataComponent,
    useProcessedData,
    useScales,
} from '@chsk/core'
import { isPieProcessedData } from './predicates'
import { SliceLabel } from './SliceLabel'
import { PieProcessedDataItem, SliceLabelsProps } from './types'

export const SliceLabels = ({
    ids,
    align = [0.5, 0.5],
    minAngle = 10,
    angleUnit = 'degree',
    format = (v: PieProcessedDataItem) => String(v.data),
    className,
    setRole = false,
    style,
    dataComponent = SimpleDataComponent,
    component,
}: SliceLabelsProps) => {
    const processedData = useProcessedData()
    const rScale = useScales().x as ContinuousAxisScale
    const data = processedData.data
    if (!isPieProcessedData(data)) return null

    const { idSet } = useMemo(
        () => getIdKeySets(ids, undefined, processedData),
        [ids, processedData]
    )
    const minAngleRad = angleUnit === 'degree' ? deg2rad(minAngle) : minAngle
    const r0 = rScale(0)

    const result: Array<ReactNode> = data.map((seriesData, i) => {
        if (!idSet.has(seriesData.id)) return null
        if (seriesData.endAngle - seriesData.startAngle < minAngleRad) return null
        return createElement(dataComponent, {
            key: 'slice-label-' + i,
            component: component ?? SliceLabel,
            data: seriesData,
            props: {
                startAngle: seriesData.startAngle,
                endAngle: seriesData.endAngle,
                innerRadius: rScale(seriesData.rInner) - r0,
                outerRadius: rScale(seriesData.rOuter) - r0,
                angleUnit: 'radian',
                align,
                className,
                style: style,
                setRole: setRole,
                children: format(seriesData),
            },
        })
    })

    return <>{result.filter(Boolean)}</>
}
