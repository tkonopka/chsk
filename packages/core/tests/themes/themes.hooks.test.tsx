import { render } from '@testing-library/react'
import { AxisProps, Chart } from '../../src'
import { ThemeSpec, useThemedProps } from '../../src/themes'

describe('useThemedProps', () => {
    it('completes props from theme', () => {
        const customTheme: ThemeSpec = {
            Axis: {
                top: {
                    offset: 10,
                },
                bottom: {
                    offset: 5,
                },
                left: {
                    offset: 7,
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
        expect(result['offset']).toEqual(10)
    })
})
