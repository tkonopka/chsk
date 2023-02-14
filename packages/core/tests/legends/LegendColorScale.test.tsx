import { render, screen } from '@testing-library/react'
import { Chart, Legend, View, LegendColorScale } from '../../src'
import { chartProps } from '../props'
import { scaleCategorical, scaleSequential, viewSeriesIndexesKeys } from './Legend.test'

describe('LegendColorScale', () => {
    it('creates a legend with a color scale', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'color'}>
                        <LegendColorScale variant={'bottom'} position={[0, 0]} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.queryByRole('legend')).toBeDefined()
        expect(screen.queryByRole('legend-color-scale')).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks.length).toBeGreaterThan(2)
    })

    it('skips work when color scale is categorical', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendColorScale variant={'bottom'} position={[0, 0]} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.queryByRole('legend')).toBeDefined()
        expect(screen.queryByRole('legend-color-scale')).toBeNull()
    })
})
