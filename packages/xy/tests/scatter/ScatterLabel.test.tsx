import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterLabel } from '../../src/scatter'
import { scatterProps } from './scatter.props'
import { getTransform } from '../../../core/tests/utils'

// tests use a dataset with two series: 'linear' (y=x) and 'quadratic' (y=x**2)
// the x domain for both series is [1, 8]

describe('ScatterLabel', () => {
    it('creates a label', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'linear'} position={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-label')).not.toBeNull()
        const label = screen.getByRole('label')
        expect(label).not.toBeNull()
        expect(label.querySelector('text')?.textContent).toBe('Label')
        expect(label.querySelector('text')?.getAttribute('class')).toContain('label scatterLabel')
    })

    it('creates a label using a relative position', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'quadratic'} position={1} positionUnits={'relative'}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        // x=1 in view-relative units means at x=400 in svg units,
        // the closest data point will be [8, 64], which is near top-right corner
        const text = screen.getByRole('scatter-label').querySelector('text')
        const g = text?.closest('g')
        expect(getTransform(g ?? text, 'X')).toEqual(400)
        expect(getTransform(g ?? text, 'Y')).toBeLessThan(50)
    })

    it('creates a label using xy position', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'quadratic'} position={[8, 50]} positionUnits={'view'}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const text = screen.getByRole('scatter-label').querySelector('text')
        // data has x=1..8 and y=1..64
        // the nearest data point to [8, 50] should be [7, 49] rather than [8, 64]
        const g = text?.closest('g')
        expect(getTransform(g ?? text, 'X')).toBeLessThan(400)
        expect(getTransform(g ?? text, 'Y')).toBeGreaterThan(50)
    })

    it('skips work for non-existent series', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'non-existent'} position={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-label')).toBeNull()
    })

    it('uses auto-rotation', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'linear'} position={4.2} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const text = screen.getByRole('scatter-label').querySelector('text')
        expect(text?.textContent).toBe('Label')
        // rotation should be negative (upward sloping linear line)
        expect(text?.closest('g')?.getAttribute('style')).toContain('rotate(-')
    })

    it('uses auto-rotation (different x)', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'linear'} position={4.8} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const text = screen.getByRole('scatter-label').querySelector('text')
        expect(text?.textContent).toBe('Label')
        // rotation should be negative (upward sloping linear line)
        expect(text?.closest('g')?.getAttribute('style')).toContain('rotate(-')
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear']) }}>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'linear'} position={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('label')).toBeNull()
    })

    it('skips rendering for empty data', () => {
        const emptyData = [
            {
                id: 'empty',
                data: [],
            },
        ]
        render(
            <Chart>
                <Scatter {...scatterProps} data={emptyData}>
                    <ScatterLabel id={'empty'} position={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-label')).toBeNull()
    })

    it('handles vertical lines', () => {
        const verticalData = [
            {
                id: 'vertical',
                data: [
                    { x: 1, y: 2 },
                    { x: 1, y: 4 },
                    { x: 3, y: 6 },
                ],
            },
        ]
        render(
            <Chart>
                <Scatter {...scatterProps} data={verticalData}>
                    <ScatterLabel id={'vertical'} position={0.5} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const text = screen.queryByRole('scatter-label')?.querySelector('text')
        expect(text?.textContent).toBe('Label')
        // slope will be positive, so rotate -90
        expect(text?.closest('g')?.getAttribute('style')).toContain('rotate(-90')
    })

    it('handles data series with single point', () => {
        const singleData = [
            {
                id: 'single',
                data: [{ x: 1, y: 2 }],
            },
        ]
        // match single-value and xy-value positions to data points
        render(
            <Chart>
                <Scatter {...scatterProps} data={singleData}>
                    <ScatterLabel id={'single'} position={0.5} autoRotate={true}>
                        Label
                    </ScatterLabel>
                    <ScatterLabel id={'single'} position={[3, 4]} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.queryAllByRole('scatter-label')
        result.map(label => {
            const text = label.querySelector('text')
            expect(text?.textContent).toBe('Label')
            expect(text?.closest('g')?.getAttribute('style')).toContain('rotate(0')
        })
    })
})
