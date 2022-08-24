import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterInterval } from '../src/scatter'
import { scatterProps } from './props'

export const dataWithInterval = [
    {
        id: 'A',
        data: [
            { x: 0, y: 0, lo: 0, hi: 1 },
            { x: 1, y: 1.5, lo: 1.0, hi: 2.0 },
            { x: 2, y: 2.5, lo: 2.0, hi: 3.0 },
            { x: 3, y: 2.0, lo: 1.5, hi: 2.5 },
            { x: 4, y: 3.0, lo: 2.5, hi: 3.5 },
            { x: 5, y: 4.0, lo: 3.5, hi: 4.5 },
        ],
    },
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
