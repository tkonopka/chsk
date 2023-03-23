import { useMemo } from 'react'
import { VennProps } from './types'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BaseView,
    createScales,
    useContainer,
    getIndexes,
    useTheme,
    defaultLinearScaleSpec,
    defaultContainerProps,
} from '@chsk/core'
import { getColorScaleProps, getXYScaleProps } from './utils'
import { VennPreparedDataProvider } from './contexts'
import { interpolateRgb } from 'd3-interpolate'
import { processData } from './process'
import { prepareData } from './prepare'

const defaultInterpolation = (c1: string, c2: string, c3?: string) => {
    if (c3 === undefined) return interpolateRgb(c1, c2)(0.5)
    const intermediate = interpolateRgb(c1, c2)(0.5)
    return interpolateRgb(intermediate, c3)(1.0 / 3)
}

export const Venn = ({
    container = defaultContainerProps,
    data,
    angle = 0,
    separation = 0.7,
    proportional = false,
    scaleX = defaultLinearScaleSpec,
    scaleY = defaultLinearScaleSpec,
    scaleColor,
    interpolation = defaultInterpolation,
    children,
    ...props
}: VennProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useContainer(container)
    const seriesIndexes = useMemo(() => getIndexes(data), [data])
    const seriesIds = useMemo(() => data.map(item => item.id), [data])

    const processedData = useMemo(
        () => processData(data, angle, separation, proportional),
        [data, separation, proportional]
    )
    const { scalePropsX, scalePropsY } = useMemo(
        () => getXYScaleProps(processedData, seriesIds, scaleX, scaleY, innerSize),
        [processedData, seriesIds, scaleX, scaleY, innerSize]
    )
    const colorScaleProps = useMemo(
        () => getColorScaleProps(processedData, scaleColor ?? theme.Colors.categorical),
        [processedData, scaleColor, theme]
    )
    const scales = useMemo(
        () => createScales(scalePropsX, scalePropsY, colorScaleProps),
        [scalePropsX, scalePropsY, colorScaleProps]
    )
    const preparedData = useMemo(
        () => prepareData(processedData, scales, interpolation),
        [processedData, scales, interpolation]
    )

    return (
        <BaseView
            variant={'venn'}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={data}
            processedData={processedData}
            seriesIndexes={seriesIndexes}
            keys={[]}
            scales={scales}
            {...props}
        >
            <VennPreparedDataProvider
                data={preparedData}
                seriesIndexes={seriesIndexes}
                keys={seriesIds}
            >
                <LazyMotion features={domAnimation}>{children}</LazyMotion>
            </VennPreparedDataProvider>
        </BaseView>
    )
}
