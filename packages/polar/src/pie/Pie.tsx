import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BaseView,
    useContainer,
    useTheme,
    createColorScaleProps,
    getIndexes,
    LinearScaleSpec,
    AngleUnit,
    deg2rad,
    defaultContainerProps,
    useCreateScales,
} from '@chsk/core'
import { getPieXYScaleProps } from './utils'
import { PieDataItem, PieProps, PieProcessedDataItem } from './types'

const defaultPolarScaleSpec: LinearScaleSpec = {
    variant: 'linear',
    domain: [-1, 1],
    nice: false,
}

const processData = (
    data: Array<PieDataItem>,
    angle: number,
    unit: AngleUnit,
    align: number,
    rInner: number,
    rOuter: number
): Array<PieProcessedDataItem> => {
    const values = data.map(seriesData => Math.max(0, seriesData.data))
    const total = values.reduce((acc, v) => acc + v, 0)
    let start = 0
    const offset = unit === 'radian' ? angle : deg2rad(angle)
    return data.map((seriesData, index) => {
        const proportion = values[index] / total
        let startAngle = start
        let endAngle = start + proportion * 2 * Math.PI
        if (index === 0) {
            const firstOffset = offset - (endAngle - startAngle) * align
            startAngle += firstOffset
            endAngle += firstOffset
        }
        start = endAngle
        return {
            id: seriesData.id,
            index,
            data: values[index],
            proportion,
            startAngle,
            endAngle,
            rInner,
            rOuter,
        }
    })
}

export const Pie = ({
    container = defaultContainerProps,
    data,
    angle = 0,
    angleUnit = 'degree',
    angleAlign = 0,
    rOuter = 1,
    rInner = 0,
    scaleX = defaultPolarScaleSpec,
    scaleY = defaultPolarScaleSpec,
    scaleColor,
    children,
    ...props
}: PieProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const seriesIds = useMemo(() => data.map(item => item.id), [data])
    const seriesIndexes = useMemo(() => getIndexes(data), [data])

    const processedData = useMemo(
        () => processData(data, angle, angleUnit, angleAlign, rInner, rOuter),
        [data, angle, angleUnit, angleAlign, rInner, rOuter]
    )
    const { x: xProps, y: yProps } = useMemo(
        () => getPieXYScaleProps(scaleX, scaleY, innerSize),
        [scaleX, scaleY, innerSize]
    )
    const colorProps = useMemo(
        () => createColorScaleProps(scaleColor ?? theme.Colors.categorical, seriesIds),
        [scaleColor, theme, seriesIds]
    )
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps, color: colorProps })

    return (
        <BaseView
            variant={'pie'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={seriesIds}
            scalesContextValue={scalesContextValue}
            {...props}
        >
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}
