import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, TooltipData, useTooltip } from '@chsk/core'
import { Bar, BandHighlight } from '../../src'
import { barProps } from '../props'
import { getNumberAttr } from '../../../core/tests/utils'

describe('BandHighlight', () => {
    it('creates a detector surface (vertical)', () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight />
                </Bar>
            </Chart>
        )
        expect(screen.getByRole('band-detector')).toBeDefined()
        expect(screen.queryByRole('band-highlight-mask')).toBeNull()
    })

    it('creates a detector surface (horizontal)', () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']} horizontal={true}>
                    <BandHighlight />
                </Bar>
            </Chart>
        )
        expect(screen.getByRole('band-detector')).toBeDefined()
        expect(screen.queryByRole('band-highlight-mask')).toBeNull()
    })

    it('does not creates a detector surface outside of a band chart', () => {
        render(
            <Chart>
                <BandHighlight />
            </Chart>
        )
        expect(screen.queryAllByRole('band-detector')).toHaveLength(0)
    })

    it('creates a detector surface without role', () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight setRole={false} />
                </Bar>
            </Chart>
        )
        expect(screen.queryByRole('band-detector')).toBeNull()
    })

    it('creates masks on mouseover and removes on mouseleave', async () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight />
                </Bar>
            </Chart>
        )
        const detector = screen.getByRole('band-detector')
        fireEvent.mouseMove(detector, { clientX: 40, clientY: 40 })
        expect(screen.getByRole('band-highlight-mask')).toBeDefined()
        fireEvent.mouseLeave(detector)
        await waitFor(() => {
            expect(screen.queryByRole('band-highlight-mask')).toBeNull()
        })
    })

    it('creates masks with class name', () => {
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight className={'custom'} />
                </Bar>
            </Chart>
        )
        const detector = screen.getByRole('band-detector')
        // fire multiple events nearby
        fireEvent.mouseMove(detector, { clientX: 40, clientY: 40 })
        fireEvent.mouseMove(detector, { clientX: 40, clientY: 41 })
        const maskRects = screen.getByRole('band-highlight-mask').querySelectorAll('rect')
        expect(maskRects).toHaveLength(2)
        expect(maskRects[0]?.getAttribute('class')).toContain('bandHighlight')
        expect(maskRects[0]?.getAttribute('class')).toContain('custom')
    })

    it('sets tooltip data', () => {
        const tooltip: TooltipData = { x: 0, y: 0, data: [] }
        const GetTooltipData = () => {
            const { data } = useTooltip()
            tooltip.data = data.data ?? []
            return null
        }
        render(
            <Chart>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight className={'custom'} />
                    <GetTooltipData />
                </Bar>
            </Chart>
        )
        expect(tooltip.data).toHaveLength(0)
        fireEvent.mouseMove(screen.getByRole('band-detector'), { clientX: 40, clientY: 40 })
        expect(tooltip.data).toHaveLength(3)
    })

    it('sets tooltip data only with enabled keys', () => {
        const tooltip: TooltipData = { x: 0, y: 0, data: [] }
        const GetTooltipData = () => {
            const { data } = useTooltip()
            tooltip.data = data.data ?? []
            return null
        }
        render(
            <Chart data={{ disabledKeys: new Set<string>(['z', 'x']) }}>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight className={'custom'} />
                    <GetTooltipData />
                </Bar>
            </Chart>
        )
        expect(tooltip.data).toHaveLength(0)
        fireEvent.mouseMove(screen.getByRole('band-detector'), { clientX: 40, clientY: 40 })
        // two keys (x, z) are disabled, so tooltip should contain only info about the third key, y
        expect(tooltip.data).toHaveLength(1)
        expect(tooltip.data?.[0]?.key).toBe('y')
    })

    it('omits detector rectangle when non-interactive', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['z', 'x']) }}>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight interactive={false} />
                </Bar>
            </Chart>
        )
        expect(screen.queryByRole('band-detector')).toBeNull()
        expect(screen.getByRole('band-highlight-mask').querySelectorAll('rect')).toHaveLength(2)
    })

    it('creates masks with edge animation (vertical)', async () => {
        render(
            <Chart size={[340, 440]} padding={[20, 20, 20, 20]}>
                <Bar {...barProps} keys={['x', 'y', 'z']}>
                    <BandHighlight edgeAnimation={true} />
                </Bar>
            </Chart>
        )
        // mouse over the detector on the middle key should create a mask
        const detector = screen.getByRole('band-detector')
        fireEvent.mouseMove(detector, { clientX: 260, clientY: 250 })
        // there will be two mask rectangles
        // the first mask rectangle should start at low width, then expand to cover most of the chart
        await waitFor(() => {
            const maskRects = screen.getByRole('band-highlight-mask').querySelectorAll('rect')
            expect(getNumberAttr(maskRects[0], 'width')).toBeLessThan(100)
        })
        await waitFor(() => {
            const maskRects = screen.getByRole('band-highlight-mask').querySelectorAll('rect')
            expect(getNumberAttr(maskRects[0], 'width')).toBeGreaterThan(100)
        })
        const maskRects = screen.getByRole('band-highlight-mask').querySelectorAll('rect')
        expect(getNumberAttr(maskRects[0], 'height')).toBeGreaterThan(100)
    })

    it('creates masks with edge animation (horizontal)', async () => {
        render(
            <Chart size={[340, 440]} padding={[20, 20, 20, 20]}>
                <Bar {...barProps} keys={['x', 'y', 'z']} horizontal={true}>
                    <BandHighlight edgeAnimation={true} />
                </Bar>
            </Chart>
        )
        // mouse over the detector on the middle key should create a mask
        const detector = screen.getByRole('band-detector')
        fireEvent.mouseMove(detector, { clientX: 100, clientY: 360 })
        // there will be two mask rectangles
        // the first mask rectangle should start at the top, then expand to cover most of the chart
        await waitFor(() => {
            const maskRects = screen.getByRole('band-highlight-mask').querySelectorAll('rect')
            expect(getNumberAttr(maskRects[0], 'height')).toBeLessThan(100)
        })
        await waitFor(() => {
            const maskRects = screen.getByRole('band-highlight-mask').querySelectorAll('rect')
            expect(getNumberAttr(maskRects[0], 'height')).toBeGreaterThan(100)
        })
        const maskRects = screen.getByRole('band-highlight-mask').querySelectorAll('rect')
        expect(getNumberAttr(maskRects[0], 'width')).toBeGreaterThan(100)
    })
})
