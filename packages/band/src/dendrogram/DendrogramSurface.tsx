import { DendrogramPreparedDataItem, DendrogramSurfaceProps } from './types'
import {
    BandAxisScale,
    ContinuousAxisScale,
    DataComponent,
    FourSideSizeSpec,
    getIdKeySets,
    isBandAxisScale,
    range,
    Rectangle,
    useRawData,
    useScales,
    TOP,
    BOTTOM,
    LEFT,
    RIGHT,
    getClassName,
} from '@chsk/core'
import { useDendrogramPreparedData } from './context'
import { createElement, MouseEvent, useCallback, useMemo, useState } from 'react'
import { isDendrogramData } from './predicates'

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

/** get a hierarchy level that contains all the given keys */
const getCommonLevel = (
    data: DendrogramPreparedDataItem,
    indexScale: BandAxisScale,
    keys: string[]
) => {
    const positions = keys.map(k => indexScale(k))
    for (let i = 0; i < data.positionInterval.length; i++) {
        const interval = data.positionInterval[i]
        if (positions.every(v => v >= interval[0] && v <= interval[1])) {
            return i
        }
    }
    return data.positionInterval.length - 1
}

export const DendrogramSurface = ({
    levels,
    ids,
    keys,
    expansion = [0, 0, 0, 0],
    expansionUnit = 'band',
    component = Rectangle,
    dataComponent = DataComponent,
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
    const [active, setActive] = useState<number | undefined>(undefined)
    if (!isDendrogramData(originalData)) return null
    const indexScale = horizontal ? (scales.y as BandAxisScale) : (scales.x as BandAxisScale)
    const valueScale = horizontal
        ? (scales.x as ContinuousAxisScale)
        : (scales.y as ContinuousAxisScale)

    const expansionMultiplier =
        expansionUnit === 'band' ? indexScale.bandwidth() : indexScale.step()
    const absExpansion = expansion.map(v => v * expansionMultiplier) as FourSideSizeSpec

    const { idSet } = useMemo(
        () => getIdKeySets(ids, keys, preparedData),
        [ids, keys, preparedData]
    )

    /**
    const onMouseEnter = useCallback(
        (data: WithId | undefined, event: MouseEvent) => {
            handlers?.onMouseEnter?.(data, event)
            setActive(data?.id)
        },
        [handlers, setActive]
    )
    const onMouseLeave = useCallback(
        (data: WithId | undefined, event: MouseEvent) => {
            handlers?.onMouseLeave?.(data, event)
            setActive(undefined)
        },
        [handlers, setActive]
    )
    */

    const compositeHandlers = { ...handlers }

    const surfaceProps = { variant: 'dendrogram-surface', setRole, className, style }
    const result = preparedData.data.map((item: DendrogramPreparedDataItem) => {
        if (!idSet.has(item.id)) return null
        const data = originalData[item.index]
        // determine the levels to display
        let showLevels: number[] = []
        if (keys === undefined && levels === undefined) {
            showLevels = range(data.height.length)
        }
        if (levels !== undefined) {
            showLevels = showLevels.concat(levels)
        }
        if (keys !== undefined) {
            showLevels.push(getCommonLevel(item, indexScale, keys))
        }
        // sort to create large-scale blocks first, then small-scale blocks on top
        showLevels.sort((a, b) => b - a)

        return showLevels.map(level => {
            const rectProps = createSurfaceProps(item, level, horizontal, absExpansion)
            return createElement(dataComponent, {
                key: 'branch-' + item.id + '-' + level,
                component,
                data: {
                    id: item.id,
                    key: String(level),
                    data: [],
                },
                props: {
                    ...rectProps,
                    ...surfaceProps,
                },
                handlers: compositeHandlers,
                modifiers,
            })
        })
    })

    return <>{result.filter(Boolean)}</>
}
