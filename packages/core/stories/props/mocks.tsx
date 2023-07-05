import { SvgElementVariantProps, WithId, ContainerProps } from '../../src/general'
import { ViewProps } from '../../src/views'
import { ColorScaleSpec, NumericScaleSpec, TimeScaleSpec, BandScaleSpec } from '../../src/scales'
import {
    CategoricalScaleSpec,
    SequentialScaleSpec,
    DivergingScaleSpec,
    ThresholdScaleSpec,
} from '../../src/scales'
import {
    DataInteractivityHandlers,
    DataInteractivityModifiers,
    InteractivityProps,
    ComponentProps,
} from '../../src/interactivity'

/**
 * collection of mock objects
 * These are only used to generate tables with props for the documentation
 */

export const MockContainer = (props: ContainerProps) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockColors = ({ scaleColor }: { scaleColor: ColorScaleSpec }) => {
    console.log(JSON.stringify(scaleColor))
    return null
}

export const MockHandlers = (props: InteractivityProps) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockDataHandlers = (props: DataInteractivityHandlers<WithId>) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockStyles = (props: Omit<SvgElementVariantProps, 'setRole'>) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockSetRole = (props: Pick<SvgElementVariantProps, 'setRole'>) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockModifiers = (props: DataInteractivityModifiers) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockScales = (
    props: Pick<ViewProps, 'scaleX' | 'scaleY' | 'scaleColor' | 'scaleSize'>
) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockNumericScale = (props: NumericScaleSpec) => {
    console.log(JSON.stringify(props))
    return null
}
export const MockTimeScale = (props: TimeScaleSpec) => {
    console.log(JSON.stringify(props))
    return null
}
export const MockBandScale = (props: BandScaleSpec) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockCategoricalScale = (props: CategoricalScaleSpec) => {
    console.log(JSON.stringify(props))
    return null
}
export const MockSequentialScale = (props: SequentialScaleSpec) => {
    console.log(JSON.stringify(props))
    return null
}
export const MockDivergingScale = (props: DivergingScaleSpec) => {
    console.log(JSON.stringify(props))
    return null
}
export const MockThresholdScale = (props: ThresholdScaleSpec) => {
    console.log(JSON.stringify(props))
    return null
}

export const MockComponent = <T,>(props: ComponentProps<T>) => {
    console.log(JSON.stringify(props))
    return null
}
