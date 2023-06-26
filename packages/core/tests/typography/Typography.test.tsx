import { render, screen } from '@testing-library/react'
import { Chart, Typography } from '../../src'
import { chartProps } from '../props'
import { getTransform } from '../utils'

describe('Typography', () => {
    it('creates a default text component', () => {
        render(
            <Chart {...chartProps}>
                <Typography>default</Typography>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(result.getAttribute('x')).toBeNull()
        expect(result.getAttribute('y')).toBeNull()
        expect(result.getAttribute('role')).toBeNull()
    })

    it('creates a text component with role', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom-text'}>default</Typography>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(result.getAttribute('x')).toBeNull()
        expect(result.getAttribute('y')).toBeNull()
        expect(result.getAttribute('role')).toBe('custom-text')
    })

    it('creates a text component without role', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom-text'} setRole={false}>
                    default
                </Typography>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(result.getAttribute('x')).toBeNull()
        expect(result.getAttribute('y')).toBeNull()
        expect(result.getAttribute('role')).toBeNull()
    })

    it('creates a default text at specific location', () => {
        render(
            <Chart {...chartProps}>
                <Typography position={[20, 50]}>default</Typography>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(getTransform(result, 'X')).toEqual(20)
        expect(getTransform(result, 'Y')).toEqual(50)
    })

    it('creates a title', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'title'}>Title</Typography>
            </Chart>
        )
        const result = screen.getByRole('title')
        expect(result.getAttribute('x')).toBeNull()
        expect(result.getAttribute('y')).toBeNull()
        expect(result.getAttribute('class')).toBe('title')
        expect(result.textContent).toBe('Title')
    })

    it('creates a subtitle', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'subtitle'}>Subtitle</Typography>
            </Chart>
        )
        const result = screen.getByRole('subtitle')
        expect(result.getAttribute('x')).toBeNull()
        expect(result.getAttribute('y')).toBeNull()
        expect(result.getAttribute('class')).toBe('subtitle')
        expect(result.textContent).toBe('Subtitle')
    })

    it('skips creating component when content is empty', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'subtitle'} />
            </Chart>
        )
        expect(screen.queryByRole('subtitle')).toBeNull()
    })

    it('skips creating component when content is null', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'subtitle'}>{null}</Typography>
            </Chart>
        )
        expect(screen.queryByRole('subtitle')).toBeNull()
    })

    it('accepts a number', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom'}>10</Typography>
            </Chart>
        )
        expect(screen.getByRole('custom').textContent).toBe('10')
    })

    it('accepts complex content with {}', () => {
        const value = 10
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom'}>The value is {value}</Typography>
            </Chart>
        )
        expect(screen.getByRole('custom').textContent).toBe('The value is 10')
    })

    it('sets inline styles', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant="custom" style={{ fill: '#ff0000', fontSize: '12px' }}>
                    In color
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('custom')
        expect(result.textContent).toBe('In color')
        expect(result.getAttribute('style')).toContain('font-size: 12px')
        expect(result.getAttribute('style')).toContain('fill: #ff0000')
    })

    it('ignores html tags', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom'}>
                    <p>html</p>
                </Typography>
            </Chart>
        )
        expect(screen.getByRole('custom').textContent).toBe('html')
    })

    it('preserves tspan children', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom'}>
                    one{' '}
                    <tspan>
                        two <tspan>three</tspan>
                    </tspan>{' '}
                    <tspan>four</tspan>
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('custom')
        const textContent = result.textContent
        expect(textContent).toContain('one')
        expect(textContent).toContain('two')
        expect(textContent).toContain('three')
        expect(textContent).toContain('four')
        expect(result.querySelectorAll('tspan')).toHaveLength(3)
    })

    it('rotates text', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom'} angle={90}>
                    content
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('custom')
        expect(result.getAttribute('style')).toContain('deg')
        expect(getTransform(result, 'rotate')).toEqual(90)
    })
})
