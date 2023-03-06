import { render, screen } from '@testing-library/react'
import { Chart, LinearGradient } from '../../src'
import { chartProps } from '../props'

describe('LinearGradient', () => {
    it('creates a simple gradient', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <LinearGradient
                        id={'grad1'}
                        start={[0, 0]}
                        end={[1, 0]}
                        stops={['#ffffff', '#000000']}
                    />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('linear-gradient')
        expect(result.getAttribute('id')).toBe('grad1')
        const stops = result.querySelectorAll('stop')
        expect(stops).toHaveLength(2)
        expect(stops[0].getAttribute('offset')).toEqual('0')
        expect(stops[1].getAttribute('offset')).toEqual('1')
    })

    it('creates a gradient with custom offsets', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <LinearGradient
                        id={'grad1'}
                        start={[0, 0]}
                        end={[1, 0]}
                        stops={['#ffffff', '#ff0000', '#000000']}
                        offsets={[0, 0.2, 1]}
                    />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('linear-gradient')
        expect(result.getAttribute('id')).toBe('grad1')
        const stops = result.querySelectorAll('stop')
        expect(stops).toHaveLength(3)
        expect(stops[1].getAttribute('offset')).toEqual('0.2')
        expect(stops[2].getAttribute('offset')).toEqual('1')
    })

    it('corrects mis-specified offsets', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <LinearGradient
                        id={'grad1'}
                        start={[0, 0]}
                        end={[1, 0]}
                        stops={['#ffffff', '#ff0000', '#000000']}
                        offsets={[0, 0.4]}
                    />
                </defs>
            </Chart>
        )
        const result = screen.getByRole('linear-gradient')
        expect(result.getAttribute('id')).toBe('grad1')
        const stops = result.querySelectorAll('stop')
        // offsets in props are incorrect (length 2 does not match stops array)
        // so component should use regular spacing instead
        expect(stops).toHaveLength(3)
        expect(stops[0].getAttribute('offset')).toEqual('0')
        expect(stops[1].getAttribute('offset')).toEqual('0.5')
        expect(stops[2].getAttribute('offset')).toEqual('1')
    })

    it('skips creating when not enough colors', () => {
        render(
            <Chart {...chartProps}>
                <defs>
                    <LinearGradient id={'grad1'} start={[0, 0]} end={[1, 0]} stops={['#ffffff']} />
                </defs>
            </Chart>
        )
        expect(screen.queryByRole('linear-gradient')).toBeNull()
    })
})
