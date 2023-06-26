import { useState } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, Counter } from '../../src'
import { chartProps } from '../props'
import { getTransform } from '../utils'

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

    it('creates a counter with offset position', () => {
        render(
            <Chart {...chartProps}>
                <Counter position={[10, 20]} offset={[4, 6]}>
                    50
                </Counter>
            </Chart>
        )
        const counter = screen.getByRole('counter')
        expect(getTransform(counter, 'X')).toEqual(14)
        expect(getTransform(counter, 'Y')).toEqual(26)
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

    it('displays values with custom format', () => {
        const customFormat = (value: number) => {
            return (
                <tspan>
                    abc <tspan className={'custom'}>{value}</tspan> xyz
                </tspan>
            )
        }
        render(
            <Chart {...chartProps}>
                <Counter format={customFormat}>50</Counter>
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('text')
        expect(result?.getAttribute('role')).toContain('counter')
        expect(result?.getAttribute('class')).toContain('counter')
        expect(screen.getByRole('chart-content').querySelectorAll('tspan')).toHaveLength(2)
    })
})
