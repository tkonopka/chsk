import { fireEvent, render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Density, DensityCrosshair } from '../../src/density'
import { densityProps } from './density.props'

describe('DensityCrosshair', () => {
    it('creates a detector for mouse events', () => {
        render(
            <Chart>
                <Density {...densityProps}>
                    <DensityCrosshair />
                </Density>
            </Chart>
        )
        expect(screen.getByRole('density-crosshair').querySelectorAll('rect')).toHaveLength(1)
    })

    it('draws crosshair lines', () => {
        render(
            <Chart>
                <Density {...densityProps}>
                    <DensityCrosshair />
                </Density>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 150, clientY: 150 })
        const lines = screen.getByRole('density-crosshair').querySelectorAll('line')
        expect(lines).toHaveLength(2)
    })

    it('draws an active point', () => {
        render(
            <Chart>
                <Density {...densityProps}>
                    <DensityCrosshair symbolClassName={'custom'} />
                </Density>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        fireEvent.mouseMove(detector, { clientX: 150, clientY: 150 })
        const symbol = screen.getByRole('crosshair-presence').querySelector('rect')
        expect(symbol?.getAttribute('class')).toContain('active')
        expect(symbol?.getAttribute('class')).toContain('custom')
    })

    it('ignores events beyond a certain distance', () => {
        render(
            <Chart size={[300, 300]} padding={[0, 0, 0, 0]}>
                <Density {...densityProps} binSize={20}>
                    <DensityCrosshair minDistance={50} />
                </Density>
            </Chart>
        )
        const detector = screen.getByRole('crosshair-detector')
        expect(screen.queryByRole('density-crosshair')?.querySelectorAll('line')).toHaveLength(0)
        // moving mouse in empty areas should not trigger crosshair
        fireEvent.mouseMove(detector, { clientX: 0, clientY: 150 })
        expect(screen.queryByRole('density-crosshair')?.querySelectorAll('line')).toHaveLength(0)
        // moving mouse on top of an data square should trigger crosshair lines
        fireEvent.mouseMove(detector, { clientX: 10, clientY: 10 })
        expect(screen.queryByRole('density-crosshair')?.querySelectorAll('line')).toHaveLength(2)
        fireEvent.mouseMove(detector, { clientX: 10, clientY: 10 })
        expect(screen.queryByRole('density-crosshair')?.querySelectorAll('line')).toHaveLength(2)
    })

    it('applies a click handler', () => {
        let result = 0
        const handleClick = () => {
            result += 1
        }
        render(
            <Chart size={[300, 300]} padding={[0, 0, 0, 0]}>
                <Density {...densityProps} binSize={20}>
                    <DensityCrosshair handlers={{ onClick: handleClick }} />
                </Density>
            </Chart>
        )
        //
        expect(result).toEqual(0)
        const detector = screen.getByRole('crosshair-detector')
        // check that a coordinate activate a crosshair
        fireEvent.mouseMove(detector, { clientX: 0, clientY: 0 })
        expect(screen.queryByRole('density-crosshair')?.querySelectorAll('line')).toHaveLength(2)
        // click should trigger a custom function
        fireEvent.click(detector, { clientX: 0, clientY: 0 })
        expect(result).toEqual(1)
        fireEvent.click(detector, { clientX: 0, clientY: 0 })
        expect(result).toEqual(2)
    })
})
