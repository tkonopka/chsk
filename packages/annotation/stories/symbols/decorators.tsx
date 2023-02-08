import { ReactNode } from 'react'
import { Chart, Surface, Circle, Square } from '@chsk/core'
import { createConcentricSymbol } from '../../src/symbols'

export const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

export const ChartSymbolDecorator = (Story: () => ReactNode) => (
    <Chart size={[200, 140]} padding={[20, 20, 20, 20]} style={{ display: 'inline-block' }}>
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ConcentricCirclesBg = createConcentricSymbol({
    variant: 'background',
    symbolPrimary: Circle,
    symbolSecondary: Circle,
    rMultiplier: 1.4,
    styleModifier: { fill: '#ffffff' },
})

export const ConcentricCirclesFg = createConcentricSymbol({
    variant: 'foreground',
    symbolPrimary: Circle,
    symbolSecondary: Circle,
    rMultiplier: 0.6,
    styleModifier: { fill: '#ffffff' },
})

export const ConcentricSquares = createConcentricSymbol({
    variant: 'foreground',
    symbolPrimary: Square,
    symbolSecondary: Square,
    rMultiplier: 0.6,
    styleModifier: { fill: '#ffffff' },
})

export const ConcentricHybrid = createConcentricSymbol({
    variant: 'foreground',
    symbolPrimary: Square,
    symbolSecondary: Circle,
    rMultiplier: 0.4,
    styleModifier: { fill: '#ffffff' },
})
