import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterCrosshair, ScatterPoints } from '../src'
import { scatterProps } from './props'

describe('ScatterCrosshair', () => {
    it('creates a rectangle for detecting mouse events', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterPoints ids={['linear']} />
                    <ScatterCrosshair />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-crosshair').querySelectorAll('rect')
        expect(result).toHaveLength(1)
    })
})
