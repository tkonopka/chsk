import { render, screen } from '@testing-library/react'
import { Chart, Typography, Label } from '../src'
import { chartProps } from './props'
import { getTransform } from './utils'

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

describe('Label', () => {
    it('creates a label component', () => {
        render(
            <Chart {...chartProps}>
                <Label>default</Label>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(result.getAttribute('x')).toBeNull()
        expect(result.getAttribute('y')).toBeNull()
        expect(result.getAttribute('role')).toBe('label')
        expect(result.getAttribute('class')).toBe('label')
    })

    it('avoids setting classname default', () => {
        render(
            <Chart {...chartProps}>
                <Label variant={'default'}>label</Label>
            </Chart>
        )
        const result = screen.getByText('label')
        expect(result.getAttribute('class')).toBeNull()
    })

    it('creates a custom label component', () => {
        render(
            <Chart {...chartProps}>
                <Label position={[10, 20]} variant={'custom'} setRole={false}>
                    abcd
                </Label>
            </Chart>
        )
        const result = screen.getByText('abcd')
        expect(getTransform(result, 'X')).toEqual(10)
        expect(getTransform(result, 'Y')).toEqual(20)
        expect(result.getAttribute('role')).toBeNull()
        expect(result.getAttribute('class')).toContain('custom')
    })

    it('skips creating component when content is empty', () => {
        render(
            <Chart {...chartProps}>
                <Label />
            </Chart>
        )
        const label = screen.queryByRole('label')
        expect(label).toBeNull()
    })
})
