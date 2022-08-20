import {
    composeClassName,
    getAlignPosition,
    getInnerSize,
    Typography,
    useProcessedData,
    X,
    Y,
} from '@chask/core'
import { BarPreparedDataItem, BarsLabelsProps } from './types'
import { useBarPreparedData } from './context'
import { ReactNode, useMemo } from 'react'
import { isFinite } from 'lodash'
import { getIdKeySets } from './Bars'
import { isBarProcessedData } from './Bar'

export const BarsLabels = ({
    ids,
    keys,
    format = (v: string | number) => String(v),
    padding = [4, 4, 4, 4],
    minSize = [40, 10],
    align = [0.5, 0.5],
    translate = [0, 0],
    className,
    setRole = false,
    style,
    showOuter = false,
    styleOuter,
}: BarsLabelsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useBarPreparedData()
    const data = preparedData.data
    if (!isBarProcessedData(processedData)) return null

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )
    const innerClassName = composeClassName(['barLabel', className])
    const outerClassName = composeClassName(['barLabel out', className])

    const labels: Array<ReactNode> = data
        .map((seriesData: BarPreparedDataItem, j: number) => {
            if (!idSet.has(seriesData.id)) return null
            return seriesData.position.map((pos, i) => {
                if (!keySet.has(preparedData.keys[i])) return null
                const size = seriesData.size[i]
                if (!isFinite(size[X]) || !isFinite(size[Y])) return null
                const innerSize = getInnerSize(size, padding)
                const labelPos = getAlignPosition(pos, size, padding, align)
                let labelStyle = style
                let compositeClassName = innerClassName
                if (innerSize[0] < minSize[0] || innerSize[1] < minSize[1]) {
                    if (!showOuter) return null
                    labelStyle = styleOuter
                    labelPos[X] = getAlignPosition(pos, size, padding, [0, align[1]])[X] + size[X]
                    compositeClassName = outerClassName
                }
                const value = format(processedData[j].value[i])
                return (
                    <Typography
                        key={'bar-label-' + j + '-' + i}
                        variant={'label'}
                        x={labelPos[X] + translate[X]}
                        y={labelPos[Y] + translate[Y]}
                        className={compositeClassName}
                        style={labelStyle}
                        setRole={setRole}
                    >
                        {value}
                    </Typography>
                )
            })
        })
        .flat()
        .filter(v => v)

    if (labels.length === 0) return null
    return (
        <g role={'bars-labels'} key={'bars-labels'}>
            {labels}
        </g>
    )
}
