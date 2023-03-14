import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Scatter, ScatterCrosshair } from '../../src'
import { scatterProps } from './scatter.props'

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

    it('skips work in non-scatter context', () => {
        render(
            <Chart>
                <View data={scatterProps.data}>
                    <ScatterCrosshair setRole={false} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('scatter-crosshair')).toBeNull()
    })

    it('draws two lines as crosshairs', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 50, clientY: 50 })
        const lines = screen.getByRole('scatter-crosshair').querySelectorAll('line')
        expect(lines).toHaveLength(2)
    })

    it('draws one line as vertical crosshair', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair variant={'vertical'} />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 50, clientY: 50 })
        const lines = screen.getByRole('scatter-crosshair').querySelectorAll('line')
        expect(lines).toHaveLength(1)
    })

    it('removes lines upon mouse leave', async () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair variant={'horizontal'} />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 15, clientY: 15 })
        await waitFor(() => {
            expect(screen.queryByRole('crosshair-presence')).toBeDefined()
        })
        const lines = screen.getByRole('scatter-crosshair').querySelectorAll('line')
        expect(lines).toHaveLength(1)
        fireEvent.mouseLeave(detector)
        await waitFor(() => {
            expect(screen.queryByRole('crosshair-presence')).toBeNull()
        })
    })

    it('draws crosshair only near point', async () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair minDistance={400} />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 100, clientY: 100 })
        fireEvent.mouseMove(detector, { clientX: 100, clientY: 100 })
        await waitFor(() => {
            expect(screen.queryByRole('crosshair-presence')).toBeDefined()
        })
        const lines = screen.getByRole('scatter-crosshair').querySelectorAll('line')
        expect(lines).toHaveLength(2)
        // fire an event very far from the data points, crosshair should disappear
        fireEvent.mouseMove(detector, { clientX: 25000, clientY: 25000 })
        await waitFor(() => {
            expect(screen.queryByRole('crosshair-presence')).toBeNull()
        })
    })
})
