import { render, screen } from '@testing-library/react'
import { Axis, AxisLine, Chart, View } from '../../src'
import { chartProps, viewProps } from '../props'

describe('AxisLine', () => {
    it('creates composite class name', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Axis variant="top">
                        <AxisLine variant={'top'} className={'custom'} />
                    </Axis>
                </View>
            </Chart>
        )
        const result = screen.getByRole('axis').querySelector('line')
        expect(result?.getAttribute('class')).toContain('axis top custom')
    })
})
