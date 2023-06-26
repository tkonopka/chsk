import { render, screen, waitFor } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { chartProps, viewProps } from '../props'
import { FlowTypography } from '../../src/'

describe('FlowTypography', () => {
    it('creates a text element', () => {
        render(
            <Chart {...chartProps}>
                <FlowTypography duration={0} className={'custom'}>
                    abc
                </FlowTypography>
            </Chart>
        )
        const result = screen.getByRole('flow-typography').querySelectorAll('text')
        expect(result).toHaveLength(1)
        expect(result[0]?.getAttribute('class')).toContain('custom')
    })

    it('creates without role', () => {
        render(
            <Chart {...chartProps}>
                <FlowTypography duration={0} className={'custom'} setRole={false}>
                    abc
                </FlowTypography>
            </Chart>
        )
        expect(
            screen.getByRole('chart-content').querySelector('text')?.getAttribute('role')
        ).toBeNull()
    })

    it('reveals text in stages', async () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <FlowTypography duration={1}>This is very long text.</FlowTypography>
                </View>
            </Chart>
        )
        await waitFor(() => {
            const result = screen.getByRole('flow-typography')
            expect(result.textContent?.length).toBeGreaterThan(0)
            expect(result.textContent?.length).toBeLessThan(6)
        })
        await waitFor(() => {
            const result = screen.getByRole('flow-typography')
            expect(result.textContent?.length).toBeGreaterThan(8)
        })
    })
})
