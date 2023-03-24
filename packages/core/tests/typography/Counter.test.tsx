import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, Counter, TextContentProps } from '../../src'
import { chartProps } from '../props'
import { useState } from 'react'

describe('Counter', () => {
    it('creates a default counter', () => {
        render(
            <Chart {...chartProps}>
                <Counter>50</Counter>
            </Chart>
        )
        expect(screen.getByRole('counter')).toBeDefined()
        const result = screen.getByRole('chart-content').querySelectorAll('text')
        expect(result).toHaveLength(1)
        expect(result[0].getAttribute('class')).toContain('counter')
    })

    it('creates a counter without role', () => {
        render(
            <Chart {...chartProps}>
                <Counter setRole={false}>50</Counter>
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('text')
        expect(result?.getAttribute('role')).toBeNull()
        expect(result?.getAttribute('class')).toContain('counter')
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
        const counter = screen.getByRole('counter')
        expect(counter.textContent).toEqual('0')
        fireEvent.click(screen.getByRole('circle'))
        await waitFor(() => {
            expect(counter.textContent).toEqual('100')
        })
        fireEvent.click(screen.getByRole('circle'))
        await waitFor(() => {
            expect(counter.textContent).toEqual('200')
        })
    })

    it('rounds values to a fixed number of decimal places', () => {
        render(
            <Chart {...chartProps}>
                <Counter nDecimalPlaces={2}>50.123123</Counter>
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('text')
        expect(result?.textContent).toBe('50.12')
    })

    it('displays values with custom component', () => {
        const CustomValue = ({ children, className }: TextContentProps) => (
            <text className={className}>
                <tspan>abc</tspan> {children} <tspan>xyz</tspan>
            </text>
        )
        render(
            <Chart {...chartProps}>
                <Counter component={CustomValue}>50</Counter>
            </Chart>
        )
        // text element should be annotated as a counter
        const text = screen.getByRole('chart-content').querySelector('text')
        expect(text?.closest('g')?.getAttribute('role')).toContain('counter')
        expect(text?.getAttribute('class')).toContain('counter')
        // there should be two tspan elements
        expect(screen.getByRole('chart-content').querySelectorAll('tspan')).toHaveLength(2)
    })
})
