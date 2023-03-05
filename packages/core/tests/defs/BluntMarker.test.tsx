import { render, screen } from '@testing-library/react'
import { Chart, BluntMarker } from '../../src'
import { chartProps } from '../props'

describe('BluntMarker', () => {
    it('creates a circle def', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <BluntMarker variant={'Circle'} id={'circle'} />
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
                    <BluntMarker variant={'Square'} id={'square'} />
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
                    <BluntMarker variant={'Diamond'} id={'diamond'} />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('marker')?.getAttribute('id')).toBe('diamond')
    })
})
