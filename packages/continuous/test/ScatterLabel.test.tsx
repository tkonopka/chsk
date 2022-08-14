import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterLabel } from '../src/scatter'
import { scatterProps } from './props'

describe('ScatterLabel', () => {
    it('creates a label', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel series={'linear'} x={4}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label')
        expect(result.textContent).toBe('Label')
    })

    it('skips work for non-existent series', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel series={'non-existent'} x={4}>
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
                    <ScatterLabel series={'linear'} x={4.2} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label')
        expect(result.textContent).toBe('Label')
        // rotation should be negative (upward sloping linear line)
        expect(result.getAttribute('transform')).toContain('rotate(-')
    })

    it('uses auto-rotation (different x)', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterLabel series={'linear'} x={4.8} autoRotate={true}>
                        Label
                    </ScatterLabel>
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-label')
        expect(result.textContent).toBe('Label')
        // rotation should be negative (upward sloping linear line)
        expect(result.getAttribute('transform')).toContain('rotate(-')
    })
})
