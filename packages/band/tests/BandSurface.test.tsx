import { ReactNode } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, TooltipDataItem, TooltipProvider } from '@chsk/core'
import { Bar, BandSurface } from '../src'
import { barProps } from './props'
import { getNumberAttr } from '../../core/tests/utils'

export const MockTooltipSetter = ({
    x,
    y,
    title,
    data = [],
    children,
}: {
    x: number
    y: number
    title?: string
    data?: TooltipDataItem[]
    children: ReactNode
}) => {
    return <TooltipProvider data={{ x, y, title, data }}>{children}</TooltipProvider>
}

describe('BandHighlights', () => {
    it('creates default band highlights', () => {
        render(
            <Chart>
                <Bar {...barProps} horizontal={true} keys={['x']}>
                    <BandSurface />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('band-surface')
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    it('create highlight only on selected bands', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <BandSurface ids={['alpha']} setRole={true} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('band-surface')
        expect(result.querySelectorAll('rect')).toHaveLength(1)
        expect(screen.queryByRole('band-surface')).toBeDefined()
        expect(getNumberAttr(result.querySelector('rect'), 'opacity')).toEqual(1)
    })

    it('skips highlights when ids are empty', () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <BandSurface ids={[]} />
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        expect(result.querySelectorAll('rect')).toHaveLength(0)
    })

    it('creates surfaces based on tooltip data', () => {
        const data = [{ id: 'alpha' }]
        render(
            <Chart>
                <Bar {...barProps}>
                    <MockTooltipSetter x={10} y={10} title={''} data={data}>
                        <BandSurface tooltip={true} />
                    </MockTooltipSetter>
                </Bar>
            </Chart>
        )
        const result = screen.getByRole('view-content')
        const rects = result.querySelectorAll('rect')
        expect(rects).toHaveLength(2)
        // one of the two rectangles should have opacity: 1
        // one of the two rectangles should have opacity: 0
        const totalOpacity = getNumberAttr(rects[0], 'opacity') + getNumberAttr(rects[1], 'opacity')
        expect(totalOpacity).toEqual(1)
    })

    it('toggles surface opacity on mouse events', async () => {
        render(
            <Chart>
                <Bar {...barProps}>
                    <BandSurface interactive={true} />
                </Bar>
            </Chart>
        )
        const surfaces = screen.getByRole('band-surface')
        const rects = surfaces.querySelectorAll('rect')
        expect(surfaces.querySelectorAll('rect')).toHaveLength(2)
        const getTotalOpacity = (rects: NodeListOf<SVGElement>) => {
            return getNumberAttr(rects[0], 'opacity') + getNumberAttr(rects[1], 'opacity')
        }
        // at first, all rect should be invisible
        expect(getTotalOpacity(rects)).toEqual(0)
        // when mouse enters one surface, opacity should change to 1
        fireEvent.mouseEnter(rects[0])
        await waitFor(() => {
            const surfaces = screen.getByRole('band-surface')
            const rects = surfaces.querySelectorAll('rect')
            expect(getTotalOpacity(rects)).toEqual(1)
        })
        // when mouse leaves surface, opacity should change back to 0
        fireEvent.mouseLeave(rects[0])
        await waitFor(() => {
            const surfaces = screen.getByRole('band-surface')
            const rects = surfaces.querySelectorAll('rect')
            expect(getTotalOpacity(rects)).toEqual(0)
        })
    })
})
