import { useMemo } from 'react'
import { VennProps } from './types'
import { LazyMotion, domAnimation } from 'framer-motion'
import {
    BaseView,
    createScales,
    useView,
    getIndexes,
    useTheme,
    defaultLinearScaleSpec,
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
    // layout
    position = [0, 0],
    positionUnits = 'relative',
    size = [1, 1],
    sizeUnits = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    // content
    data,
    angle = 0,
    separation = 0.7,
    proportional = false,
    scaleX = defaultLinearScaleSpec,
    scaleY = defaultLinearScaleSpec,
    scaleColor,
    interpolation = defaultInterpolation,
    //
    children,
    ...props
}: VennProps) => {
    const theme = useTheme()
    const { dimsProps, origin, innerSize } = useView({
        position,
        positionUnits,
        size,
        sizeUnits,
        anchor,
        padding,
    })
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

    // compute coordinates
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
