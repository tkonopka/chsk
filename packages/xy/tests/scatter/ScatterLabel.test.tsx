import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterLabel } from '../../src/scatter'
import { scatterProps } from './scatter.props'

describe('ScatterLabel', () => {
    it('creates a label', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'linear'} x={4}>
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
                    <ScatterLabel id={'linear'} x={1} units={'relative'}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const text = screen.getByRole('scatter-label').querySelector('text')
        // x=1 in view-relative units means at x=400 in svg units
        expect(text?.closest('g')?.getAttribute('style')).toContain('translateX(400')
    })

    it('skips work for non-existent series', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel id={'non-existent'} x={4}>
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
                    <ScatterLabel id={'linear'} x={4.2} autoRotate={true}>
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
                    <ScatterLabel id={'linear'} x={4.8} autoRotate={true}>
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
                    <ScatterLabel id={'linear'} x={4}>
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
                    <ScatterLabel id={'empty'} x={4}>
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
                    <ScatterLabel id={'vertical'} x={0.5} autoRotate={true}>
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
        render(
            <Chart>
                <Scatter {...scatterProps} data={singleData}>
                    <ScatterLabel id={'single'} x={0.5} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const text = screen.queryByRole('scatter-label')?.querySelector('text')
        expect(text?.textContent).toBe('Label')
        expect(text?.closest('g')?.getAttribute('style')).toContain('rotate(0')
    })
})
