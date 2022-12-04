import {
    addColor,
    Circle,
    DataComponent,
    getIdKeySets,
    LinearAxisScale,
    useProcessedData,
    useScales,
    X,
    Y,
} from '@chsk/core'
import { VennSetsProps } from './types'
import { createElement, ReactNode, useMemo } from 'react'
import { isVennProcessedData } from './predicates'

export const VennSets = ({
    ids,
    component = Circle,
    className,
    style,
    dataComponent = DataComponent,
    ...props
}: VennSetsProps) => {
    const processedData = useProcessedData()
    const scales = useScales()
    const data = processedData.data
    if (!isVennProcessedData(data)) return null

    const { idSet } = useMemo(() => getIdKeySets(ids, [], processedData), [ids])
    const scaleX = scales.x as LinearAxisScale
    const scaleY = scales.y as LinearAxisScale

    const styles = useMemo(
        () =>
            data.map((seriesData, i) => {
                const keyColor = scales.color(i)
                return addColor(style, keyColor)
            }),
        [data, scales, style]
    )

    const result: Array<ReactNode> = data
        .map((seriesData, i) => {
            if (!idSet.has(seriesData.id)) return null
            const pos = [scaleX(seriesData.position[X]), scaleY(seriesData.position[Y])]
            const r = scaleX(seriesData.r) - scaleX(0)
            return createElement(dataComponent, {
                key: 'set-' + seriesData.id,
                component,
                data: seriesData,
                props: {
                    cx: pos[0],
                    cy: pos[1],
                    r,
                    className: className,
                    style: styles[i],
                    variant: 'set',
                    setRole: false,
                },
                ...props,
            })
        })
        .filter(Boolean)

    return <>{result}</>
}
