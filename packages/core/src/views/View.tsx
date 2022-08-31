import { LazyMotion, domAnimation } from 'framer-motion'
import { createAxisScales, createColorScale, createContinuousScale } from '../scales'
import { ViewProps } from './types'
import { useView } from './hooks'
import { BaseView } from './BaseView'
import { themedProps } from '../themes'
import { defaultViewProps } from './defaults'

export const UnthemedView = ({
    variant = 'default',
    position = defaultViewProps.position,
    size = defaultViewProps.size,
    units = defaultViewProps.units,
    anchor = defaultViewProps.anchor,
    padding = defaultViewProps.padding,
    data = [],
    scaleX = defaultViewProps.scaleX,
    scaleY = defaultViewProps.scaleY,
    scaleColor = defaultViewProps.scaleColor,
    scaleSize = defaultViewProps.scaleSize,
    children,
}: ViewProps) => {
    const { dimsProps, origin } = useView({ position, size, units, anchor, padding })
    const scales = createAxisScales({ ...dimsProps, scaleX, scaleY })
    scales.color = createColorScale(scaleColor)
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
            role={variant === 'default' ? 'view' : 'view-' + variant}
        >
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}

export const View = (props: ViewProps) => <UnthemedView {...themedProps(props, 'View')} />
