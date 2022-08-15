import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterInterval } from '../src/scatter'
import { scatterProps } from './props'
import { generateScatterSeriesWithInterval } from '../stories/generators'

export const dataWithInterval = [
    generateScatterSeriesWithInterval(
        'A',
        Array(16)
            .fill(0)
            .map((v, i) => i),
        (x: number) => 1 + 0.4 * x + Math.random() * 1.5,
        [-0.5, 0.5]
    ),
]

describe('ScatterInterval', () => {
    it('creates a path', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithInterval}>
                    <ScatterInterval ids={['A']} lower={'lo'} upper={'hi'} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-interval').querySelectorAll('path')
        expect(result).toHaveLength(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithInterval}>
                    <ScatterInterval ids={['non-existent']} lower={'lo'} upper={'hi'} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-interval')
        expect(result).toBeNull()
    })
})
