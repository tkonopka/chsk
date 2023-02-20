import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, Circle, TooltipProvider } from '@chsk/core'
import { Quantile, Quantiles, QuantileTooltip } from '../src'
import { quantileProps } from './props'

describe('QuantileTooltip', () => {
    it('creates boxes and whiskers (vertical)', async () => {
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
        // make a tooltip appear
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

    it('does not create content for non-quantile data', async () => {
        render(
            <Chart>
                <TooltipProvider data={{ x: 10, y: 10, title: '', data: [] }}>
                    <QuantileTooltip />
                </TooltipProvider>
            </Chart>
        )
        expect(screen.queryByRole('tooltip-content')).toBeNull()
    })
})
