import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { LineLabel } from '../../src/lines'
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

    it('creates a line with text rotation', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <LineLabel start={[0, 0]} end={[1, 0]} rotate={45}>
                        Label
                    </LineLabel>
                </View>
            </Chart>
        )
        const result = screen.getByRole('line-label')
        expect(result.querySelector('text')?.closest('g')?.getAttribute('style')).toContain(
            'rotate(45'
        )
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
})
