import {
    DendrogramInteractiveDataItem,
    DendrogramPreparedDataItem,
    DendrogramSurfaceProps,
} from './types'
import {
    BandAxisScale,
    DataComponent,
    FourSideSizeSpec,
    getIdKeySets,
    isBandAxisScale,
    Rectangle,
    useScales,
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    useRawData,
} from '@chsk/core'
import { useDendrogramPreparedData } from './context'
import { createElement, MouseEvent, useCallback, useMemo, useState } from 'react'
import { isDendrogramData } from './predicates'
import { getTargetLevels } from './utils'

const createSurfaceProps = (
    data: DendrogramPreparedDataItem,
    index: number,
    horizontal: boolean,
    expansion: FourSideSizeSpec
) => {
    const positions = data.positionInterval[index]
    const heights = data.heightInterval[index]
    const deltaHeight = heights[1] - heights[0]
    const deltaPosition = positions[1] - positions[0]
    return {
        x: (horizontal ? heights[0] : positions[0]) - expansion[LEFT],
        y: (horizontal ? positions[0] : heights[0]) - expansion[TOP],
        width: (horizontal ? deltaHeight : deltaPosition) + expansion[LEFT] + expansion[RIGHT],
        height: (horizontal ? deltaPosition : deltaHeight) + expansion[TOP] + expansion[BOTTOM],
    }
}

export const DendrogramSurface = ({
    levels,
    ids,
    keys,
    expansion = [0, 0, 0, 0],
    expansionUnit = 'band',
    component = Rectangle,
    dataComponent = DataComponent,
    interactive = false,
    handlers,
    modifiers,
    className,
    style,
    setRole = true,
}: DendrogramSurfaceProps) => {
    const originalData = useRawData().data
    const preparedData = useDendrogramPreparedData()
    const { scales } = useScales()
    const horizontal = isBandAxisScale(scales.y)
    const [active, setActive] = useState<DendrogramInteractiveDataItem | undefined>(undefined)
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    if (!isDendrogramData(originalData)) return null

    const expansionMultiplier =
        expansionUnit === 'band' ? indexScale.bandwidth() : indexScale.step()
    const absExpansion = expansion.map(v => v * expansionMultiplier) as FourSideSizeSpec

    const { idSet, keyArray } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )

    const onMouseEnter = useCallback(
        (data: DendrogramInteractiveDataItem | undefined, event: MouseEvent) => {
            handlers?.onMouseEnter?.(data, event)
            setActive(data)
        },
        [handlers, setActive]
    )
    const onMouseLeave = useCallback(
        (data: DendrogramInteractiveDataItem | undefined, event: MouseEvent) => {
            handlers?.onMouseLeave?.(data, event)
            setActive(undefined)
        },
        [handlers, setActive]
    )

    const compositeHandlers = interactive ? { ...handlers, onMouseEnter, onMouseLeave } : undefined

    const surfaceProps = { variant: 'dendrogram-surface', setRole, className, style }
    const result = preparedData.data.map((seriesData: DendrogramPreparedDataItem) => {
        const id = seriesData.id
        if (!idSet.has(id)) return null
        const data = originalData[seriesData.index]
        const targetLevels = getTargetLevels(
            seriesData,
            indexScale,
            levels,
            keys === undefined ? keys : keyArray
        )
        return targetLevels.map(level => {
            const rectProps = createSurfaceProps(seriesData, level, horizontal, absExpansion)
            const interactiveOpacity = interactive
                ? seriesData.id === active?.id && level === active?.level
                : false
            const fixedOpacity = !interactive
            return createElement(dataComponent, {
                key: 'branch-' + id + '-' + level,
                component,
                data: { id, level, data },
                props: {
                    ...rectProps,
                    ...surfaceProps,
                    opacity: +(interactiveOpacity || fixedOpacity),
                },
                handlers: compositeHandlers,
                modifiers,
            })
        })
    })

    return <>{result.filter(Boolean)}</>
}
