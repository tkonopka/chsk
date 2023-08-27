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
    NumericPositionSpec,
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
    componentProps,
}: VennSetLabelsProps) => {
    const processedData = useProcessedData()
    const { scales } = useScales()
    const data = processedData.data
    const { idSet } = useIdsKeys(ids, null, processedData)
    if (!isVennProcessedData(data)) return null

    const seriesIds = data.map(seriesData => seriesData.id)
    const scaleX = scales.x as LinearAxisScale
    const scaleY = scales.y as LinearAxisScale

    const commonProps = {
        ...componentProps,
        size,
        align,
        padding,
        style,
        setRole,
        className: getClassName('vennSetLabel', className),
    }
    const result = (ids ?? seriesIds)
        .map((id, i) => {
            const index = Number(processedData.seriesIndexes[id])
            const seriesData = data[index]
            if (seriesData === undefined || !idSet.has(id)) return
            const pos: NumericPositionSpec = [seriesData.center[X], seriesData.center[Y]]
            pos[X] += Number(rs[i]) * seriesData.r * Math.sin(Number(angles[i]))
            pos[Y] += Number(rs[i]) * seriesData.r * Math.cos(Number(angles[i]))
            const position: NumericPositionSpec = [
                scaleX(pos[X]) + offset[X],
                scaleY(pos[Y]) + offset[Y],
            ]
            return createElement(
                component,
                { key: 'l-' + id, ...commonProps, position },
                format(id)
            )
        })
        .filter(Boolean)

    return <>{result}</>
}
