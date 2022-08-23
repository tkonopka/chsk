import { DimensionsProvider } from '../general'
import {
    createContinuousScaleProps,
    createAxisScales,
    defaultLinearScaleSpec,
    ScalesProvider,
    createColorScale,
    createContinuousScale,
    createColorScaleProps,
    defaultCategoricalScaleSpec,
} from '../scales'
import { ViewProps } from './types'
import { OriginalDataProvider, ProcessedDataProvider } from './contexts'
import { useView } from './hooks'

export const View = ({
    position = [0, 0],
    size = [1, 1],
    units = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    data = [],
    scaleX = createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    scaleY = createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    scaleColor = createColorScaleProps(defaultCategoricalScaleSpec, [0, 100]),
    scaleSize = createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    children,
}: ViewProps) => {
    const { dimsProps, translate } = useView({ position, size, units, anchor, padding })
    const scales = createAxisScales({ ...dimsProps, scaleX, scaleY })
    scales.color = createColorScale(scaleColor)
    scales.size = createContinuousScale({ size: 100, ...scaleSize })

    const isArray = Array.isArray(data)
    const dataArray = isArray ? data : []
    const keys = isArray ? [] : data.keys
    const seriesIndexes = isArray ? {} : data.seriesIndexes

    return (
        <DimensionsProvider {...dimsProps}>
            <OriginalDataProvider data={dataArray}>
                <ScalesProvider scales={scales}>
                    <ProcessedDataProvider
                        data={dataArray}
                        seriesIndexes={seriesIndexes}
                        keys={keys}
                    >
                        <g role="view" transform={translate}>
                            {children}
                        </g>
                    </ProcessedDataProvider>
                </ScalesProvider>
            </OriginalDataProvider>
        </DimensionsProvider>
    )
}
