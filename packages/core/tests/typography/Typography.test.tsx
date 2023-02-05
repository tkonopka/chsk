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
        expect(getTransform(result, 'X')).toBeNull()
        expect(getTransform(result, 'Y')).toBeNull()
        expect(result.closest('g')?.getAttribute('role')).toBe('default')
    })

    it('creates a text component without role', () => {
        render(
            <Chart {...chartProps}>
                <Typography setRole={false}>default</Typography>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(result.getAttribute('x')).toBeNull()
        expect(result.getAttribute('y')).toBeNull()
        expect(result.closest('g')?.getAttribute('role')).toBeNull()
    })

    it('creates a default text at specific location', () => {
        render(
            <Chart {...chartProps}>
                <Typography position={[20, 50]}>default</Typography>
            </Chart>
        )
        const result = screen.getByText('default').closest('g')
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
        expect(result.querySelector('text')?.getAttribute('class')).toBe('title')
        expect(result.querySelector('text')?.textContent).toBe('Title')
    })

    it('creates a subtitle', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'subtitle'}>Subtitle</Typography>
            </Chart>
        )
        const result = screen.getByRole('subtitle')
        const text = result.querySelector('text')
        expect(result.getAttribute('x')).toBeNull()
        expect(result.getAttribute('y')).toBeNull()
        expect(text?.getAttribute('class')).toBe('subtitle')
        expect(text?.textContent).toBe('Subtitle')
    })

    it('skips creating component when content is empty', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'subtitle'} />
            </Chart>
        )
        const result = screen.queryByRole('subtitle')
        expect(result).toBeNull()
    })

    it('skips creating component when content is null', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'subtitle'}>{null}</Typography>
            </Chart>
        )
        const result = screen.queryByRole('subtitle')
        expect(result).toBeNull()
    })

    it('accepts a number', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom'}>10</Typography>
            </Chart>
        )
        const result = screen.getByRole('custom')
        expect(result.querySelector('text')?.textContent).toBe('10')
    })

    it('accepts complex content with {}', () => {
        const value = 10
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom'}>The value is {value}</Typography>
            </Chart>
        )
        const result = screen.getByRole('custom')
        expect(result.querySelector('text')?.textContent).toBe('The value is 10')
    })

    it('sets inline styles', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant="custom" style={{ fill: '#ff0000', fontSize: '12px' }}>
                    In color
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('custom').querySelector('text')
        expect(result?.textContent).toBe('In color')
        expect(result?.getAttribute('style')).toContain('font-size: 12px')
        expect(result?.getAttribute('style')).toContain('fill: #ff0000')
    })

    it('ignores html', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'custom'}>
                    <p>html</p>
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('custom').querySelector('text')
        expect(result?.textContent).toBe('html')
    })
})
