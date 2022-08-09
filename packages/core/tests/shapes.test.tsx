import { render, screen } from '@testing-library/react'
import { Chart, Circle, Diamond, InvertedTriangle, Rectangle, Square, Triangle } from '../src'
import { chartProps } from './props'

describe('Circle', () => {
    it('creates a default circle', () => {
        render(
            <Chart {...chartProps}>
                <Circle />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('circle')
        expect(result?.getAttribute('cx')).toBeNull()
        expect(result?.getAttribute('cy')).toBeNull()
        expect(result?.getAttribute('r')).toBeNull()
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default circle without role', () => {
        render(
            <Chart {...chartProps}>
                <Circle setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('circle')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom circle', () => {
        render(
            <Chart {...chartProps}>
                <Circle variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('cx')).toContain('10')
        expect(result.getAttribute('cy')).toContain('20')
        expect(result.getAttribute('r')).toContain('5')
        expect(result.getAttribute('role')).toContain('test')
    })
})

describe('Rectangle', () => {
    it('creates a default rect', () => {
        render(
            <Chart {...chartProps}>
                <Rectangle x={0} y={10} width={50} height={20} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('x')).toContain('0')
        expect(result?.getAttribute('width')).toContain('50')
        expect(result?.getAttribute('y')).toContain('10')
        expect(result?.getAttribute('height')).toContain('20')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default rect without role', () => {
        render(
            <Chart {...chartProps}>
                <Rectangle x={0} y={10} width={50} height={20} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom rect', () => {
        render(
            <Chart {...chartProps}>
                <Rectangle variant={'test'} x={0} y={10} width={50} height={20} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('x')).toContain('0')
        expect(result.getAttribute('width')).toContain('50')
        expect(result.getAttribute('y')).toContain('10')
        expect(result.getAttribute('height')).toContain('20')
        expect(result.getAttribute('role')).toContain('test')
    })

    it('creates a centered rect', () => {
        render(
            <Chart {...chartProps}>
                <Rectangle
                    variant={'test'}
                    x={0}
                    y={0}
                    width={50}
                    height={20}
                    center={true}
                    setRole={true}
                />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('x')).toContain('-25')
        expect(result.getAttribute('width')).toContain('50')
        expect(result.getAttribute('y')).toContain('-10')
        expect(result.getAttribute('height')).toContain('20')
    })
})

describe('Diamond', () => {
    it('creates a default diamond', () => {
        render(
            <Chart {...chartProps}>
                <Diamond />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default diamond without role', () => {
        render(
            <Chart {...chartProps}>
                <Diamond setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom diamond', () => {
        render(
            <Chart {...chartProps}>
                <Diamond variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
    })
})

describe('Square', () => {
    it('creates a default square', () => {
        render(
            <Chart {...chartProps}>
                <Square />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toContain('default')
        const width = result?.getAttribute('width')
        const height = result?.getAttribute('height')
        expect(width).toBe(height)
    })

    it('creates a default square without role', () => {
        render(
            <Chart {...chartProps}>
                <Triangle setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom square', () => {
        render(
            <Chart {...chartProps}>
                <Circle variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
        const width = result?.getAttribute('width')
        const height = result?.getAttribute('height')
        expect(width).toBe(height)
    })
})

describe('Triangle', () => {
    it('creates a default triangle', () => {
        render(
            <Chart {...chartProps}>
                <Triangle />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default triangle without role', () => {
        render(
            <Chart {...chartProps}>
                <Triangle setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom triangle', () => {
        render(
            <Chart {...chartProps}>
                <Triangle variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
    })
})

describe('InvertedTriangle', () => {
    it('creates a default inverted triangle', () => {
        render(
            <Chart {...chartProps}>
                <InvertedTriangle />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default inverted triangle without role', () => {
        render(
            <Chart {...chartProps}>
                <InvertedTriangle setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('polygon')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom inverted triangle', () => {
        render(
            <Chart {...chartProps}>
                <InvertedTriangle variant={'test'} cx={10} cy={20} r={5} setRole={true} />
            </Chart>
        )
        const result = screen.getByRole('test')
        expect(result.getAttribute('role')).toContain('test')
    })
})
