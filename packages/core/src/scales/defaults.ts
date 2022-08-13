import { BandScaleSpec, LinearScaleSpec, LogScaleSpec } from './types'

export const defaultBandScaleSpec: BandScaleSpec = {
    variant: 'band',
    domain: 'auto',
}

export const defaultLinearScaleSpec: LinearScaleSpec = {
    variant: 'linear',
    domain: [0, 'auto'],
}

export const defaultLogScaleSpec: LogScaleSpec = {
    variant: 'log',
    domain: 'auto',
}
