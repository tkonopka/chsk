import { ColorScaleProps } from '../../src'
import { schemeCategory10 } from 'd3-scale-chromatic'

export const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

export const scaleCategorical: ColorScaleProps = {
    variant: 'categorical',
    colors: schemeCategory10,
    domain: [], // empty domain by default, will be filled in by View
}

export const scaleSequential: ColorScaleProps = {
    variant: 'sequential',
    colors: ['#ffffff', '#0000ff'],
    domain: [0, 100],
}
