import { createElement } from 'react'
import {
    getClassName,
    useIdsKeys,
    Label,
    LinearAxisScale,
    useProcessedData,
    useScales,
    X,
    Y,
} from '@chsk/core'
import { isVennProcessedData } from './predicates'
import { VennSetLabelsProps } from './types'

export const VennSetLabels = ({
    ids,
    rs = [0, 0, 0],
    angles = [-Math.PI / 4, Math.PI / 4, 0],
    format = (v: string | number) => String(v),
    padding = [4, 4, 4, 4],
    size = [40, 10],
    align = [0.5, 0.5],
    offset = [0, 0],
    className,
    setRole = false,
    style,
    component = Label,
}: VennSetLabelsProps) => {
    const processedData = useProcessedData()
    const { scales } = useScales()
    const data = processedData.data
    const { idSet } = useIdsKeys(ids, null, processedData)
    if (!isVennProcessedData(data)) return null

    const seriesIds = data.map(seriesData => seriesData.id)
    const scaleX = scales.x as LinearAxisScale
    const scaleY = scales.y as LinearAxisScale
    const compositeClassName = getClassName('vennSetLabel', className)

    const result = (ids ?? seriesIds)
        .map((id, i) => {
            if (!idSet.has(id)) return null
            const index: number = processedData.seriesIndexes[id]
            const seriesData = data[index]
            const pos = [seriesData.center[X], seriesData.center[Y]]
            pos[X] += rs[i] * seriesData.r * Math.sin(angles[i])
            pos[Y] += rs[i] * seriesData.r * Math.cos(angles[i])
            const value = format(id)
            return createElement(
                component,
                {
                    key: 'label-' + id,
                    position: [scaleX(pos[X]) + offset[X], scaleY(pos[Y]) + offset[Y]],
                    size,
                    align,
                    padding,
                    className: compositeClassName,
                    style,
                    setRole,
                },
                value
            )
        })
        .filter(Boolean)

    return <>{result}</>
}
