import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterCurve } from '../../src/scatter'
import { scatterProps } from './scatter.props'

describe('ScatterCurve', () => {
    it('creates a path', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCurve ids={['linear']} />
                </Scatter>
            </Chart>
        )
        expect(screen.getByRole('scatter-curve-presence')).toBeDefined()
        expect(screen.getByRole('scatter-curve-presence').querySelectorAll('path')).toHaveLength(1)
        expect(screen.queryAllByRole('scatter-curve')).toHaveLength(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCurve ids={['non-existent']} />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-curve')).toBeNull()
    })

    it('skips rendering when keys are disabled', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['linear', 'quadratic']) }}>
                <Scatter {...scatterProps}>
                    <ScatterCurve />
                </Scatter>
            </Chart>
        )
        expect(screen.queryByRole('scatter-curve')).toBeNull()
    })
})
