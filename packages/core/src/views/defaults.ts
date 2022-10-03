import { SurfaceProps, ViewThemedProps } from './types'
import {
    createColorScaleProps,
    createContinuousScaleProps,
    defaultCategoricalScaleSpec,
    defaultLinearScaleSpec,
    defaultSizeScaleSpec,
} from '../scales'

export const defaultViewProps: ViewThemedProps = {
    scaleX: createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    scaleY: createContinuousScaleProps(defaultLinearScaleSpec, [0, 100]),
    scaleColor: createColorScaleProps(defaultCategoricalScaleSpec, []),
    scaleSize: createContinuousScaleProps(defaultSizeScaleSpec, [0, 100], 25),
    units: 'relative' as const,
    position: [0, 0],
    size: [1, 1],
    anchor: [0, 0],
    padding: [0, 0, 0, 0],
}

export const defaultSurfaceProps: SurfaceProps = {
    expansion: [0, 0, 0, 0],
}
