import { render, screen } from '@testing-library/react'
import { Chart, Typography } from '../src'
import { chartProps } from './helpers'

describe('Typography', () => {
    it('creates a default textbox', () => {
        render(
            <Chart {...chartProps}>
                <Typography x={0} y={0}>
                    default
                </Typography>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(result.getAttribute('x')).toBe('0')
        expect(result.getAttribute('x')).toBe('0')
    })

    it('creates a title', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'title'} x={0} y={0}>
                    Title
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('title')
        expect(result.getAttribute('x')).toBe('0')
        expect(result.getAttribute('y')).toBe('0')
        expect(result.getAttribute('class')).toBe('title')
        expect(result.textContent).toBe('Title')
    })

    it('creates a subtitle', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'subtitle'} x={0} y={0}>
                    Subtitle
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('subtitle')
        expect(result.getAttribute('x')).toBe('0')
        expect(result.getAttribute('y')).toBe('0')
        expect(result.getAttribute('class')).toBe('subtitle')
        expect(result.textContent).toBe('Subtitle')
    })

    it('skips creating component when content is empty', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'subtitle'} x={0} y={0} />
            </Chart>
        )
        const label = screen.queryByRole('subtitle')
        expect(label).toBeNull()
    })
})

describe('Typography styling', () => {
    it('sets inline styles', () => {
        render(
            <Chart {...chartProps}>
                <Typography
                    variant="custom"
                    x={0}
                    y={0}
                    style={{ fill: '#ff0000', fontSize: '12px' }}
                >
                    In color
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('custom')
        //screen.debug(result)
        expect(result.textContent).toBe('In color')
        expect(result.getAttribute('style')).toContain('font-size: 12px')
        expect(result.getAttribute('style')).toContain('fill: #ff0000')
    })
})
