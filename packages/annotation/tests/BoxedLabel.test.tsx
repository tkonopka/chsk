import { BoxedLabel } from '../src/boxes'
import { render, screen } from '@testing-library/react'
import { Chart } from '@chask/core'
import { chartProps, getNumber } from './props'

describe('BoxedLabel', () => {
    it('creates a default boxed label', () => {
        render(
            <Chart {...chartProps}>
                <BoxedLabel position={[0, 0]} size={[60, 20]}>
                    Label
                </BoxedLabel>
            </Chart>
        )
        const result = screen.getAllByRole('boxed-label')
        expect(getNumber(result[0].querySelector('rect')?.getAttribute('height'))).toEqual(20)
        expect(result[0].querySelector('text')?.textContent).toBe('Label')
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
