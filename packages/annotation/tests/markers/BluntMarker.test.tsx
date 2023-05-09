import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { BluntMarker } from '../../src'

export const chartProps = {
    size: [400, 300] as [number, number],
    padding: [20, 20, 20, 20] as [number, number, number, number],
}

describe('BluntMarker', () => {
    it('creates a circle def', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <BluntMarker variant={'circle'} id={'circle'} />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('marker')?.getAttribute('id')).toBe('circle')
    })

    it('creates a square def', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <BluntMarker variant={'square'} id={'square'} />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('marker')?.getAttribute('id')).toBe('square')
    })

    it('creates a diamond def', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <BluntMarker variant={'diamond'} id={'diamond'} />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('marker')?.getAttribute('id')).toBe('diamond')
    })
})
