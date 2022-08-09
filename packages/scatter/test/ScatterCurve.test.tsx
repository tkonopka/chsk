import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Scatter, ScatterCurve } from '../src'
import { chartProps, scatterProps } from './props'

describe('ScatterCurve', () => {
    it('creates a path', () => {
        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <ScatterCurve series={'linear'} />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-curve').querySelectorAll('path')
        expect(result).toHaveLength(1)
    })

    it('skips work when a series id does not exist', () => {
        render(
            <Chart {...chartProps}>
                <Scatter {...scatterProps}>
                    <ScatterCurve series={'non-existent'} />
                </Scatter>
            </Chart>
        )
        const result = screen.queryByRole('scatter-curve')
        expect(result).toBeNull()
    })
})
