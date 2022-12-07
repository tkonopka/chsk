import { Chart } from '@chsk/core'
import { render, screen } from '@testing-library/react'
import { venn2Props, venn3Props } from './props'
import { Venn, VennSetLabels } from '../src'

describe('VennSetLabels', () => {
    it('avoids work in non-venn context', () => {
        render(
            <Chart>
                <VennSetLabels ids={['alpha', 'incorrect']} />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })

    it('draws labels for all sets', () => {
        render(
            <Chart>
                <Venn {...venn2Props}>
                    <VennSetLabels />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('text')).toHaveLength(2)
    })

    it('draws circles with selected ids', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennSetLabels ids={['beta']} />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('text')).toHaveLength(1)
    })

    it('ignores non-existent ids', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennSetLabels ids={['alpha', 'incorrect']} />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('view-venn')
        expect(result.querySelectorAll('text')).toHaveLength(1)
    })
})
