import { render, screen } from '@testing-library/react'
import { Axis, AxisLabel, Chart, View } from '../../src'
import { chartProps, viewProps } from '../props'

describe('AxisLabel', () => {
    it('aligns axis label to the left', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel key={'label0'} variant={'top'} anchor={0}>
                            Left
                        </AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('axis-label')
        expect(result[0].getAttribute('style')).toContain('translateX(0')
    })

    it('aligns axis label in the middle', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel key={'label1'} variant={'top'} anchor={0.5}>
                            Middle
                        </AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('axis-label')
        expect(result[0].getAttribute('style')).toContain('translateX(1')
    })

    it('aligns axis label to the left using a string', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel key={'label0'} variant={'top'} anchor={'start'}>
                            Start
                        </AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('axis-label')
        expect(result[0].getAttribute('style')).toContain('translateX(0')
    })

    it('aligns axis label to the center using a string', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel key={'label1'} variant={'top'} anchor={'middle'}>
                            Middle
                        </AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('axis-label')
        expect(result[0].getAttribute('style')).toContain('translateX(1')
    })
})
