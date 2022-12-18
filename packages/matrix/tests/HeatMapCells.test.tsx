import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { HeatMap, HeatMapCells } from '../src'
import { genericViewProps, heatmapCategoricalProps, heatmapProps } from './props'

describe('HeatMapCells', () => {
    it('draws cells', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // the data has four rows and three columns (x, y, z)
        expect(result.querySelectorAll('rect')).toHaveLength(12)
    })

    it('assigns className', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y']}>
                    <HeatMapCells keys={['x']} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        expect(result.querySelectorAll('rect')[0].getAttribute('class')).toEqual('cell')
    })

    it('draws cells only for selected ids', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells ids={['alpha', 'beta']} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // there should be cells for two rows with three keys each
        expect(result.querySelectorAll('rect')).toHaveLength(6)
    })

    it('draws cells only for selected keys', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y', 'z']}>
                    <HeatMapCells keys={['x', 'y']} />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        // the data has four rows and two columns (x, y)
        expect(result.querySelectorAll('rect')).toHaveLength(8)
    })

    it('draws cells only for selected cells', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y']}>
                    <HeatMapCells
                        cells={[
                            ['alpha', 'x'],
                            ['beta', 'y'],
                        ]}
                    />
                </HeatMap>
            </Chart>
        )
        const result = screen.getByRole('heatmap-cells')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    it('skips work when ids and keys are not relevant', () => {
        render(
            <Chart>
                <HeatMap {...heatmapProps} keys={['x', 'y']}>
                    <HeatMapCells keys={['z']} />
                </HeatMap>
            </Chart>
        )
        expect(screen.queryByRole('heatmap-cells')).toBeNull()
    })

    it('accepts data in string form', () => {
        render(
            <Chart>
                <HeatMap {...heatmapCategoricalProps} keys={['x', 'y']}>
                    <HeatMapCells />
                </HeatMap>
            </Chart>
        )
        // the dataset has four cells
        const result = screen.getByRole('heatmap-cells')
        expect(result.querySelectorAll('rect')).toHaveLength(4)
    })

    it('skips work in non-heatmap context', () => {
        render(
            <Chart>
                <View {...genericViewProps}>
                    <HeatMapCells />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('heatmap-cells')).toBeNull()
    })
})
