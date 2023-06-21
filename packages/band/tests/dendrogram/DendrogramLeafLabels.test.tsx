import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Dendrogram, DendrogramLeafLabels } from '../../src/dendrogram'
import { dendrogramProps } from './dendrogram.props'
import { getTransform } from '../../../core/tests/utils'

describe('DendrogramLeafLabels', () => {
    it('avoids work outside dendrogram context', () => {
        render(
            <Chart>
                <DendrogramLeafLabels />
            </Chart>
        )
        expect(screen.queryAllByRole('label')).toHaveLength(0)
    })

    it('draws all labels', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} variant={'right'}>
                    <DendrogramLeafLabels />
                </Dendrogram>
            </Chart>
        )
        // the data has four elements in a tree with three merge steps
        const labels = screen.getByRole('view-dendrogram').querySelectorAll('text')
        expect(labels).toHaveLength(4)
    })

    it('draws subset of labels', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} variant={'right'}>
                    <DendrogramLeafLabels keys={['a', 'b']} />
                </Dendrogram>
            </Chart>
        )
        const labels = screen.getByRole('view-dendrogram').querySelectorAll('text')
        expect(labels).toHaveLength(2)
    })

    it('draws labels at different heights', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} variant={'right'} hang={0.1}>
                    <DendrogramLeafLabels />
                </Dendrogram>
            </Chart>
        )
        // there should be four labels
        const labels = screen.queryAllByRole('label')
        expect(labels).toHaveLength(4)
        // the labels should be at different heights
        const x: Array<number | null> = []
        labels.forEach(label => {
            x.push(getTransform(label, 'X'))
        })
        const xSet = new Set(x)
        expect(xSet.has(null)).toBeFalsy()
        expect(xSet.size).toBe(2)
    })
})
