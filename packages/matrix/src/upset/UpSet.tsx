import { useMemo } from 'react'
import { UpSetDataItem, UpSetProcessedDataItem, UpSetProps } from './types'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BaseView,
    createScales,
    useView,
    getIndexes,
    BandScaleSpec,
    useTheme,
    createColorScaleProps,
    SizeSpec,
    BandScaleProps,
    X,
    Y,
} from '@chsk/core'
import { cloneDeep } from 'lodash'

const processData = (
    data: Array<UpSetDataItem>,
    ids: string[],
    horizontal: boolean
): { keys: string[]; processedData: Array<UpSetProcessedDataItem> } => {
    // identify membership of all data elements in the raw data
    const membership: Record<string, number> = {}
    data.map((seriesData, i) => {
        const index = 1 << i
        const seriesSet = new Set(seriesData.data)
        seriesSet.forEach(item => {
            const k = String(item)
            if (!membership[k]) membership[k] = 0
            membership[k] += index
        })
    })
    // identify sizes of each group
    const allCounts = Array(Math.pow(2, data.length)).fill(0)
    Object.values(membership).forEach(index => {
        allCounts[index] += 1
    })
    const summary = allCounts
        .map((count, i) => {
            if (!count) return null
            return [i, count]
        })
        .filter(Boolean) as [number, number][]
    summary.sort((a, b) => b[1] - a[1])
    // keys represent binary encoding of set intersections
    const keys = summary.map((x: [number, number]) => String(x[0]))
    const processedData = data.map((seriesData, index) => {
        const id = seriesData.id
        const mask = 1 << index
        return {
            id,
            index,
            horizontal,
            data: summary.map((x: [number, number]) => ((x[0] & mask) > 0 ? x[1] : 0)),
        }
    })
    return { keys, processedData }
}

const defaultUpSetScaleSpec: BandScaleSpec = {
    variant: 'band',
    padding: 0.25,
}

const getXYScaleProps = (
    ids: string[],
    keys: string[],
    horizontal: boolean,
    scaleSpecIndex: BandScaleSpec,
    scaleSpecMembership: BandScaleSpec,
    size: SizeSpec
) => {
    const scalePropsIndex = cloneDeep(scaleSpecIndex) as BandScaleProps
    scalePropsIndex.domain = ids
    const scalePropsMembership = cloneDeep(scaleSpecMembership) as BandScaleProps
    scalePropsMembership.domain = keys
    const result = {
        scalePropsX: horizontal ? scalePropsMembership : scalePropsIndex,
        scalePropsY: horizontal ? scalePropsIndex : scalePropsMembership,
    }
    result.scalePropsX.size = size[X]
    result.scalePropsY.size = size[Y]
    return result
}

export const UpSet = ({
    // layout
    position = [0, 0],
    positionUnits = 'relative',
    size = [1, 1],
    sizeUnits = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // content
    data,
    horizontal = true,
    scaleIndex = defaultUpSetScaleSpec,
    scaleMembership = defaultUpSetScaleSpec,
    scaleColor,
    //
    children,
    // svg
    ...props
}: UpSetProps) => {
    const theme = useTheme()
    const { dimsProps, origin } = useView({
        position,
        positionUnits,
        size,
        sizeUnits,
        anchor,
        padding,
    })
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])

    const { keys, processedData } = useMemo(
        () => processData(data, seriesIds, horizontal),
        [data, seriesIds, horizontal]
    )

    const { scalePropsX, scalePropsY } = useMemo(
        () =>
            getXYScaleProps(
                seriesIds,
                keys,
                horizontal,
                scaleIndex,
                scaleMembership,
                dimsProps.innerSize
            ),
        [seriesIds, keys, horizontal, scaleIndex, scaleMembership, dimsProps]
    )
    const colorScaleProps = createColorScaleProps(scaleColor ?? theme.Colors.categorical, [''])
    const scales = createScales(scalePropsX, scalePropsY, colorScaleProps)

    return (
        <BaseView
            variant={'upset'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
            {...props}
        >
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}
