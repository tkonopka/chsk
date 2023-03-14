import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Scatter, ScatterArea } from '../../src/scatter'
import { scatterProps } from './scatter.props'

describe('ScatterArea', () => {
    it('creates a path', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterArea ids={['quadratic']} />
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
                    <ScatterArea ids={['non-existent']} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-area')).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear', 'quadratic']) }}>
                <Scatter {...scatterProps}>
                    <ScatterArea />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-area')).toBeNull()
    })

    it('skips work in non-scatter context', () => {
        render(
            <Chart>
                <View scaleY={{ variant: 'band', domain: ['a', 'b'] }}>
                    <ScatterArea />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('scatter-area')).toBeNull()
    })
})
