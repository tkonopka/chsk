import { useMemo } from 'react'
import { VennProps } from './types'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BaseView,
    useContainer,
    getIndexes,
    useTheme,
    defaultLinearScaleSpec,
    defaultContainerProps,
    useCreateScales,
} from '@chsk/core'
import { getColorScaleProps, getXYScaleProps } from './utils'
import { VennPreparedDataProvider } from './contexts'
import { interpolateLab } from 'd3-interpolate'
import { processData } from './process'
import { prepareData } from './prepare'

const defaultInterpolation = (c1: string, c2: string, c3?: string) => {
    if (c3 === undefined) return interpolateLab(c1, c2)(0.5)
    const intermediate = interpolateLab(c1, c2)(0.5)
    return interpolateLab(intermediate, c3)(1.0 / 3)
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
    const { x: xProps, y: yProps } = useMemo(
        () => getXYScaleProps(processedData, seriesIds, scaleX, scaleY, innerSize),
        [processedData, seriesIds, scaleX, scaleY, innerSize]
    )
    const colorProps = useMemo(
        () => getColorScaleProps(processedData, scaleColor ?? theme.Color.categorical),
        [processedData, scaleColor, theme]
    )
    const scalesContextValue = useCreateScales({ x: xProps, y: yProps, color: colorProps })
    const preparedData = useMemo(
        () => prepareData(processedData, scalesContextValue.scales, interpolation),
        [processedData, scalesContextValue, interpolation]
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
            scalesContextValue={scalesContextValue}
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
