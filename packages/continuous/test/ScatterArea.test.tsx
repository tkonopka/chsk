import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterArea } from '../src/scatter'
import { scatterProps } from './props'

describe('ScatterArea', () => {
    it('creates a path', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterArea series={'quadratic'} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-area').querySelectorAll('path')
        expect(result).toHaveLength(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterArea series={'non-existent'} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-area')
        expect(result).toBeNull()
    })
})
