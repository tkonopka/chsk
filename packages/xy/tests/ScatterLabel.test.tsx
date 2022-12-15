import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterLabel, ScatterPoints } from '../src/scatter'
import { scatterProps } from './props'

describe('ScatterLabel', () => {
    it('creates a label', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel ids={['linear']} x={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label')
        expect(result.querySelector('text')?.textContent).toBe('Label')
    })

    it('creates a label using a relative position', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps}>
                    <ScatterLabel ids={['linear']} x={1} units={'relative'}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label')
        // x=1 in view-relative units means at x=400 in svg units
        expect(result.querySelector('text')?.getAttribute('style')).toContain('translateX(400')
    })

    it('skips work for non-existent series', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel ids={['non-existent']} x={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-curve')
        expect(result).toBeNull()
    })

    it('uses auto-rotation', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel ids={['linear']} x={4.2} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label')
        expect(result.querySelector('text')?.textContent).toBe('Label')
        // rotation should be negative (upward sloping linear line)
        expect(result.querySelector('text')?.getAttribute('transform')).toContain('rotate(-')
    })

    it('uses auto-rotation (different x)', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel ids={['linear']} x={4.8} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label')
        expect(result.querySelector('text')?.textContent).toBe('Label')
        // rotation should be negative (upward sloping linear line)
        expect(result.querySelector('text')?.getAttribute('transform')).toContain('rotate(-')
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear']) }}>
                <Scatter {...scatterProps}>
                    <ScatterLabel ids={['linear']} x={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-label')
        expect(result).toBeNull()
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
                    <ScatterLabel ids={['empty']} x={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-label')
        expect(result).toBeNull()
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
                    <ScatterLabel ids={['vertical']} x={0.5} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-label')
        expect(result?.textContent).toBe('Label')
        // slope will be positive, so rotate -90
        expect(result?.querySelector('text')?.getAttribute('transform')).toContain('rotate(-90')
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
                    <ScatterLabel ids={['single']} x={0.5} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-label')
        expect(result?.textContent).toBe('Label')
        expect(result?.querySelector('text')?.getAttribute('transform')).toBeNull()
    })
})
