import { fireEvent, render, screen } from '@testing-library/react'
import { Chart, Counter } from '../../src'
import { chartProps } from '../props'
import { useState } from 'react'

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

    it('updates values', async () => {
        const CustomCounter = () => {
            const [value, setValue] = useState<number>(0)
            return (
                <>
                    <circle
                        key={1}
                        role="circle"
                        onClick={() => {
                            setValue(value => value + 100)
                        }}
                    />
                    <Counter key={2}>{value}</Counter>
                </>
            )
        }
        render(
            <Chart {...chartProps}>
                <CustomCounter />
            </Chart>
        )
        expect(screen.getByRole('counter').textContent).toEqual('0')
        // trigger the counter animation
        fireEvent.click(screen.getByRole('circle'))
        const counter = await screen.findByText('100')
        expect(counter.textContent).toEqual('100')
    })
})
