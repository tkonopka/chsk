import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { chartProps } from '../props'
import { VerticalGoldenRectangle } from '../../src'

describe('VerticalGoldenRectangle', () => {
    it('creates a vertical golden rectangle', () => {
        render(
            <Chart {...chartProps}>
                <VerticalGoldenRectangle />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toContain('default')
        const width = result?.getAttribute('width')?.replace('px', '')
        const height = result?.getAttribute('height')?.replace('px', '')
        expect(Number(height)).toBeGreaterThan(Number(width))
    })

    it('creates a vertical golden rectangle without role', () => {
        render(
            <Chart {...chartProps}>
                <VerticalGoldenRectangle setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBeNull()
    })
})
