import { render, screen } from '@testing-library/react'
import { Chart, Circle, Line, NumericPositionSpec, squaredDistance } from '@chsk/core'
import { Scatter, ScatterSelectedLabels, ScatterSelectedLabelData } from '../../src/scatter'
import { scatterProps } from './scatter.props'
import { getNumberAttr, getTransform } from '../../../core/tests/utils'

describe('ScatterSelectedLabels', () => {
    it('creates a label', () => {
        const data: ScatterSelectedLabelData[] = [
            { id: 'linear', index: 0, size: [40, 20], content: 'label' },
        ]
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterSelectedLabels data={data} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-selected-labels')).toBeDefined()
        const label = screen.getByRole('scatter-selected-label')
        expect(label.querySelector('text')?.textContent).toBe('label')
        expect(label.querySelector('text')?.getAttribute('class')).toContain('scatterLabel')
    })

    it('creates a label and a symbol', () => {
        const scatterData = [
            {
                id: 'A',
                data: [
                    { x: 0, y: 0 },
                    { x: 4, y: 16 },
                    { x: 8, y: 64 },
                ],
            },
        ]
        const labelData: ScatterSelectedLabelData[] = [
            { id: 'A', index: 1, size: [40, 20], content: 'label' },
        ]
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps} data={scatterData}>
                    <ScatterSelectedLabels data={labelData} symbol={Circle} offset={[0, -0.1]} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-selected-labels')
        // chart will have scales with domains x=0..8 and y=0..64
        // a circle should be present at [4, 16], i.e. halfway along x domain
        const symbol = result.querySelector('circle')
        const [cx, cy] = [getNumberAttr(symbol, 'cx'), getNumberAttr(symbol, 'cy')]
        expect(cx).toBe(200)
        expect(cy).toBeGreaterThan(150)
        expect(cy).toBeLessThan(300)
        // label should be above the symbol, i.e. lower y coordinate
        const label = screen.getByRole('scatter-selected-label')?.querySelector('text') ?? null
        expect(label?.textContent).toBe('label')
        expect(getTransform(label, 'X')).toBe(200)
        expect(getTransform(label, 'Y')).toBeLessThan(cy)
    })

    it('displays labels only for active data series', () => {
        const labelData: ScatterSelectedLabelData[] = [
            { id: 'linear', index: 1, size: [40, 20], content: 'linear' },
            { id: 'quadratic', index: 4, size: [40, 20], content: 'quadratic' },
        ]
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear']) }}>
                <Scatter {...scatterProps}>
                    <ScatterSelectedLabels data={labelData} symbol={Circle} offset={[0, -0.1]} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-selected-labels')
        const symbols = result.querySelectorAll('circle')
        const labels = result.querySelectorAll('text')
        expect(symbols).toHaveLength(1)
        expect(labels).toHaveLength(1)
        expect(labels[0].textContent).toBe('quadratic')
        // symbol and label should be nearby
        const symbolPosition: NumericPositionSpec = [
            getNumberAttr(symbols[0], 'cx'),
            getNumberAttr(symbols[0], 'cy'),
        ]
        const labelPosition: NumericPositionSpec = [
            getTransform(labels[0], 'X') ?? -100,
            getTransform(labels[0], 'Y') ?? -100,
        ]
        expect(Math.sqrt(squaredDistance(symbolPosition, labelPosition))).toBeLessThan(50)
    })

    it('displays connecting line', () => {
        const labelData: ScatterSelectedLabelData[] = [
            { id: 'linear', index: 1, size: [40, 20], content: 'linear' },
        ]
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterSelectedLabels data={labelData} connector={Line} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-selected-labels')
        const lines = result.querySelectorAll('line')
        const labels = result.querySelectorAll('text')
        expect(lines).toHaveLength(1)
        expect(labels).toHaveLength(1)
    })
})
