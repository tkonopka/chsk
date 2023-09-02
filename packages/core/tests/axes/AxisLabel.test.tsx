import { render, screen, waitFor } from '@testing-library/react'
import { Axis, AxisLabel, Chart, View } from '../../src'
import { chartProps, viewProps } from '../props'
import { getTransform } from '../utils'

describe('AxisLabel', () => {
    it('aligns axis label to the left', async () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel variant={'top'} align={0}>
                            label
                        </AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis-label')
        await waitFor(() => {
            expect(getTransform(result, 'X')).toEqual(0)
            expect(result.textContent).toBe('label')
        })
    })

    it('aligns axis label to the right', async () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel align={1}>label</AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis-label')
        await waitFor(() => {
            // view width is (400-50-50=300) and the label is aligned to the right
            expect(getTransform(result, 'X')).toEqual(300)
            expect(result.textContent).toBe('label')
        })
    })

    it('aligns axis label in the middle', async () => {
        render(
            <Chart size={[400, 300]} padding={[50, 50, 50, 50]}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLabel align={0.5}>Middle</AxisLabel>
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis-label')
        await waitFor(() => {
            // view width is (400-50-50=300) and the label is aligned in the middle
            expect(getTransform(result, 'X')).toEqual(150)
            expect(result.textContent).toBe('Middle')
        })
    })

    it('aligns and translates by an offset', async () => {
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
        const result = screen.getByRole('axis-label')
        await waitFor(() => {
            expect(getTransform(result, 'X')).toEqual(20)
            expect(getTransform(result, 'Y')).toEqual(-5) // -10 + 5
        })
    })
})
