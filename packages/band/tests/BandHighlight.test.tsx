import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, TooltipData, useTooltip } from '@chsk/core'
import { Bar, BandHighlight } from '../src'
import { barProps } from './props'

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
        fireEvent.mouseMove(detector, { clientX: 40, clientY: 40 })
        const maskRects = screen.getByRole('band-highlight-mask').querySelectorAll('rect')
        expect(maskRects).toHaveLength(2)
        expect(maskRects[0].getAttribute('class')).toContain('bandHighlight')
        expect(maskRects[0].getAttribute('class')).toContain('custom')
    })

    it('sets tooltip data', () => {
        const tooltip: TooltipData = { x: 0, y: 0, data: [] }
        const GetTooltipData = () => {
            const { data } = useTooltip()
            if (!data.data) return null
            tooltip.data = data.data
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
            if (!data.data) return null
            tooltip.data = data.data
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
        expect(tooltip.data?.[0].key).toBe('y')
    })
})
