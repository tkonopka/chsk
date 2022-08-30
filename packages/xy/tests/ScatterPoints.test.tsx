import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterPoints } from '../src/scatter'
import { scatterProps } from './props'

describe('ScatterPoints', () => {
    it('creates a series of circles', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterPoints ids={['linear']} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-points').querySelectorAll('circle')
        expect(result).toHaveLength(8)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterPoints ids={['non-existent']} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-points')
        expect(result).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear', 'quadratic']) }}>
                <Scatter {...scatterProps}>
                    <ScatterPoints />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-points')
        expect(result).toBeNull()
    })
})
