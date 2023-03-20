import { createElement, ReactNode, useMemo } from 'react'
import {
    ContinuousAxisScale,
    deg2rad,
    getClassName,
    getIdKeySets,
    rad2deg,
    useProcessedData,
    useScales,
} from '@chsk/core'
import { PolarTypography } from '../general'
import { isPieProcessedData } from './predicates'
import { SlicesLabelsProps } from './types'

export const SlicesLabels = ({
    ids,
    r = 0.5,
    minAngle = 10,
    format = (v: string | number) => String(v),
    className,
    setRole = false,
    style,
    component = PolarTypography,
}: SlicesLabelsProps) => {
    const processedData = useProcessedData()
    const rScale = useScales().x as ContinuousAxisScale
    const data = processedData.data
    if (!isPieProcessedData(data)) return null

    const { idSet } = useMemo(
        () => getIdKeySets(ids, undefined, processedData),
        [ids, processedData]
    )
    const innerClassName = getClassName('sliceLabel', className)
    const minAngleRad = deg2rad(minAngle)
    const r0 = rScale(0)

    const result: Array<ReactNode> = data.map((seriesData, i) => {
        if (!idSet.has(seriesData.id)) return null
        const compositeClassName = innerClassName
        const labelStyle = style
        const angle = (seriesData.endAngle + seriesData.startAngle) / 2
        if (seriesData.endAngle - seriesData.startAngle < minAngleRad) return null
        return createElement(
            component,
            {
                key: 'slices-label-' + i,
                position: [rScale(r) - r0, rad2deg(angle)],
                className: compositeClassName,
                style: labelStyle,
                setRole: setRole,
            },
            format(seriesData.data)
        )
    })

    return <>{result.filter(Boolean)}</>
}
