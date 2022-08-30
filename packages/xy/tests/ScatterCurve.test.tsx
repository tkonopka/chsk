import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterCurve } from '../src/scatter'
import { scatterProps } from './props'

describe('ScatterCurve', () => {
    it('creates a path', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCurve ids={['linear']} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-curve').querySelectorAll('path')
        expect(result).toHaveLength(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCurve ids={['non-existent']} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-curve')
        expect(result).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear', 'quadratic']) }}>
                <Scatter {...scatterProps}>
                    <ScatterCurve />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-curve')
        expect(result).toBeNull()
    })
})
