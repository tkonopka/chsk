import { BoxedTitle } from '../src/boxes'
import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { chartProps, getNumber } from './props'

describe('BoxedTitle', () => {
    it('creates a title (top)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedTitle variant={'top'} size={20}>
                    Label
                </BoxedTitle>
            </Chart>
        )
        const result = screen.getAllByRole('boxed-label')[0]
        expect(getNumber(result.querySelector('rect')?.getAttribute('height'))).toEqual(20)
        expect(getNumber(result.querySelector('rect')?.getAttribute('width'))).toBe(320)
        expect(result.querySelector('text')?.textContent).toBe('Label')
    })

    it('creates a title (bottom)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedTitle variant={'bottom'} size={20}>
                    Label
                </BoxedTitle>
            </Chart>
        )
        const result = screen.getAllByRole('boxed-label')[0]
        expect(getNumber(result?.querySelector('rect')?.getAttribute('height'))).toEqual(20)
        expect(getNumber(result?.querySelector('rect')?.getAttribute('width'))).toEqual(320)
        expect(result?.querySelector('text')?.textContent).toBe('Label')
    })

    it('creates a title (left)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedTitle variant={'left'} size={20}>
                    Label
                </BoxedTitle>
            </Chart>
        )
        const result = screen.getAllByRole('boxed-label')[0]
        // the label is prepared horizontally and then rotated, so height is 20
        expect(getNumber(result?.querySelector('rect')?.getAttribute('height'))).toEqual(20)
        // the width is 300 - 40 -40
        expect(getNumber(result?.querySelector('rect')?.getAttribute('width'))).toEqual(220)
        expect(result?.querySelector('text')?.textContent).toBe('Label')
    })

    it('creates a title (right)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedTitle variant={'right'} size={20}>
                    Label
                </BoxedTitle>
            </Chart>
        )
        const result = screen.getAllByRole('boxed-label')[0]
        expect(getNumber(result?.querySelector('rect')?.getAttribute('height'))).toEqual(20)
        expect(getNumber(result?.querySelector('rect')?.getAttribute('width'))).toEqual(220)
        expect(result?.querySelector('text')?.textContent).toBe('Label')
    })

    it('avoids drawing when there are not children', () => {
        render(
            <Chart {...chartProps}>
                <BoxedTitle variant={'top'} size={20} />
            </Chart>
        )
        const result = screen.queryByRole('boxed-label-top')
        expect(result).toBeNull()
    })
})
