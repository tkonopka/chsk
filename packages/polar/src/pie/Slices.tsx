import { createElement, useMemo } from 'react'
import { m } from 'framer-motion'
import {
    addColor,
    TooltipDataComponent,
    useScales,
    ContinuousAxisScale,
    useProcessedData,
} from '@chsk/core'
import { Slice } from './Slice'
import { SlicesProps } from './types'
import { isPieProcessedData } from './predicates'

export const Slices = ({
    rOuter = 1,
    rInner = 0,
    rCorner = 0,
    padAngle = 0,
    //
    component = Slice,
    className,
    style,
    dataComponent = TooltipDataComponent,
    setRole = true,
    ...props
}: SlicesProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const xScale = scales.x as ContinuousAxisScale
    const yScale = scales.y as ContinuousAxisScale
    const colorScale = scales.color
    const data = processedData.data
    if (!isPieProcessedData(data)) return null

    const styles = useMemo(
        () => processedData.keys.map((k, i) => addColor(style, colorScale(i))),
        [processedData, style, colorScale]
    )

    const x0 = xScale(0)
    const result = data.map((item, i) => {
        return createElement(dataComponent, {
            key: 'slice-' + item.id,
            component,
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
                setRole: false,
            },
            ...props,
        })
    })

    const config = { x: xScale(0), y: yScale(0), originX: '0px', originY: '0px' }
    return (
        <m.g initial={config} animate={config} role={setRole ? 'slices' : undefined}>
            {result}
        </m.g>
    )
}
