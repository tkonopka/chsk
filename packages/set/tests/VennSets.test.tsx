import { Chart, Square } from '@chsk/core'
import { render, screen } from '@testing-library/react'
import { venn1Props, venn2Props, venn3Props } from './props'
import { Venn, VennSets } from '../src'

describe('VennSets', () => {
    it('avoids work in non-venn context', () => {
        render(
            <Chart>
                <VennSets ids={['alpha']} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })

    it('draws 2 circles for dataset with 2 sets', () => {
        render(
            <Chart>
                <Venn {...venn2Props}>
                    <VennSets />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('circle')).toHaveLength(2)
    })

    it('draws 3 circles for dataset with 3 sets', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennSets />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('circle')).toHaveLength(3)
    })

    it('draws 1 circle for dataset with 1 set', () => {
        render(
            <Chart>
                <Venn {...venn1Props}>
                    <VennSets />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('circle')).toHaveLength(1)
    })

    it('draws circles with selected ids', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennSets ids={['gamma']} />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('circle')).toHaveLength(1)
    })

    it('omits incorrect ids', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennSets ids={['gamma', 'incorrect']} />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('circle')).toHaveLength(1)
    })

    it('draws custom symbols', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennSets component={Square} />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('rect')).toHaveLength(3)
    })
})
