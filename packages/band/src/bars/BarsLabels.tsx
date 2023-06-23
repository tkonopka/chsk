import { createElement, ReactNode, useMemo } from 'react'
import {
    getClassName,
    getIdKeySets,
    Label,
    OpacityMotion,
    useDisabledKeys,
    useProcessedData,
    X,
    Y,
} from '@chsk/core'
import { BarPreparedDataItem, BarsLabelsProps } from './types'
import { useBarPreparedData } from './context'
import { isBarProcessedData } from './predicates'

export const BarsLabels = ({
    variant = 'bar-label',
    ids,
    keys,
    format = (v: string | number) => String(v),
    padding = [4, 4, 4, 4],
    minSize = [40, 10],
    align = [0.5, 0.5],
    offset = [0, 0],
    angle,
    className,
    setRole = false,
    style,
    showOuter = false,
    styleOuter,
    component = Label,
}: BarsLabelsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useBarPreparedData()
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    if (!isBarProcessedData(processedData)) return null

    const { idSet, keySet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )
    const innerClassName = getClassName(variant, className)
    const outerClassName = getClassName(variant + ' out', className)
    const labelProps = { align, angle, padding, setRole }

    const result: Array<ReactNode> = preparedData.keys.map((k, i) => {
        if (!keySet.has(k)) return null
        const visible = !disabledKeys.has(k)
        const labels = data
            .map((seriesData: BarPreparedDataItem, j) => {
                if (!idSet.has(seriesData.id)) return null
                const size = seriesData.size[i]
                const pos = seriesData.position[i]
                const center = [pos[0] + size[0] / 2, pos[1] + size[1] / 2]
                let labelStyle = style
                let compositeClassName = innerClassName
                if (Math.abs(size[0]) < minSize[0] || Math.abs(size[1]) < minSize[1]) {
                    if (!showOuter) return null
                    labelStyle = styleOuter
                    center[X] += size[X]
                    compositeClassName = outerClassName
                }
                const value = format(processedData[j].data[i])
                return createElement(
                    component,
                    {
                        key: 'label-' + j + '-' + i,
                        position: [center[X] + offset[X], center[Y] + offset[Y]],
                        size,
                        className: compositeClassName,
                        style: labelStyle,
                        ...labelProps,
                    },
                    value
                )
            })
            .filter(Boolean)

        return (
            <OpacityMotion
                key={'labels-' + i}
                role={'bars-labels'}
                visible={visible}
                firstRender={firstRender}
            >
                {labels}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
