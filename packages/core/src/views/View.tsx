import { LazyMotion, domAnimation } from 'framer-motion'
import {
    createContinuousScaleProps,
    createAxisScales,
    defaultLinearScaleSpec,
    createColorScale,
    createContinuousScale,
    createColorScaleProps,
} from '../scales'
import { ViewProps } from './types'
import { useView } from './hooks'
import { useTheme } from '../themes'
import { BaseView } from './BaseView'

export const View = ({
    position = [0, 0],
    size = [1, 1],
    units = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    data = [],
    scaleX = createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    scaleY = createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    scaleColor,
    scaleSize = createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    children,
}: ViewProps) => {
    const theme = useTheme()
    const { dimsProps, origin } = useView({ position, size, units, anchor, padding })
    const scales = createAxisScales({ ...dimsProps, scaleX, scaleY })
    const scaleColorProps = scaleColor ?? createColorScaleProps(theme.Colors.categorical, [0, 100])
    scales.color = createColorScale(scaleColorProps)
    scales.size = createContinuousScale({ size: 100, ...scaleSize })

    const isArray = Array.isArray(data)
    const dataArray = isArray ? data : []
    const keys = isArray ? [] : data.keys
    const seriesIndexes = isArray ? {} : data.seriesIndexes

    return (
        <BaseView
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={dataArray}
            processedData={dataArray}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scales={scales}
            role={'view'}
        >
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}
