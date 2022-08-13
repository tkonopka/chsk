import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterPoints } from '../src/scatter'
import { scatterProps } from './props'

describe('ScatterPoints', () => {
    it('creates a series of circles', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterPoints series={'linear'} />
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
                    <ScatterPoints series={'non-existent'} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-points')
        expect(result).toBeNull()
    })
})
