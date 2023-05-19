import { render, screen } from '@testing-library/react'
import { Chart, ChartProps, Rectangle, RectangleProps, View } from '@chsk/core'
import { viewProps } from '../props'
import { Stripe } from '../../src'
import { getNumberAttr, getTransform } from '../../../core/tests/utils'

export const chartProps: Pick<ChartProps, 'size' | 'padding'> = {
    size: [400, 300],
    padding: [0, 0, 0, 0],
}

describe('Stripe', () => {
    it('creates stripe with x-axis domain', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Stripe variant={'x'} domain={[50, 100]} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('stripe')).toBeDefined()
        const result = screen.getByRole('view-content').querySelector('rect')
        expect(getTransform(result, 'X')).toBe(200)
        expect(getNumberAttr(result, 'width')).toBe(200)
        expect(getNumberAttr(result, 'height')).toBe(300)
    })

    it('creates stripe with y-axis domain', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Stripe variant={'y'} domain={[10, 20]} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(result, 'width')).toBe(400)
        expect(getNumberAttr(result, 'height')).toBe(30)
    })

    it('creates stripe with x-axis domain (relative units)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Stripe variant={'x'} domain={[0.25, 0.5]} domainUnits={'relative'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(result, 'width')).toBe(100)
        expect(getNumberAttr(result, 'height')).toBe(300)
        expect(getTransform(result, 'X')).toBe(100)
    })

    it('creates stripe with y-axis domain (relative units)', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Stripe variant={'y'} domain={[0.5, 0.6]} domainUnits={'relative'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(result, 'width')).toBe(400)
        expect(getNumberAttr(result, 'height')).toBe(30)
    })

    it('uses expansion', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Stripe variant={'y'} domain={[0.5, 0.6]} expansion={[-20, -20]} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(result, 'width')).toBe(360)
    })

    it('accepts custom component', () => {
        const CustomRectangle = (props: RectangleProps) => {
            return <Rectangle rx={5} ry={5} {...props} />
        }
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Stripe variant={'y'} domain={[0.4, 0.6]} component={CustomRectangle} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('view-content').querySelector('rect')
        expect(getNumberAttr(result, 'rx')).toBe(5)
        expect(getNumberAttr(result, 'ry')).toBe(5)
    })
})
