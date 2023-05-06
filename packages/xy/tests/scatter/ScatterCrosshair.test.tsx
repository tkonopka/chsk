import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { Scatter, ScatterCrosshair, ScatterInteractiveDataItem, ScatterPoints } from '../../src'
import { scatterProps } from './scatter.props'
import { getNumberAttr } from '../../../core/tests/utils'

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

    it('draws two crosshair lines', () => {
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
                    <ScatterCrosshair visible={[true, false]} />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 50, clientY: 50 })
        const lines = screen.getByRole('scatter-crosshair').querySelectorAll('line')
        expect(lines).toHaveLength(1)
        expect(lines[0].getAttribute('x1')).toEqual(lines[0].getAttribute('x2'))
    })

    it('draws one line as horizontal crosshair', () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair visible={[false, true]} />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 50, clientY: 50 })
        const lines = screen.getByRole('scatter-crosshair').querySelectorAll('line')
        expect(lines).toHaveLength(1)
        expect(lines[0].getAttribute('y1')).toEqual(lines[0].getAttribute('y2'))
    })

    it('removes lines upon mouse leave', async () => {
        render(
            <Chart>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair variant={'y'} />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 15, clientY: 15 })
        await waitFor(() => {
            expect(screen.queryByRole('crosshair-presence')).toBeDefined()
        })
        expect(screen.getByRole('scatter-crosshair').querySelectorAll('line')).toHaveLength(2)
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
        expect(screen.getByRole('scatter-crosshair').querySelectorAll('line')).toHaveLength(2)
        // fire an event very far from the data points, crosshair should disappear
        fireEvent.mouseMove(detector, { clientX: 25000, clientY: 25000 })
        await waitFor(() => {
            expect(screen.queryByRole('crosshair-presence')).toBeNull()
        })
    })

    it('targets only active series', async () => {
        render(
            <Chart
                size={[400, 300]}
                padding={[0, 0, 0, 0]}
                data={{ disabledKeys: new Set<string>(['quadratic']) }}
            >
                <Scatter {...scatterProps}>
                    <ScatterCrosshair variant={'y'} visible={[false, true]} />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        // trigger mouse near top-right corner
        // although the quadratic series has a point in top-right quadrant
        // the nearest point in the linear series is the lower half
        fireEvent.mouseMove(detector, { clientX: 200, clientY: 15 })
        await waitFor(() => {
            expect(screen.queryByRole('crosshair-presence')).toBeDefined()
        })
        const line = screen.getByRole('scatter-crosshair').querySelector('line')
        expect(getNumberAttr(line, 'y1')).toBeGreaterThan(150)
        expect(getNumberAttr(line, 'y2')).toBeGreaterThan(150)
    })

    it('provides point data to onClick handler', async () => {
        let data: ScatterInteractiveDataItem | undefined = undefined
        const handleClick = (x?: ScatterInteractiveDataItem) => {
            data = x
        }
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Scatter {...scatterProps}>
                    <ScatterCrosshair handlers={{ onClick: handleClick }} />
                </Scatter>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        // trigger the detector near the top of the chart, i.e. near quadratic series
        fireEvent.mouseMove(detector, { clientX: 200, clientY: 15 })
        await waitFor(() => {
            expect(screen.queryByRole('crosshair-presence')).toBeDefined()
        })
        fireEvent.click(detector, { clientX: 200, clientY: 15 })
        await waitFor(() => {
            expect(data).not.toBeUndefined()
            expect(data?.id).toBe('quadratic')
        })
    })
})
