import { BoxedLabel } from '../src'
import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { chartProps } from './props'

describe('BoxedLabel', () => {
    it('creates a label (top)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel variant={'top'} size={20}>
                    Label
                </BoxedLabel>
            </Chart>
        )
        const result = screen.getByRole('boxed-label-top')
        expect(result?.querySelector('rect')?.getAttribute('height')).toBe('20')
        expect(result?.querySelector('text')?.textContent).toBe('Label')
    })

    it('creates a label (bottom)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel variant={'bottom'} size={20}>
                    Label
                </BoxedLabel>
            </Chart>
        )
        const result = screen.getByRole('boxed-label-bottom')
        expect(result?.querySelector('rect')?.getAttribute('height')).toBe('20')
        expect(result?.querySelector('text')?.textContent).toBe('Label')
    })

    it('creates a label (left)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel variant={'left'} size={20}>
                    Label
                </BoxedLabel>
            </Chart>
        )
        const result = screen.getByRole('boxed-label-left')
        expect(result?.querySelector('rect')?.getAttribute('width')).toBe('20')
        expect(result?.querySelector('text')?.textContent).toBe('Label')
    })

    it('creates a label (right)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel variant={'right'} size={20}>
                    Label
                </BoxedLabel>
            </Chart>
        )
        const result = screen.getByRole('boxed-label-right')
        expect(result?.querySelector('rect')?.getAttribute('width')).toBe('20')
        expect(result?.querySelector('text')?.textContent).toBe('Label')
    })

    it('avoids drawing when there are not children', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel variant={'top'} size={20} />
            </Chart>
        )
        const result = screen.queryByRole('boxed-label-top')
        expect(result).toBeNull()
    })
})
