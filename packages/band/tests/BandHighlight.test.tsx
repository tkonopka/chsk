import { fireEvent, render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { Bar, BandHighlight } from '../src'
import { barProps } from './props'

describe('BandHighlight', () => {
    it('creates a detector surface', () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight />
                </Bar>
            </Chart>
        )
        expect(screen.getByRole('band-detector')).toBeDefined()
        expect(screen.queryByRole('band-highlight-mask')).toBeNull()
    })

    it('creates masks on mouseover and removes on mouseleave', () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight />
                </Bar>
            </Chart>
        )
        const detector = screen.getByRole('band-detector')
        fireEvent.mouseMove(detector, { clientX: 40, clientY: 40 })
        expect(screen.getByRole('band-highlight-mask')).toBeDefined()
        fireEvent.mouseLeave(detector)
        expect(screen.queryByRole('band-highlight-mask')).toBeNull()
    })
})