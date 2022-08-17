import {
    BandScaleSpec,
    CategoricalScaleSpec,
    DivergingScaleSpec,
    LinearScaleSpec,
    LogScaleSpec,
    SequentialScaleSpec,
} from './types'
import { createContinuousScale } from './continuous'
import { createCategoricalScale } from './categorical'
import { createSequentialScale } from './sequential'
import { createDivergingScale } from './diverging'

export const defaultBandScaleSpec: BandScaleSpec = {
    variant: 'band',
    domain: 'auto',
}

export const defaultLinearScaleSpec: LinearScaleSpec = {
    variant: 'linear',
    domain: 'auto',
    nice: true,
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
    axis: 'x',
    domain: [0, 0],
    size: 1,
})

export const defaultCategoricalScale = createCategoricalScale(defaultCategoricalScaleSpec)

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
