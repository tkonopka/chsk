import { render, screen } from '@testing-library/react'
import { Chart, Typography } from '../src'
import { chartProps } from './props'

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
        expect(result.getAttribute('role')).toBe('default')
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
        expect(result.getAttribute('role')).toBeNull()
    })

    it('creates a default text at specific location', () => {
        render(
            <Chart {...chartProps}>
                <Typography position={[20, 50]}>default</Typography>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(result.getAttribute('x')).toBe('20')
        expect(result.getAttribute('y')).toBe('50')
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
        const label = screen.queryByRole('subtitle')
        expect(label).toBeNull()
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
})
