import { render, screen } from '@testing-library/react'
import { Chart, Label } from '../../src'
import { chartProps } from '../props'
import { getTransform } from '../utils'

describe('Label', () => {
    it('creates a label component', () => {
        render(
            <Chart {...chartProps}>
                <Label>default</Label>
            </Chart>
        )
        const result = screen.getByText('default')
        expect(result?.getAttribute('x')).toBeNull()
        expect(result?.getAttribute('y')).toBeNull()
        expect(result?.getAttribute('role')).toBe('label')
        expect(result?.getAttribute('class')).toBe('label')
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

    it('creates a label with offset', () => {
        render(
            <Chart {...chartProps}>
                <Label position={[10, 20]} offset={[4, 6]}>
                    abcd
                </Label>
            </Chart>
        )
        const result = screen.getByText('abcd')
        expect(getTransform(result, 'X')).toEqual(14)
        expect(getTransform(result, 'Y')).toEqual(26)
    })

    it('skips creating component when content is empty', () => {
        render(
            <Chart {...chartProps}>
                <Label />
            </Chart>
        )
        expect(screen.queryByRole('label')).toBeNull()
    })
})
