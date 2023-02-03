import { fireEvent, render, screen } from '@testing-library/react'
import { Chart, Counter } from '../../src'
import { chartProps } from '../props'

describe('Counter', () => {
    it('creates a default counter component', () => {
        render(
            <Chart {...chartProps}>
                <Counter>50</Counter>
            </Chart>
        )
        expect(screen.getByRole('counter')).toBeDefined()
        const result = screen.getByRole('chart-content').querySelectorAll('text')
        expect(result).toHaveLength(1)
    })

    it('updates values', () => {
        render(
            <Chart {...chartProps}>
                <Counter>50</Counter>
            </Chart>
        )
        const counter = screen.getByRole('counter')
        expect(counter).toBeDefined()
        // this is an attempt to trigger the counter animation,
        // but the animation code is not covered... this needs improvement
        fireEvent.change(counter, { target: { textContent: 60 } })
        expect(counter.textContent).toEqual('60')
    })
})
