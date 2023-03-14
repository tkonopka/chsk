import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Scatter, ScatterPoints } from '../../src/scatter'
import { scatterProps, timeScatterProps } from './scatter.props'

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

    it('creates a series of circles with custom (constant) radius', () => {
        render(
            <Chart>
                <Scatter {...scatterProps} valueSize={8}>
                    <ScatterPoints ids={['linear']} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-points').querySelectorAll('circle')
        expect(result[0].getAttribute('r')).toEqual('8')
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

    it('creates points/bubbles with different sizes', () => {
        const sizeData = [
            {
                id: 'A',
                data: [
                    { x: 1, y: 2, size: 1 },
                    { x: 2, y: 4, size: 4 },
                ],
            },
        ]
        render(
            <Chart>
                <Scatter {...scatterProps} data={sizeData} valueSize={'size'}>
                    <ScatterPoints />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-points').querySelectorAll('circle')
        expect(result).toHaveLength(2)
        // second point has value 4x larger than second point, so radius should be 2x
        const r1 = Number(result[0].getAttribute('r'))
        const r2 = Number(result[1].getAttribute('r'))
        expect(r1).toBeGreaterThan(0)
        expect(r2).toBeGreaterThan(0)
        expect(Math.round(r1)).toEqual(Math.round(r2 / 2))
    })

    it('creates points/bubbles with different colors', () => {
        const sizeData = [
            {
                id: 'A',
                data: [
                    { x: 1, y: 2, color: 1 },
                    { x: 2, y: 4, color: 2 },
                ],
            },
        ]
        render(
            <Chart>
                <Scatter
                    {...scatterProps}
                    data={sizeData}
                    valueColor={'color'}
                    scaleColor={{
                        variant: 'sequential',
                        colors: ['#ff0000', '#00ffff'],
                        domain: 'auto',
                    }}
                >
                    <ScatterPoints />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-points').querySelectorAll('circle')
        expect(result).toHaveLength(2)
        // the two points should be at the extremes of the color scale, i.e. red and white
        expect(result[0].getAttribute('style')).toContain('rgb(255')
        expect(result[1].getAttribute('style')).toContain('rgb(0')
    })

    it('accepts time scale', () => {
        render(
            <Chart>
                <Scatter {...timeScatterProps}>
                    <ScatterPoints />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-points').querySelectorAll('circle')
        expect(result).toHaveLength(4)
    })

    it('skips work in non-scatter context', () => {
        render(
            <Chart>
                <View data={[{ id: 'a' }]}>
                    <ScatterPoints />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('scatter-points')).toBeNull()
    })
})
