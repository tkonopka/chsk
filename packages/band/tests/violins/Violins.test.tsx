import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Violin, Violins } from '../../src/violins'
import { violinProps } from '../props'

describe('Violins', () => {
    it('avoids work in outside of violin view', () => {
        render(
            <Chart>
                <Violins />
            </Chart>
        )
        const content = screen.getByRole('chart-content')
        expect(content.querySelectorAll('path')).toHaveLength(0)
    })

    it('creates strips of data points (vertical)', () => {
        render(
            <Chart>
                <Violin {...violinProps}>
                    <Violins />
                </Violin>
            </Chart>
        )
        const result = screen.getByRole('view-violin')
        // dataset has two ids and two keys each, so four violins
        expect(result.querySelectorAll('path')).toHaveLength(4)
    })
})
