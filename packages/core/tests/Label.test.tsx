import { render, screen } from '@testing-library/react'
import { Chart, Label } from '../src'
import { chartProps } from './props'
import { getTransform } from './utils'

describe('Label', () => {
    it('creates a label component', () => {
        render(
            <Chart {...chartProps}>
                <Label>default</Label>
            </Chart>
        )
        const result = screen.getByText('default').closest('g')
        expect(result?.getAttribute('x')).toBeNull()
        expect(result?.getAttribute('y')).toBeNull()
        expect(result?.getAttribute('role')).toBe('label')
        expect(result?.querySelector('text')?.getAttribute('class')).toBe('label')
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
        const g = result.closest('g')
        expect(getTransform(g, 'X')).toEqual(10)
        expect(getTransform(g, 'Y')).toEqual(20)
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
