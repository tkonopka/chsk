import { render } from '@testing-library/react'
import { AxisProps, Chart } from '../../src'
import { ThemeSpec, useThemedProps } from '../../src/themes'

describe('useThemedProps', () => {
    it('completes props from theme', () => {
        const customTheme: ThemeSpec = {
            Axis: {
                top: {
                    distance: 10,
                },
                bottom: {
                    distance: 5,
                },
                left: {
                    distance: 7,
                },
            },
        }
        let result: AxisProps = { variant: 'top' }
        const GetThemedAxisProps = (props: AxisProps) => {
            result = useThemedProps(props, 'Axis')
            return null
        }

        render(
            <Chart theme={customTheme}>
                <GetThemedAxisProps variant={'top'} />
            </Chart>
        )
        expect(result['variant']).toEqual('top')
        expect(result['distance']).toEqual(10)
    })
})
