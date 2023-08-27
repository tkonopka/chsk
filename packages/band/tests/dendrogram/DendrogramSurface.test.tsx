import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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

    it('avoids work for non-existent series ids', () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps}>
                    <DendrogramSurface ids={['incorrect']} />
                </Dendrogram>
            </Chart>
        )
        expect(screen.queryAllByRole('dendrogram-surface')).toHaveLength(0)
    })

    it('draws a surface for a specific level', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Dendrogram {...dendrogramProps}>
                    <DendrogramSurface levels={[0]} />
                </Dendrogram>
            </Chart>
        )
        const surface = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(surface, 'width')).toBeLessThan(200)
        expect(getNumberAttr(surface, 'height')).toBeLessThan(200)
    })

    it('draws a surface around two nodes', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Dendrogram {...dendrogramProps}>
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
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Dendrogram
                    {...dendrogramProps}
                    variant={'right'}
                    scaleIndex={{ variant: 'band', padding: 0 }}
                >
                    <DendrogramSurface
                        keys={['a', 'd']}
                        expansion={[0.5, 0, 0.5, 0]}
                        expansionUnit={'step'}
                    />
                </Dendrogram>
            </Chart>
        )
        const surface = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(surface, 'width')).toBe(400)
        expect(getNumberAttr(surface, 'height')).toBe(300)
    })

    it('toggles surface opacity on mouse events', async () => {
        render(
            <Chart>
                <Dendrogram {...dendrogramProps}>
                    <DendrogramSurface interactive={true} />
                </Dendrogram>
            </Chart>
        )
        const rects = screen.getByRole('view-content').querySelectorAll('rect')
        expect(rects).toHaveLength(3)
        const getTotalOpacity = (rects: NodeListOf<SVGElement>) => {
            return getNumberAttr(rects[0], 'opacity') + getNumberAttr(rects[1], 'opacity')
        }
        // at first, all rectangles should be invisible
        expect(getTotalOpacity(rects)).toEqual(0)
        // when mouse enters one surface, opacity should change to 1
        if (rects[0]) fireEvent.mouseEnter(rects[0])
        await waitFor(() => {
            const rects = screen.getByRole('view-content').querySelectorAll('rect')
            expect(getTotalOpacity(rects)).toEqual(1)
        })
        // when mouse leaves surface, opacity should change back to 0
        if (rects[0]) fireEvent.mouseLeave(rects[0])
        await waitFor(() => {
            const rects = screen.getByRole('view-content').querySelectorAll('rect')
            expect(getTotalOpacity(rects)).toEqual(0)
        })
    })
})
