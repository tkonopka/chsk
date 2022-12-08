import { useMemo } from 'react'
import { VennDataItem, VennProcessedDataItem, VennProps } from './types'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BaseView,
    createScales,
    useView,
    getIndexes,
    useTheme,
    defaultLinearScaleSpec,
    X,
} from '@chsk/core'
import { countCommonElements, getColorScaleProps, getXYScaleProps } from './utils'
import { computeVenn2 } from './compute'

const setOverlap = (setA: Set<unknown>, setB: Set<unknown>): number => {
    let result = 0
    setA.forEach(x => (result += Number(setB.has(x))))
    return result
}

// compute overlaps between sets - only suited for 2 or three sets
const processData = (
    data: Array<VennDataItem>,
    separation: number,
    proportional: boolean
): Array<VennProcessedDataItem> => {
    const sets = data.slice(0, 3).map(seriesData => new Set(seriesData.data))
    // count elements common to all sets
    if (sets.length === 0) return []
    const common = countCommonElements(sets)
    // compute intersections
    const result = data.slice(0, 3).map((seriesData, index) => {
        const id = seriesData.id
        return {
            id,
            index,
            size: sets[index].size,
            intersection: data
                .slice(0, 3)
                .map((otherSeries, index2) => setOverlap(sets[index], sets[index2])),
            common,
            position: [0, 0] as [number, number],
            r: 1,
        }
    })
    // assign positions to set symbols / circles
    if (result.length === 2) {
        const intersection = result[0].intersection[1]
        if (proportional) {
            const { positionA, positionB, rA, rB } = computeVenn2(
                result[0].size,
                result[1].size,
                intersection,
                separation
            )
            result[0].position = positionA
            result[1].position = positionB
            result[0].r = rA
            result[1].r = rB
        } else if (intersection > 0) {
            result[0].position[X] = -separation
            result[1].position[X] = separation
        } else {
            result[0].position[X] = -1 - (1 - separation)
            result[1].position[X] = 1 + (1 - separation)
        }
    } else if (result.length === 3) {
        const shiftY = separation * Math.tan(Math.PI / 6)
        result[0].position = [-separation, shiftY]
        result[1].position = [separation, shiftY]
        result[2].position = [0, -2 * separation * Math.sin(Math.PI / 3) + shiftY]
    }
    return result
}

export const Venn = ({
    // layout
    position = [0, 0],
    size = [1, 1],
    units = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // content
    data,
    separation = 0.7,
    proportional = false,
    scaleX = defaultLinearScaleSpec,
    scaleY = defaultLinearScaleSpec,
    scaleColor,
    //
    children,
}: VennProps) => {
    const theme = useTheme()
    const { dimsProps, origin } = useView({ position, size, units, anchor, padding })
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])

    const processedData = useMemo(
        () => processData(data, separation, proportional),
        [data, separation, proportional]
    )

    const { scalePropsX, scalePropsY } = getXYScaleProps(
        processedData,
        seriesIds,
        scaleX,
        scaleY,
        dimsProps.innerSize
    )
    const colorScaleProps = getColorScaleProps(
        processedData,
        scaleColor ?? theme.Colors.categorical
    )
    const scales = createScales(scalePropsX, scalePropsY, colorScaleProps)

    return (
        <BaseView
            role={'view-venn'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={[]}
            scales={scales}
        >
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}
