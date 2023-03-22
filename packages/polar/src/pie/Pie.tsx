import { useMemo } from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BaseView,
    createScales,
    useView,
    useTheme,
    createColorScaleProps,
    getIndexes,
    LinearScaleSpec,
    AngleUnit,
    deg2rad,
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
    // view
    position = [0, 0],
    positionUnits = 'relative',
    size = [1, 1],
    sizeUnits = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // content
    data,
    angle = 0,
    angleUnit = 'degree',
    angleAlign = 0,
    rOuter = 1,
    rInner = 0,
    scaleX = defaultPolarScaleSpec,
    scaleY = defaultPolarScaleSpec,
    scaleColor,
    //
    children,
    ...props
}: PieProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useView({
        position,
        positionUnits,
        size,
        sizeUnits,
        anchor,
        padding,
    })
    const seriesIds = useMemo(() => data.map(item => item.id), [data])
    const seriesIndexes = useMemo(() => getIndexes(data), [data])

    const processedData = useMemo(
        () => processData(data, angle, angleUnit, angleAlign, rInner, rOuter),
        [data, angle, angleUnit, angleAlign, rInner, rOuter]
    )
    const { scalePropsX, scalePropsY } = useMemo(
        () => getPieXYScaleProps(scaleX, scaleY, innerSize),
        [scaleX, scaleY, innerSize]
    )
    const colorScaleProps = useMemo(
        () => createColorScaleProps(scaleColor ?? theme.Colors.categorical, seriesIds),
        [scaleColor, theme, seriesIds]
    )
    const scales = useMemo(
        () => createScales(scalePropsX, scalePropsY, colorScaleProps),
        [scalePropsX, scalePropsY, colorScaleProps]
    )

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
            scales={scales}
            {...props}
        >
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}
