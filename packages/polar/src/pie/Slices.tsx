import { createElement, useMemo } from 'react'
import {
    addColor,
    TooltipDataComponent,
    useScales,
    ContinuousAxisScale,
    useProcessedData,
    getIdKeySets,
} from '@chsk/core'
import { Slice } from './Slice'
import { SlicesProps } from './types'
import { isPieProcessedData } from './predicates'

export const Slices = ({
    ids,
    rOuter = 1,
    rInner = 0,
    rCorner = 0,
    padAngle = 0,
    //
    component,
    className,
    style,
    dataComponent = TooltipDataComponent,
    setRole = true,
    ...props
}: SlicesProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const xScale = scales.x as ContinuousAxisScale
    const colorScale = scales.color
    const data = processedData.data
    if (!isPieProcessedData(data)) return null

    const { idSet } = useMemo(
        () => getIdKeySets(ids, undefined, processedData),
        [ids, processedData]
    )

    const styles = useMemo(
        () => processedData.keys.map((k, i) => addColor(style, colorScale(i))),
        [processedData, style, colorScale]
    )

    const x0 = xScale(0)
    const result = data.map((item, i) => {
        if (!idSet.has(item.id)) return null
        return createElement(dataComponent, {
            key: 'slice-' + item.id,
            component: component ?? Slice,
            data: item,
            props: {
                innerRadius: xScale(rInner) - x0,
                outerRadius: xScale(rOuter) - x0,
                startAngle: item.startAngle,
                endAngle: item.endAngle,
                padAngle,
                r: rCorner,
                className,
                style: styles[i],
                setRole,
            },
            ...props,
        })
    })

    return <>{result}</>
}
