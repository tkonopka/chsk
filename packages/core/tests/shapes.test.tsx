import { render, screen } from '@testing-library/react'
import { Chart, Circle, Rect } from '../src'
import { chartProps } from './helpers'

describe('Circle', () => {
    it('creates a default circle', () => {
        render(
            <Chart {...chartProps}>
                <Circle />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('circle')
        expect(result?.getAttribute('cx')).toContain('0')
        expect(result?.getAttribute('cy')).toContain('0')
        expect(result?.getAttribute('r')).toContain('0')
        expect(result?.getAttribute('role')).toContain('default')
    })

    it('creates a default circle without role', () => {
        render(
            <Chart {...chartProps}>
                <Circle cx={10} cy={20} r={5} setRole={false} />
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

describe('Rect', () => {
    it('creates a default rect', () => {
        render(
            <Chart {...chartProps}>
                <Rect x={0} y={10} width={50} height={20} />
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
                <Rect x={0} y={10} width={50} height={20} setRole={false} />
            </Chart>
        )
        const result = screen.getByRole('chart-content').querySelector('rect')
        expect(result?.getAttribute('role')).toBeNull()
    })

    it('creates a custom rect', () => {
        render(
            <Chart {...chartProps}>
                <Rect variant={'test'} x={0} y={10} width={50} height={20} setRole={true} />
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
                <Rect
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
