import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Dendrogram, DendrogramTree } from '../../src/dendrogram'
import { dendrogramProps } from './dendrogram.props'

describe('DendrogramTree', () => {
    it.skip('avoids work outside dendrogram context', () => {
        render(
            <Chart>
                <DendrogramTree />
            </Chart>
        )
        expect(screen.queryAllByRole('dendrogram-tree')).toHaveLength(0)
    })

    it('draws a tree (bottom)', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} variant={'bottom'}>
                    <DendrogramTree />
                </Dendrogram>
            </Chart>
        )
        expect(screen.queryByRole('dendrogram-tree')).toBeDefined()
        // the data has four elements in a balanced tree, so three merge steps
        expect(screen.getByRole('view-content').querySelectorAll('path')).toHaveLength(3)
    })

    it.skip('draws a tree (horizontal)', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} variant={'right'}>
                    <DendrogramTree />
                </Dendrogram>
            </Chart>
        )
        expect(screen.queryByRole('dendrogram-tree')).toBeDefined()
        expect(screen.getByRole('view-content').querySelectorAll('path')).toHaveLength(3)
    })
})
