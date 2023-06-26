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
                    <ScatterLabel id={'linear'} position={[4, 0]}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-label')).not.toBeNull()
        const result = screen.getByRole('label')
        expect(result.textContent).toBe('Label')
        expect(result.getAttribute('class')).toContain('label scatterLabel')
    })

    it('creates a label using a relative position', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'quadratic'} position={[1, 0]} positionUnits={'relative'}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        // x=1 in view-relative units means at x=400 in svg units,
        // the closest data point will be [8, 64], which is near top-right corner
        const result = screen.getByRole('scatter-label').querySelector('text')
        expect(getTransform(result, 'X')).toEqual(400)
        expect(getTransform(result, 'Y')).toBeLessThan(50)
    })

    it('creates a label using xy position', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps}>
                    <ScatterLabel
                        variant={'xy'}
                        id={'quadratic'}
                        position={[8, 50]}
                        positionUnits={'view'}
                    >
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label').querySelector('text')
        // data has x=1..8 and y=1..64
        // the nearest data point to [8, 50] should be [7, 49]
        expect(getTransform(result, 'X')).toBeLessThan(400)
        expect(getTransform(result, 'Y')).toBeGreaterThan(50)
    })

    it('creates a label using x coordinate', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps}>
                    <ScatterLabel
                        variant={'x'}
                        id={'quadratic'}
                        position={[8, 50]}
                        positionUnits={'view'}
                    >
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label').querySelector('text')
        // data has x=1..8 and y=1..64
        // the nearest data point to [8, 50] is [7, 49] in 2d, but [8, 64] in x dimensions
        expect(getTransform(result, 'X')).toBeGreaterThan(350)
        expect(getTransform(result, 'Y')).toBeLessThan(50)
    })

    it('creates a label using y coordinate', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps}>
                    <ScatterLabel
                        variant={'y'}
                        id={'quadratic'}
                        position={[1, 0.5]}
                        positionUnits={'relative'}
                    >
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label').querySelector('text')
        // data has x=1..8 and y=1..64
        // middle of y axis is 32, and the nearest point is [6, 36]
        expect(getTransform(result, 'X')).toBeLessThan(350)
        expect(getTransform(result, 'Y')).toBeGreaterThan(50)
    })

    it('skips work for non-existent series', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'non-existent'}>Label</ScatterLabel>
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-label')).toBeNull()
    })

    it('uses auto-rotation', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'linear'} position={[4.2, 4.2]} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label').querySelector('text')
        expect(result?.textContent).toBe('Label')
        // rotation should be negative (upward sloping linear line)
        expect(result?.getAttribute('style')).toContain('rotate(-')
    })

    it('uses auto-rotation (different x)', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'linear'} position={[4.8, 4]} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label').querySelector('text')
        expect(result?.textContent).toBe('Label')
        // rotation should be negative (upward sloping linear line)
        expect(result?.getAttribute('style')).toContain('rotate(-')
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear']) }}>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'linear'} position={[4, 4]}>
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
                    <ScatterLabel id={'empty'} position={[4, 4]}>
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
                    { x: 1, y: 6 },
                    { x: 3, y: 6 },
                ],
            },
        ]
        render(
            <Chart>
                <Scatter {...scatterProps} data={verticalData}>
                    <ScatterLabel
                        id={'vertical'}
                        position={[0.5, 5.5]}
                        positionUnits={'view'}
                        autoRotate={true}
                    >
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-label')?.querySelector('text')
        expect(result?.textContent).toBe('Label')
        expect(result?.getAttribute('style')).toContain('90deg')
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
                    <ScatterLabel id={'single'} position={[0.5, 0.5]} autoRotate={true}>
                        Label
                    </ScatterLabel>
                    <ScatterLabel id={'single'} position={[3, 4]} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const labels = screen.queryAllByRole('scatter-label')
        labels.map(label => {
            const result = label.querySelector('text')
            expect(result?.textContent).toBe('Label')
            expect(result?.getAttribute('style')).toContain('rotate(0')
        })
    })
})
