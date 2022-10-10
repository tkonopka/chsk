import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Bar, BandLabels } from '../src'
import { barProps } from './props'

describe('BandLabels', () => {
    it('creates default band labels', () => {
        render(
            <Chart>
                <Bar {...barProps} horizontal={true} keys={['x']}>
                    <BandLabels />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('band-labels')
        const labels = result.querySelectorAll('text')
        expect(labels).toHaveLength(2)
        // band labels should be at the end of horizontal bars
        expect(labels[0].getAttribute('x')).toEqual(labels[1].getAttribute('x'))
    })

    it('skips labels when ids are empty', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <BandLabels ids={[]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-bar')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })
})
