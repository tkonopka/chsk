import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Dendrogram, DendrogramSurface } from '../../src/dendrogram'
import { dendrogramProps } from './dendrogram.props'
import { getNumberAttr } from '../../../core/tests/utils'

describe('DendrogramSurface', () => {
    it('avoids work outside dendrogram context', () => {
        render(
            <Chart>
                <DendrogramSurface />
            </Chart>
        )
        expect(screen.queryAllByRole('dendrogram-surface')).toHaveLength(0)
    })

    it('avoids work for non-existent ids', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps}>
                    <DendrogramSurface ids={['incorrect']} />
                </Dendrogram>
            </Chart>
        )
        expect(screen.queryAllByRole('dendrogram-surface')).toHaveLength(0)
    })

    it('draws a surface around two nodes', () => {
        render(
            <Chart size={[400, 300]}>
                <Dendrogram {...dendrogramProps} variant={'bottom'}>
                    <DendrogramSurface keys={['a', 'b']} />
                </Dendrogram>
            </Chart>
        )
        const surface = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(surface, 'width')).toBeLessThan(200)
        expect(getNumberAttr(surface, 'height')).toBeLessThan(200)
    })

    it('draws a surface around all nodes', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps} variant={'right'}>
                    <DendrogramSurface keys={['a', 'd']} />
                </Dendrogram>
            </Chart>
        )
        const surface = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(surface, 'width')).toBeGreaterThan(250)
        expect(getNumberAttr(surface, 'height')).toBeGreaterThan(200)
    })
})
