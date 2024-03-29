import { createElement } from 'react'
import {
    getClassName,
    useIdsKeys,
    Label,
    OpacityMotion,
    useDisabledKeys,
    useProcessedData,
    X,
    Y,
    NumericPositionSpec,
} from '@chsk/core'
import { BarPreparedDataItem, BarsLabelsProps } from './types'
import { useBarPreparedData } from './context'
import { isBarProcessedData } from './predicates'

export const BarsLabels = ({
    variant = 'bar-label',
    ids,
    keys,
    format = (v: number) => String(v),
    padding = [4, 4, 4, 4],
    minSize = [40, 10],
    align = [0.5, 0.5],
    offset = [0, 0],
    angle,
    className,
    setRole = true,
    style,
    showOuter = false,
    styleOuter,
    component = Label,
    componentProps,
}: BarsLabelsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useBarPreparedData()
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const { idSet, keySet } = useIdsKeys(ids, keys, preparedData)
    if (!isBarProcessedData(processedData)) return null

    const innerClassName = getClassName(variant, className)
    const outerClassName = getClassName(variant + ' out', className)
    const commonProps = { setRole: false, ...componentProps, align, angle, padding }

    const result = preparedData.keys.map((k, i) => {
        if (!keySet.has(k)) return null
        const visible = !disabledKeys.has(k)
        const labels = data
            .map((seriesData: BarPreparedDataItem, j) => {
                const size = seriesData.size[i]
                const pos = seriesData.position[i]
                if (!idSet.has(seriesData.id) || !size || !pos) return null
                const position: NumericPositionSpec = [
                    pos[X] + offset[X] + size[X] / 2,
                    pos[Y] + offset[Y] + size[Y] / 2,
                ]
                let labelStyle = style
                let compositeClassName = innerClassName
                if (Math.abs(size[0]) < minSize[0] || Math.abs(size[1]) < minSize[1]) {
                    if (!showOuter) return null
                    labelStyle = styleOuter
                    position[X] += size[X]
                    compositeClassName = outerClassName
                }
                return createElement(
                    component,
                    {
                        key: 'label-' + j + '-' + i,
                        ...commonProps,
                        position,
                        size,
                        className: compositeClassName,
                        style: labelStyle,
                    },
                    format(Number(processedData[j]?.data[i]))
                )
            })
            .filter(Boolean)

        return (
            <OpacityMotion
                key={'labels-' + i}
                role={setRole ? 'bars-labels' : undefined}
                visible={visible}
                firstRender={firstRender}
            >
                {labels}
            </OpacityMotion>
        )
    })

    return <>{result.filter(Boolean)}</>
}
