import { render, screen } from '@testing-library/react'
import { Chart, Legend, View } from '../../src'
import { chartProps } from '../props'
import { getNumberAttr } from '../utils'
import { scaleCategorical, scaleSequential, viewSeriesIndexesKeys } from './legends.props'

describe('Legend (list)', () => {
    it('creates a legend in top-right corner', () => {
        render(
            <Chart size={[400, 400]} padding={[50, 50, 50, 50]}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend
                        size={[100, 100]}
                        sizeUnits={'absolute'}
                        position={[1, 0]}
                        positionUnits={'relative'}
                        anchor={[1, 0]}
                        offset={[-10, 20]} // slightly displaced from the corner
                    />
                </View>
            </Chart>
        )
        // the view dimensions will be 300x300
        // legend box should be located 110 from the left edge:  300-110 = 190
        // legend box should be 20 down from top edge
        expect(screen.getByRole('legend').getAttribute('transform')).toEqual('translate(190,20)')
    })

    it('creates a legend with categorical colors', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend />
                </View>
            </Chart>
        )
        const legend = screen.getByRole('legend')
        expect(legend).toBeDefined()
        expect(screen.getAllByRole('legend-item')).toHaveLength(3)
        expect(legend.querySelectorAll('text')).toHaveLength(3)
    })

    it('creates legend items with role and class', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend setRole={true} />
                </View>
            </Chart>
        )
        const items = screen.getAllByRole('legend-item')
        expect(items).toHaveLength(3)
        expect(items[0].getAttribute('role')).toContain('legend-item')
        expect(items[0].getAttribute('class')).toContain('legendItem')
    })

    it('creates legend items without role', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <Legend setRole={false} />
                </View>
            </Chart>
        )
        expect(screen.queryAllByRole('legend-item')).toHaveLength(0)
    })

    it('shifts legend content when a title is present', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <Legend horizontal={false} itemSize={[80, 20]} title={'custom title'} />
                </View>
            </Chart>
        )
        const items = screen.getAllByRole('legend-item')
        expect(items[0].getAttribute('transform')).toContain('translate(0,20)')
    })

    it('creates a background surface rectangle', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <Legend itemSize={[80, 20]} title={'custom title'} />
                </View>
            </Chart>
        )
        const surface = screen.getByRole('legend-surface')
        const n = 1 + screen.getAllByRole('legend-item').length
        expect(surface.getAttribute('class')).toContain('legend surface')
        expect(surface.getAttribute('width')).toBe('80')
        expect(surface.getAttribute('height')).toBe(String(n * 20))
    })

    it('uses padding to shift title and items', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <Legend
                        position={[0, 0]}
                        size={[100, 60]}
                        sizeUnits={'absolute'}
                        padding={[5, 5, 5, 5]}
                        itemSize={[80, 20]}
                        title={'custom title'}
                    />
                </View>
            </Chart>
        )
        const title = screen.getAllByRole('legend-title')
        const titleRect = title[0].querySelector('rect')
        expect(getNumberAttr(titleRect, 'x')).toEqual(5)
        expect(getNumberAttr(titleRect, 'y')).toEqual(5)
    })
})

describe('Legend (color)', () => {
    it('creates a legend with a color scale', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'color'} />
                </View>
            </Chart>
        )
        const legend = screen.getByRole('legend')
        expect(legend).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks.length).toBeGreaterThan(2)
    })

    it('skips work when color scale is categorical', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'color'} />
                </View>
            </Chart>
        )
        const result = screen.queryByRole('legend-color-scale')
        expect(result).toBeNull()
    })
})

describe('Legend (size)', () => {
    it('creates a legend with a size scale', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <Legend variant={'size'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })
})
