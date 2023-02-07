import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { BoxedLabel } from '../../src/boxes'
import { chartProps } from '../props'
import { getNumberAttr } from '../../../core/tests/utils'

describe('BoxedLabel', () => {
    it('creates a default boxed label', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel position={[0, 0]} size={[60, 20]}>
                    Label
                </BoxedLabel>
            </Chart>
        )
        const result = screen.getByRole('boxed-label')
        expect(result.getAttribute('class')).toEqual('boxedLabel')
        expect(getNumberAttr(result.querySelector('rect'), 'height')).toEqual(20)
        expect(result.querySelector('text')?.textContent).toBe('Label')
        expect(result.querySelector('text')?.getAttribute('class')).toBe('label boxedLabel')
    })

    it('applies a class name to g, rect, and text', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel position={[0, 0]} size={[60, 20]} className={'custom'}>
                    Label
                </BoxedLabel>
            </Chart>
        )
        const result = screen.getByRole('boxed-label')
        expect(result.getAttribute('class')).toContain('boxedLabel custom')
        expect(result.querySelector('rect')?.getAttribute('class')).toContain('boxedLabel custom')
        expect(result.querySelector('text')?.getAttribute('class')).toContain('boxedLabel custom')
    })

    it('avoids drawing text when there are not children', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel position={[0, 0]} size={[60, 20]} />
            </Chart>
        )
        const result = screen.queryAllByRole('boxed-label')
        expect(result).toBeDefined()
        expect(result[0].querySelectorAll('text')).toHaveLength(0)
    })
})
