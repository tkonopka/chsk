import { cloneProps, ContainerThemedProps } from '../general'
import { SurfaceThemedProps, ViewThemedProps } from './types'
import {
    createColorScaleProps,
    createContinuousScaleProps,
    defaultCategoricalScaleSpec,
    defaultLinearScaleNiceSpec,
    defaultSizeScaleSpec,
    SizeScaleProps,
} from '../scales'

export const defaultContainerProps: ContainerThemedProps = {
    position: [0, 0],
    positionUnits: 'relative',
    size: [1, 1],
    sizeUnits: 'relative',
    anchor: [0, 0],
    padding: [0, 0, 0, 0],
    offset: [0, 0],
}

export const defaultViewProps: ViewThemedProps = {
    container: cloneProps(defaultContainerProps),
    scaleX: createContinuousScaleProps(defaultLinearScaleNiceSpec, [0, 100]),
    scaleY: createContinuousScaleProps(defaultLinearScaleNiceSpec, [0, 100]),
    scaleColor: createColorScaleProps(defaultCategoricalScaleSpec, []),
    scaleSize: createContinuousScaleProps(defaultSizeScaleSpec, [0, 100], 25) as SizeScaleProps,
    setRole: true,
}

export const defaultSurfaceProps: SurfaceThemedProps = {
    expansion: [0, 0, 0, 0],
}

export const defaultControllerContainerProps: ContainerThemedProps = {
    position: [1, 0],
    positionUnits: 'relative',
    size: [24, 24],
    sizeUnits: 'absolute',
    anchor: [0, 0],
    padding: [0, 0, 0, 0],
    offset: [0, 0],
}
