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

    it('creates paths with violins', () => {
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

    it('assigns custom class name to paths', () => {
        render(
            <Chart>
                <Violin {...violinProps}>
                    <Violins className={'custom'} />
                </Violin>
            </Chart>
        )
        const paths = screen.getByRole('view-violin').querySelectorAll('path')
        expect(paths[0].getAttribute('class')).toContain('violin custom')
    })
})
