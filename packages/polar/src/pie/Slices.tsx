import { createElement, useMemo } from 'react'
import {
    addColor,
    indexes,
    TooltipDataComponent,
    useScales,
    ContinuousAxisScale,
    useProcessedData,
    useIdsKeys,
} from '@chsk/core'
import { Slice } from './Slice'
import { SlicesProps } from './types'
import { isPieProcessedData } from './predicates'

export const Slices = ({
    ids,
    r = 0,
    padAngle = 0,
    //
    component = Slice,
    componentProps,
    className,
    style,
    dataComponent = TooltipDataComponent,
    setRole = true,
    ...props
}: SlicesProps) => {
    const processedData = useProcessedData()
    const { scales } = useScales()
    const xScale = scales.x as ContinuousAxisScale
    const colorScale = scales.color
    const data = processedData.data
    const { idSet } = useIdsKeys(ids, null, processedData)
    if (!isPieProcessedData(data)) return null

    const styles = useMemo(
        () => indexes(processedData.keys).map(i => addColor(style, colorScale(i))),
        [processedData, style, colorScale]
    )

    const x0 = xScale(0)
    const commonProps = { ...componentProps, setRole, padAngle, r, className }
    const result = data.map((item, i) => {
        if (!idSet.has(item.id)) return null
        return createElement(dataComponent, {
            key: 's-' + item.id,
            component,
            data: item,
            props: {
                ...commonProps,
                innerRadius: xScale(item.rInner) - x0,
                outerRadius: xScale(item.rOuter) - x0,
                startAngle: item.startAngle,
                endAngle: item.endAngle,
                style: styles[i],
            },
            ...props,
        })
    })

    return <>{result}</>
}
