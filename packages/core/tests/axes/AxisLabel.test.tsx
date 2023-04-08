import { render, screen } from '@testing-library/react'
import { Axis, AxisLabel, Chart, View } from '../../src'
import { chartProps, viewProps } from '../props'
import { getTransform } from '../utils'

describe('AxisLabel', () => {
    it('aligns axis label to the left', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel variant={'top'} align={0}>
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
                        <AxisLabel variant={'top'} align={0.5}>
                            Middle
                        </AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getAllByRole('axis-label')
        expect(result[0].getAttribute('style')).toContain('translateX(1')
    })

    it('aligns and offset axis label', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel variant={'top'} align={0} distance={10} offset={[20, 5]}>
                            Middle
                        </AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis-top')
        const g = result.querySelector('g')
        expect(getTransform(g, 'X')).toEqual(20)
        expect(getTransform(g, 'Y')).toEqual(-5) // -10 + 5
    })
})
