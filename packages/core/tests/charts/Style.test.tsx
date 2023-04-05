import { render, screen } from '@testing-library/react'
import { Style } from '../../src/themes/Style'

// Style

describe('Style', () => {
    it('works without special attributes', () => {
        render(
            <Style ancestor={''}>
                <div role={'target'} />
            </Style>
        )
        expect(screen.getByRole('target')).toBeDefined()
    })

    it('works with null selectors', () => {
        render(
            <Style ancestor={'#custom'} selectors={null}>
                <div role={'target'} />
            </Style>
        )
        expect(screen.getByRole('target')).toBeDefined()
    })
})
