import { ReactNode } from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, TooltipDataItem, TooltipProvider } from '@chsk/core'
import { Bar, BandSurface } from '../../src'
import { barProps } from '../props'
import { getNumberAttr, getTransform } from '../../../core/tests/utils'

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

describe('BandSurface', () => {
    it('creates default band surfaces (variant step)', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Bar
                    {...barProps}
                    scaleIndex={{ variant: 'band', padding: 0.5, paddingOuter: 0.25 }}
                    horizontal={true}
                    keys={['x']}
                >
                    <BandSurface />
                </Bar>
            </Chart>
        )
        // data set has two ids, so two surface rectangles
        const surfaces = screen.getByRole('band-surface').querySelectorAll('rect')
        expect(surfaces).toHaveLength(2)
        expect(getNumberAttr(surfaces[0], 'width')).toEqual(400)
        expect(getNumberAttr(surfaces[0], 'height')).toEqual(150)
        // the second rectangle should be positioned exactly at [0, 150]
        expect(getTransform(surfaces[1], 'X')).toBe(0)
        expect(getTransform(surfaces[1], 'Y')).toBe(150)
    })

    it('creates band surfaces (variant band)', () => {
        render(
            <Chart size={[400, 300]} padding={[0, 0, 0, 0]}>
                <Bar
                    {...barProps}
                    scaleIndex={{ variant: 'band', padding: 0.5, paddingOuter: 0.25 }}
                    horizontal={true}
                    keys={['x']}
                >
                    <BandSurface variant={'band'} />
                </Bar>
            </Chart>
        )
        // data set has two ids, so two surface rectangles
        const surfaces = screen.getByRole('band-surface').querySelectorAll('rect')
        expect(surfaces).toHaveLength(2)
        expect(getNumberAttr(surfaces[0], 'width')).toEqual(400)
        expect(getNumberAttr(surfaces[0], 'height')).toBeLessThan(140)
        // the second rectangle should be positioned a little below at [0, 150]
        expect(getTransform(surfaces[1], 'X')).toBe(0)
        expect(getTransform(surfaces[1], 'Y')).toBeGreaterThan(160)
    })

    it('create surface only on selected bands', () => {
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

    it('skips surfaces when ids are empty', () => {
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
