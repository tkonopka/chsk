import { Chart } from '@chsk/core'
import { render, screen } from '@testing-library/react'
import { venn1Props, venn2Props, venn3Props } from './props'
import { Venn, VennIntersectionLabels } from '../src'

describe('VennIntersectionLabels', () => {
    it('avoids work in non-venn context', () => {
        render(
            <Chart>
                <VennIntersectionLabels />
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })

    it('creates one label when dataset has only one set', () => {
        render(
            <Chart>
                <Venn {...venn1Props}>
                    <VennIntersectionLabels />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('text')).toHaveLength(1)
    })

    it('creates three labels when dataset has two overlapping sets', () => {
        render(
            <Chart>
                <Venn {...venn2Props}>
                    <VennIntersectionLabels />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('text')).toHaveLength(3)
    })

    it('creates 7 labels when dataset has three sets', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennIntersectionLabels />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('text')).toHaveLength(7)
    })

    it('creates a subset of labels', () => {
        render(
            <Chart>
                <Venn {...venn3Props}>
                    <VennIntersectionLabels
                        ids={['alpha beta', 'alpha gamma', 'alpha beta gamma', 'abc']}
                    />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        // the ids list has three correct ids, the incorrect ids should be skipped
        expect(result.querySelectorAll('text')).toHaveLength(3)
    })

    it('creates 0 labels for empty data', () => {
        render(
            <Chart>
                <Venn data={[]}>
                    <VennIntersectionLabels />
                </Venn>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelectorAll('text')).toHaveLength(0)
    })

    it('adds class name', () => {
        render(
            <Chart>
                <Venn {...venn2Props}>
                    <VennIntersectionLabels className={'custom'} />
                </Venn>
            </Chart>
        )
        const text = screen.getByRole('view-venn').querySelectorAll('text')
        expect(text[0]?.getAttribute('class')).toContain('vennIntersectionLabel')
        expect(text[0]?.getAttribute('class')).toContain('custom')
    })
})
