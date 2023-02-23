import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, Circle, TooltipProvider } from '@chsk/core'
import { Quantile, Quantiles, QuantileTooltip } from '../src'
import { quantileProps } from './props'

describe('QuantileTooltip', () => {
    it('creates a plain tooltip', async () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles />
                    <QuantileTooltip symbol={Circle} />
                </Quantile>
            </Chart>
        )
        const boxwhiskers = screen.getAllByRole('boxwhisker')
        expect(boxwhiskers.length).toBeGreaterThan(0)
        fireEvent.mouseEnter(boxwhiskers[0])
        await waitFor(() => {
            const content = screen.getByRole('tooltip-content')
            // tooltip should contain one rect (background surface)
            expect(content.querySelectorAll('rect')).toHaveLength(1)
            // should contain one circle (symbol)
            expect(content.querySelectorAll('circle')).toHaveLength(1)
            // tooltip should have many text fields with various info
            const infoText = content.querySelectorAll('text')
            expect(infoText.length).toBeGreaterThan(10)
        })
    })

    it('creates a tooltip with title', async () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles />
                    <QuantileTooltip title={'Custom title'} />
                </Quantile>
            </Chart>
        )
        fireEvent.mouseEnter(screen.getAllByRole('boxwhisker')[0])
        await waitFor(() => {
            const content = screen.getByRole('tooltip-content')
            const title = screen.getByRole('tooltip-title')
            expect(title.textContent).toEqual('Custom title')
            expect(title.getAttribute('class')).toContain('tooltipTitle')
        })
    })

    it('creates a table with distribution information', async () => {
        render(
            <Chart>
                <Quantile {...quantileProps}>
                    <Quantiles />
                    <QuantileTooltip
                        itemSize={[100, 30]}
                        cellStyle={{ fill: '#0000dd' }}
                        cellSize={[40, 40]}
                    />
                </Quantile>
            </Chart>
        )
        fireEvent.mouseEnter(screen.getAllByRole('boxwhisker')[0])
        await waitFor(() => {
            const content = screen.getByRole('tooltip-content')
            // tooltip should have many text fields with various info
            const infoText = content.querySelectorAll('text')
            expect(infoText.length).toBeGreaterThan(10)
            // the first row in the should be some distance down from the top
            const nText = screen.queryByText('n:')
            expect(Number(nText?.getAttribute('y'))).toBeGreaterThan(60)
            // cells in the table should carry the custom style
            expect(nText?.getAttribute('style')).toContain('fill')
        })
    })

    it('does not create content for non-quantile data', async () => {
        render(
            <Chart>
                <TooltipProvider data={{ x: 10, y: 10, title: '', data: [{ id: 'a' }] }}>
                    <QuantileTooltip />
                </TooltipProvider>
            </Chart>
        )
        expect(screen.queryByRole('tooltip-content')).toBeNull()
    })
})
