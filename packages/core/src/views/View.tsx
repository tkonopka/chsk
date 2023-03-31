import { LazyMotion, domAnimation } from 'framer-motion'
import { ViewProps } from './types'
import { useContainer } from './hooks'
import { BaseView } from './BaseView'
import { useThemedProps } from '../themes'
import { defaultContainerProps, defaultViewProps } from './defaults'
import { cloneDeep } from 'lodash'
import { fillSize, useCreateScales } from '../scales'
import { X, Y } from '../general'

const UnthemedView = ({
    variant = 'default',
    container = defaultContainerProps,
    data = [],
    scaleX = defaultViewProps.scaleX,
    scaleY = defaultViewProps.scaleY,
    scaleColor = defaultViewProps.scaleColor,
    scaleSize = defaultViewProps.scaleSize,
    className,
    setRole = defaultViewProps.setRole,
    style,
    children,
}: ViewProps) => {
    const { dimsProps, origin, innerSize } = useContainer(container)

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
    const scalesContextValue = useCreateScales({
        x: fillSize(scaleX, innerSize[X]),
        y: fillSize(scaleY, innerSize[Y]),
        color: scaleColor,
        size: scaleSize,
    })

    return (
        <BaseView
            variant={variant}
            position={origin}
            size={dimsProps.size}
            padding={dimsProps.padding}
            originalData={dataArray}
            processedData={dataArray}
            seriesIndexes={seriesIndexes}
            keys={keys}
            scalesContextValue={scalesContextValue}
            setRole={setRole}
            className={className}
            style={style}
        >
            <LazyMotion features={domAnimation}>{children}</LazyMotion>
        </BaseView>
    )
}

export const View = (props: ViewProps) => <UnthemedView {...useThemedProps(props, 'View')} />
