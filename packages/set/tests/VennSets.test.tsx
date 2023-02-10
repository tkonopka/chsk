import { Chart } from '@chsk/core'
import { render, screen } from '@testing-library/react'
import { venn1Props, venn2Props, venn3Props } from './props'
import { Venn, VennSets } from '../src'

describe('VennSets', () => {
    it('avoids work in non-venn context', () => {
        render(
            <Chart>
                <VennSets />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })

    it('draws 3 circles for dataset with 2 sets', () => {
        render(
            <Chart>
                <Venn {...venn2Props}>
                    <VennSets />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('path')).toHaveLength(3)
    })

    it('draws 7 paths for dataset with 3 sets', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennSets />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('path')).toHaveLength(7)
    })

    it('draws 1 path for dataset with 1 set', () => {
        render(
            <Chart>
                <Venn {...venn1Props}>
                    <VennSets />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('path')).toHaveLength(1)
    })
})
