import { ContainerThemedProps, SurfaceProps, ViewThemedProps } from './types'
import {
    createColorScaleProps,
    createContinuousScaleProps,
    defaultCategoricalScaleSpec,
    defaultLinearScaleSpec,
    defaultSizeScaleSpec,
} from '../scales'
import { cloneDeep } from 'lodash'

export const defaultContainerProps: ContainerThemedProps = {
    position: [0, 0],
    positionUnits: 'relative',
    size: [1, 1],
    sizeUnits: 'relative',
    anchor: [0, 0],
    padding: [0, 0, 0, 0],
}

export const defaultViewProps: ViewThemedProps = {
    container: cloneDeep(defaultContainerProps),
    scaleX: createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    scaleY: createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    scaleColor: createColorScaleProps(defaultCategoricalScaleSpec, []),
    scaleSize: createContinuousScaleProps(defaultSizeScaleSpec, [0, 100], 25),
    setRole: true,
}

export const defaultSurfaceProps: SurfaceProps = {
    expansion: [0, 0, 0, 0],
}
