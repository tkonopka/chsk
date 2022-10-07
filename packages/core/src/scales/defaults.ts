import {
    BandScaleSpec,
    CategoricalScaleSpec,
    DivergingScaleSpec,
    LinearScaleSpec,
    LogScaleSpec,
    SequentialScaleSpec,
    SizeScaleSpec,
} from './types'
import { createContinuousScale } from './axes'
import {
    createCategoricalScale,
    createSequentialScale,
    createDivergingScale,
} from './colors.helpers'

export const defaultBandScaleSpec: BandScaleSpec = {
    variant: 'band',
    domain: 'auto',
}

export const defaultLinearScaleSpec: LinearScaleSpec = {
    variant: 'linear',
    domain: 'auto',
    nice: true,
}

export const defaultSizeScaleSpec: SizeScaleSpec = {
    variant: 'sqrt',
    domain: 'auto',
    nice: true,
    size: 'auto',
}

export const defaultLinearScaleWithZeroSpec: LinearScaleSpec = {
    variant: 'linear',
    domain: [0, 'auto'],
}

export const defaultLogScaleSpec: LogScaleSpec = {
    variant: 'log',
    domain: 'auto',
}

export const defaultCategoricalScaleSpec: CategoricalScaleSpec = {
    variant: 'categorical',
    colors: 'Category10',
}

export const defaultSequentialScaleSpec: SequentialScaleSpec = {
    variant: 'sequential',
    colors: 'Blues',
    domain: 'auto',
}

export const defaultDivergingScaleSpec: DivergingScaleSpec = {
    variant: 'diverging',
    colors: 'PuOr',
    domain: ['auto', 0, 'auto'],
}

export const defaultSizeScale = createContinuousScale({
    variant: 'linear',
    domain: [0, 0],
    size: 0,
})

export const defaultCategoricalScale = createCategoricalScale({
    variant: 'categorical',
    colors: 'Category10',
    domain: [],
})

export const defaultSequentialScale = createSequentialScale({
    variant: 'sequential',
    colors: 'Blues',
    domain: [0, 100],
})

export const defaultDivergingScale = createDivergingScale({
    variant: 'diverging',
    colors: 'BrBG',
    domain: [-100, 0, 100],
})

export const defaultScaleX = createContinuousScale({
    variant: 'linear',
    reverseRange: true,
    size: 1,
    domain: [0, 1],
})

export const defaultScaleY = createContinuousScale({
    variant: 'linear',
    reverseRange: true,
    size: 1,
    domain: [0, 1],
})
