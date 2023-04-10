import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Scatter, ScatterInterval } from '../../src/scatter'
import { scatterProps } from './scatter.props'

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
        expect(screen.getByRole('scatter-interval-presence')).toBeDefined()
        expect(screen.getByRole('scatter-interval-presence').querySelectorAll('path')).toHaveLength(
            1
        )
        expect(screen.queryAllByRole('scatter-interval')).toHaveLength(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} data={dataWithInterval}>
                    <ScatterInterval ids={['non-existent']} lower={'lo'} upper={'hi'} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-interval')).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear', 'quadratic']) }}>
                <Scatter {...scatterProps}>
                    <ScatterInterval lower={'lo'} upper={'hi'} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-interval')).toBeNull()
    })

    it('skips work in non-scatter context', () => {
        render(
            <Chart>
                <View scaleY={{ variant: 'band', domain: ['a', 'b'] }}>
                    <ScatterInterval lower={'lo'} upper={'hi'} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('scatter-interval')).toBeNull()
    })
})
