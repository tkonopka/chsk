import { render, screen, waitFor } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { LineLabel } from '../../src/'
import { chartProps, viewProps } from '../props'

describe('LineLabel', () => {
    it('creates a line with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <LineLabel start={[0, 0]} end={[60, 0]} units={'absolute'}>
                        Label
                    </LineLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('line-label')
        const line = result.querySelector('line')
        // the line should go from (0, 0) to (60, 0)
        expect(line?.getAttribute('x1')).toBe('0')
        expect(line?.getAttribute('x2')).toBe('60')
        expect(line?.getAttribute('y2')).toBe('0')
    })

    it('creates a line with relative coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <LineLabel start={[0, 0]} end={[0.5, 0]} units={'relative'}>
                        Label
                    </LineLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('line')
        expect(Number(result.getAttribute('x2'))).toBeGreaterThan(100)
    })

    it('creates a line with view coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <LineLabel start={[0, 0]} end={[80, 0]} units={'relative'}>
                        Label
                    </LineLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('line')
        expect(Number(result.getAttribute('x2'))).toBeGreaterThan(100)
    })

    it('creates a line with text rotation', async () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <LineLabel start={[0, 0]} end={[1, 0]} angle={45}>
                        Label
                    </LineLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('line-label')
        await waitFor(() => {
            expect(result.querySelector('text')?.getAttribute('style')).toContain('rotate(45')
        })
    })

    it('creates a line without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <LineLabel start={[0, 0]} end={[1, 0]} setRole={false}>
                        Label
                    </LineLabel>
                </View>
            </Chart>
        )
        const result = screen.queryByRole('line')
        expect(result).toBeNull()
    })

    it('creates class names', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <LineLabel start={[0, 0]} end={[60, 0]} className={'custom'}>
                        Label
                    </LineLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('line-label')
        const text = result.querySelector('text')
        const line = result.querySelector('line')
        expect(text?.getAttribute('class')).toContain('label lineLabel custom')
        expect(line?.getAttribute('class')).toContain('lineLabel custom')
    })
})
