import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Dendrogram, DendrogramTree } from '../../src/dendrogram'
import { dendrogramProps } from './dendrogram.props'

describe('DendrogramTree', () => {
    it('avoids work outside dendrogram context', () => {
        render(
            <Chart>
                <DendrogramTree />
            </Chart>
        )
        expect(screen.queryAllByRole('dendrogram-tree')).toHaveLength(0)
    })

    it('avoids work for non-existent ids', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps}>
                    <DendrogramTree ids={['incorrect']} />
                </Dendrogram>
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
        // the data has four elements in a tree with three merge steps
        const paths = screen.getByRole('dendrogram-tree').querySelectorAll('path')
        expect(paths).toHaveLength(3)
        paths.forEach(path => expect(path.getAttribute('class')).toEqual('dendrogram'))
    })

    it('draws a tree (horizontal)', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} variant={'right'}>
                    <DendrogramTree />
                </Dendrogram>
            </Chart>
        )
        const paths = screen.getByRole('dendrogram-tree').querySelectorAll('path')
        expect(paths).toHaveLength(3)
        paths.forEach(path => expect(path.getAttribute('class')).toEqual('dendrogram'))
    })

    it('draws a tree (vertical)', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} variant={'top'}>
                    <DendrogramTree />
                </Dendrogram>
            </Chart>
        )
        const paths = screen.getByRole('dendrogram-tree').querySelectorAll('path')
        expect(paths).toHaveLength(3)
        paths.forEach(path => expect(path.getAttribute('class')).toEqual('dendrogram'))
    })

    it('draws a tree without role', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps}>
                    <DendrogramTree setRole={false} />
                </Dendrogram>
            </Chart>
        )
        expect(screen.queryAllByRole('dendrogram-tree')).toHaveLength(0)
        expect(screen.getByRole('view-content').querySelectorAll('path')).toHaveLength(3)
    })

    it('draws a tree with custom node order', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps}>
                    <DendrogramTree />
                </Dendrogram>
                <Dendrogram
                    {...dendrogramProps}
                    scaleIndex={{ variant: 'band', domain: ['c', 'd', 'a', 'b'] }}
                >
                    <DendrogramTree />
                </Dendrogram>
            </Chart>
        )
        const trees = screen.queryAllByRole('dendrogram-tree')
        expect(trees).toHaveLength(2)
        // extract path ds
        const getPathD = (el: SVGPathElement): string => {
            if (!el) return ''
            return el.getAttribute('d') ?? ''
        }
        const d1: string[] = []
        trees[0].querySelectorAll('path').forEach(path => d1.push(getPathD(path)))
        const d2: string[] = []
        trees[1].querySelectorAll('path').forEach(path => d2.push(getPathD(path)))
        // each dendrogram should have three merges, but should look different
        expect(d1).toHaveLength(3)
        expect(d2).toHaveLength(3)
        expect(JSON.stringify(d1)).not.toEqual(JSON.stringify(d2))
    })
})
