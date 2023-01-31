import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Scatter, ScatterCrosshair } from '../src'
import { scatterProps } from './props'

describe('ScatterCrosshair', () => {
    it('creates a rectangle for detecting mouse events', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair />
                </Scatter>
            </Chart>
        )
        const result = screen.getByRole('scatter-crosshair').querySelectorAll('rect')
        expect(result).toHaveLength(1)
    })

    it('creates components without role', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair setRole={false} />
                </Scatter>
            </Chart>
        )
        const view = screen.getByRole('view-scatter')
        expect(screen.queryByRole('scatter-crosshair')).toBeNull()
        expect(view.querySelector('rect')).not.toBeNull()
    })
})
