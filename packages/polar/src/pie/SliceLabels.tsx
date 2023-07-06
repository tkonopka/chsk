import { createElement } from 'react'
import {
    ContinuousAxisScale,
    deg2rad,
    SimpleDataComponent,
    useIdsKeys,
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
    componentProps,
}: SliceLabelsProps) => {
    const processedData = useProcessedData()
    const rScale = useScales().scales.x as ContinuousAxisScale
    const data = processedData.data
    const { idSet } = useIdsKeys(ids, null, processedData)
    if (!isPieProcessedData(data)) return null

    const minAngleRad = angleUnit === 'degree' ? deg2rad(minAngle) : minAngle
    const r0 = rScale(0)

    const commonProps = {
        ...componentProps,
        className,
        angleUnit: 'radian' as const,
        align,
        setRole,
        style,
    }
    const result = data.map((seriesData, i) => {
        if (!idSet.has(seriesData.id)) return null
        if (seriesData.endAngle - seriesData.startAngle < minAngleRad) return null
        return createElement(dataComponent, {
            key: 'l-' + i,
            component: component ?? SliceLabel,
            data: seriesData,
            props: {
                ...commonProps,
                startAngle: seriesData.startAngle,
                endAngle: seriesData.endAngle,
                innerRadius: rScale(seriesData.rInner) - r0,
                outerRadius: rScale(seriesData.rOuter) - r0,
                children: format(seriesData),
            },
        })
    })

    return <>{result.filter(Boolean)}</>
}
