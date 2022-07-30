import { render, screen } from '@testing-library/react'
import { Chart, Typography } from '../src'

const chartProps = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
    data: [],
}

describe('Typography', () => {
    it('creates a default textbox', () => {
        render(
            <Chart {...chartProps}>
                <Typography x={0} y={0}>
                    default
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('text-default')
        //screen.debug(result)
        expect(result.getAttribute('x')).toBe('0')
        expect(result.getAttribute('y')).toBe('0')
        expect(result.getAttribute('class')).toBe(null)
        expect(result.textContent).toBe('default')
    })

    it('creates a title', () => {
        render(
            <Chart {...chartProps}>
                <Typography variant={'title'} x={0} y={0}>
                    Title
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('text-title')
        expect(result.getAttribute('x')).toBe('0')
        expect(result.getAttribute('y')).toBe('0')
        expect(result.getAttribute('class')).toBe('text-title')
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
        const result = screen.getByRole('text-subtitle')
        expect(result.getAttribute('x')).toBe('0')
        expect(result.getAttribute('y')).toBe('0')
        expect(result.getAttribute('class')).toBe('text-subtitle')
        expect(result.textContent).toBe('Subtitle')
    })
})

describe('Typography styling', () => {
    it('sets inline styles', () => {
        render(
            <Chart {...chartProps}>
                <Typography x={0} y={0} style={{ fill: '#ff0000', fontSize: '12px' }}>
                    In color
                </Typography>
            </Chart>
        )
        const result = screen.getByRole('text-default')
        //screen.debug(result)
        expect(result.textContent).toBe('In color')
        expect(result.getAttribute('style')).toContain('font-size: 12px')
        expect(result.getAttribute('style')).toContain('fill: #ff0000')
    })
})
