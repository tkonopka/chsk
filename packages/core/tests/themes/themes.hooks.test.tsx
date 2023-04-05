import { render } from '@testing-library/react'
import { AxisProps, Chart } from '../../src'
import { ThemeSpec, useThemedProps, useStyles } from '../../src/themes'

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

describe('useStyles', () => {
    it('creates css with custom ancestor', () => {
        let result: string = ''
        const GetStyles = () => {
            result = useStyles({ ancestor: '#custom' }) ?? 'fallback'
            return null
        }
        render(
            <Chart>
                <GetStyles />
            </Chart>
        )
        expect(result.slice(0, 8)).toBe('#custom ')
        expect(result).toContain('rect')
        expect(result).toContain('text')
    })

    it('creates css without ancestor', () => {
        let result: string = ' '
        const GetStyles = () => {
            result = useStyles({ ancestor: '' }) ?? 'fallback'
            return null
        }
        render(
            <Chart>
                <GetStyles />
            </Chart>
        )
        expect(result.slice(0, 1)).not.toBe(' ')
    })

    it('creates css only for some selectors', () => {
        let result: string = 'initial'
        const GetStyles = () => {
            result = useStyles({ ancestor: '#custom', selectors: ['circle'] }) ?? ''
            return null
        }
        render(
            <Chart>
                <GetStyles />
            </Chart>
        )
        expect(result).toContain('circle')
        expect(result).not.toContain('text')
    })

    it('creates empty css', () => {
        let result: string = 'initial'
        const GetStyles = () => {
            result = useStyles({ ancestor: '#custom', selectors: null }) ?? ''
            return null
        }
        render(
            <Chart>
                <GetStyles />
            </Chart>
        )
        expect(result).toBe('')
    })
})
