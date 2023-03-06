import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { ArrowMarker } from '../../src'

export const chartProps = {
    size: [400, 300] as [number, number],
    padding: [20, 20, 20, 20] as [number, number, number, number],
}

describe('ArrowMarker', () => {
    it('creates a triangle arrow def', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <ArrowMarker variant={'Triangle'} id={'arrow'} />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('marker')?.getAttribute('id')).toBe('arrow')
    })

    it('creates a winged arrow def', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <ArrowMarker variant={'Winged'} id={'arrow'} />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('marker')?.getAttribute('id')).toBe('arrow')
    })

    it('creates a chevron arrow def', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <ArrowMarker variant={'Chevron'} id={'arrow'} />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('marker')?.getAttribute('id')).toBe('arrow')
    })
})
