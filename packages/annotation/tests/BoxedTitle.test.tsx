import { BoxedTitle } from '../src/boxes'
import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { chartProps } from './props'
import { getNumberAttr } from '../../core/tests/utils'

describe('BoxedTitle', () => {
    it('creates a title (top)', () => {
        render(
            <Chart {...chartProps}>
                <BoxedTitle variant={'top'} size={20}>
                    Label
                </BoxedTitle>
            </Chart>
        )
        const result = screen.getByRole('boxed-title')
        expect(getNumberAttr(result.querySelector('rect'), 'height')).toEqual(20)
        expect(getNumberAttr(result.querySelector('rect'), 'width')).toBe(320)
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
        const result = screen.getByRole('boxed-title')
        expect(getNumberAttr(result?.querySelector('rect'), 'height')).toEqual(20)
        expect(getNumberAttr(result?.querySelector('rect'), 'width')).toEqual(320)
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
        const result = screen.getByRole('boxed-title')
        // the label is prepared horizontally and then rotated, so height is 20
        expect(getNumberAttr(result?.querySelector('rect'), 'height')).toEqual(20)
        // the width is 300 - 40 -40
        expect(getNumberAttr(result?.querySelector('rect'), 'width')).toEqual(220)
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
        const result = screen.getByRole('boxed-title')
        expect(getNumberAttr(result?.querySelector('rect'), 'height')).toEqual(20)
        expect(getNumberAttr(result?.querySelector('rect'), 'width')).toEqual(220)
        expect(result?.querySelector('text')?.textContent).toBe('Label')
    })

    it('avoids drawing when there are not children', () => {
        render(
            <Chart {...chartProps}>
                <BoxedTitle variant={'top'} size={20} />
            </Chart>
        )
        const result = screen.getByRole('boxed-title')
        expect(result.querySelector('text')).toBeNull()
    })
})
