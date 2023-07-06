import {
    addColor,
    OpacityMotion,
    useDisabledKeys,
    useScales,
    useIdsKeys,
    isBandAxisScale,
    useProcessedData,
    Path,
    TooltipDataComponent,
    CurveSpec,
} from '@chsk/core'
import { useViolinPreparedData } from './context'
import { createElement, useMemo } from 'react'
import { ViolinPreparedDataItem, ViolinsProps } from './types'
import { isViolinProcessedData } from './predicates'
import { violinPoints } from './utils'

export const Violins = ({
    variant = 'smooth',
    ids,
    keys,
    component = Path,
    componentProps,
    dataComponent = TooltipDataComponent,
    style,
    className,
    setRole = true,
    ...props
}: ViolinsProps) => {
    const processedData = useProcessedData().data
    const preparedData = useViolinPreparedData()
    const { scales } = useScales()
    const colorScale = scales.color
    const data = preparedData.data
    const { disabledKeys, firstRender } = useDisabledKeys()
    const horizontal = isBandAxisScale(scales.y)
    const { idSet, keySet } = useIdsKeys(ids, keys, preparedData)
    if (!isViolinProcessedData(processedData)) return null

    const allKeys = preparedData.keys
    const pathStyles = useMemo(
        () => allKeys.map((k, i) => addColor(style, colorScale(i))),
        [allKeys, style, colorScale]
    )
    const curve: CurveSpec = variant === 'step' ? 'Step' : 'BasisClosed'
    const commonProps = {
        variant: 'violin',
        setRole: false,
        ...componentProps,
        curve,
        closed: true,
        className,
    }
    const result = preparedData.keys.map((k, i) => {
        if (!keySet.has(k)) return null
        const visible = !disabledKeys.has(k)
        const items = data
            .map((seriesData: ViolinPreparedDataItem) => {
                if (!idSet.has(seriesData.id)) return null
                const summary = seriesData.data[i]
                if (!summary) return null
                const points = violinPoints({ ...summary, horizontal })
                if (points.length === 0) return null
                const seriesProcessedData = processedData[seriesData.index].data[i]
                return createElement(dataComponent, {
                    key: 'v-' + seriesData.index + '-' + i,
                    data: {
                        id: seriesData.id,
                        key: k,
                        n: seriesProcessedData?.n ?? 0,
                    },
                    component,
                    props: {
                        ...commonProps,
                        points,
                        style: pathStyles[i],
                    },
                    ...props,
                })
            })
            .filter(Boolean)

        return (
            <OpacityMotion
                key={'v-' + i}
                role={setRole ? 'violins' : undefined}
                visible={visible}
                firstRender={firstRender}
            >
                {items}
            </OpacityMotion>
        )
    })

    return <>{result}</>
}
