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

    it('creates paths with violins (vertical)', () => {
        render(
            <Chart>
                <Violin {...violinProps} horizontal={false}>
                    <Violins />
                </Violin>
            </Chart>
        )
        // dataset has two ids and two keys each, so four violins
        expect(screen.getByRole('view-violin').querySelectorAll('path')).toHaveLength(4)
    })

    it('creates paths with violins (horizontal)', () => {
        render(
            <Chart>
                <Violin {...violinProps} horizontal={true}>
                    <Violins />
                </Violin>
            </Chart>
        )
        expect(screen.getByRole('view-violin').querySelectorAll('path')).toHaveLength(4)
    })

    it('creates violins without role', () => {
        render(
            <Chart>
                <Violin {...violinProps} horizontal={true}>
                    <Violins setRole={false} />
                </Violin>
            </Chart>
        )
        expect(screen.queryAllByRole('violins')).toHaveLength(0)
        expect(screen.getByRole('view-content').querySelectorAll('path')).toHaveLength(4)
    })

    it('does not draw paths for empty data', () => {
        const data = [
            {
                id: 'A',
                a: {
                    n: 10,
                    values: [0, 0, 1, 4, 10, 4, 1, 0],
                    breaks: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                },
                b: {
                    n: 0,
                    values: [0, 0, 0, 0, 0, 0, 0, 0],
                    breaks: [0, 1, 2, 3, 4, 5, 6, 7, 8],
                },
            },
        ]
        render(
            <Chart>
                <Violin data={data} keys={['a', 'b']}>
                    <Violins />
                </Violin>
            </Chart>
        )
        const result = screen.getByRole('view-violin')
        // there are two keys, but key 'b' leads to a violin that is completely flat
        expect(result.querySelectorAll('path')).toHaveLength(1)
    })

    it('does not draw paths for missing data', () => {
        const data = [
            {
                id: 'alpha',
                x: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            },
            {
                id: 'beta',
                y: [10, 12, 14, 16, 18, 20],
            },
        ]
        render(
            <Chart>
                <Violin {...violinProps} data={data}>
                    <Violins />
                </Violin>
            </Chart>
        )
        expect(screen.getByRole('view-violin').querySelectorAll('path')).toHaveLength(2)
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

    it('creates paths for selected ids', () => {
        render(
            <Chart>
                <Violin {...violinProps} horizontal={false}>
                    <Violins ids={['alpha', 'gamma']} />
                </Violin>
            </Chart>
        )
        // id alpha is valid, gamma is not valid -> one id with two keys
        expect(screen.getByRole('view-violin').querySelectorAll('path')).toHaveLength(2)
    })

    it('creates paths for selected keys', () => {
        render(
            <Chart>
                <Violin {...violinProps} horizontal={false}>
                    <Violins keys={['x', 'z']} />
                </Violin>
            </Chart>
        )
        // key x is valid, z is not valid -> one key with two ids
        expect(screen.getByRole('view-violin').querySelectorAll('path')).toHaveLength(2)
    })
})
