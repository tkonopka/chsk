import { LazyMotion, domAnimation } from 'framer-motion'
import { createScales, createColorScale, createContinuousScale } from '../scales'
import { ViewProps } from './types'
import { useView } from './hooks'
import { BaseView } from './BaseView'
import { themedProps } from '../themes'
import { defaultViewProps } from './defaults'
import { cloneDeep } from 'lodash'
import { fillScaleSize } from './utils'

const UnthemedView = ({
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

    const { x: scalePropsX, y: scalePropsY } = fillScaleSize(dimsProps.innerSize, scaleX, scaleY)
    const scales = createScales(scalePropsX, scalePropsY)

    const isArray = Array.isArray(data)
    const dataArray = isArray ? data : []
    const keys = isArray ? [] : data.keys
    const seriesIndexes = isArray ? {} : data.seriesIndexes

    if (scaleColor.variant === 'categorical' && !isArray) {
        if (scaleColor.domain.length === 0) {
            scaleColor = cloneDeep(scaleColor)
            scaleColor.domain = data.keys
        }
    }
    scales.color = createColorScale(scaleColor)
    scales.size = createContinuousScale(scaleSize)

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
