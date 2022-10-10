import { fireEvent, render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Bar, BandHighlight } from '../src'
import { barProps } from './props'

describe('BandHighlight', () => {
    it('creates a detector surface (vertical)', () => {
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

    it('creates a detector surface (horizontal)', () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']} horizontal={true}>
                    <BandHighlight />
                </Bar>
            </Chart>
        )
        expect(screen.getByRole('band-detector')).toBeDefined()
        expect(screen.queryByRole('band-highlight-mask')).toBeNull()
    })

    it('creates a detector surface without role', () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight setRole={false} />
                </Bar>
            </Chart>
        )
        expect(screen.queryByRole('band-detector')).toBeNull()
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
