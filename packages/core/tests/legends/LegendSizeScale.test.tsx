import { render, screen } from '@testing-library/react'
import { Chart, Legend, LegendSizeScale, View } from '../../src'
import { chartProps } from '../props'
import { viewSeriesIndexesKeys, scaleSequential } from './Legend.test'

describe('LegendSizeScale', () => {
    it('creates a size scale (variant right)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'}>
                        <LegendSizeScale position={[0, 0]} variant={'right'} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })

    it('creates a size scale (variant left)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'}>
                        <LegendSizeScale position={[0, 0]} variant={'left'} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })

    it('creates a size scale (variant top)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'}>
                        <LegendSizeScale position={[0, 0]} variant={'top'} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })

    it('creates a size scale (variant bottom)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'}>
                        <LegendSizeScale position={[0, 0]} variant={'bottom'} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })
})
