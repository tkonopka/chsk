import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterArea, ScatterLabel } from '../src/scatter'
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
})
