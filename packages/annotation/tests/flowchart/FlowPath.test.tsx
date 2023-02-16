import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { chartProps, viewProps } from '../props'
import { FlowPath } from '../../src'

describe('FlowPath', () => {
    it('creates a line with absolute coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <FlowPath
                        points={[
                            [0, 0],
                            [60, 0],
                        ]}
                        units={'absolute'}
                    />
                </View>
            </Chart>
        )
        const result = screen.getByRole('flow')
        // in absolute coordinates, the line should go from (0, 0) to (60, 0)
        expect(result.getAttribute('d')).toBe('M0,0L60,0')
    })

    it('creates a line with relative coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <FlowPath
                        points={[
                            [0, 0],
                            [0.5, 0],
                        ]}
                        units={'relative'}
                    />
                </View>
            </Chart>
        )
        const result = screen.getByRole('flow')
        // the view is 320 pixels wide, so 0.5 width should be 160 pixels
        // in relative coordinates, the view
        expect(result.getAttribute('d')).toBe('M0,0L160,0')
    })

    it('creates a line with view coordinates', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <FlowPath
                        points={[
                            [0, 0],
                            [80, 0],
                        ]}
                        units={'view'}
                    />
                </View>
            </Chart>
        )
        const result = screen.getByRole('flow')
        // the view is 320 pixels wide and the domain is [0, 100]
        // 80% of 320 is 256
        expect(result.getAttribute('d')).toBe('M0,220L256,220')
    })

    it('creates a path without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <FlowPath
                        points={[
                            [0, 0],
                            [1, 0],
                        ]}
                        setRole={false}
                    />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('flow')).toBeNull()
    })

    it('sets a custom class name', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <FlowPath
                        points={[
                            [0, 0],
                            [1, 0],
                        ]}
                        className={'abc'}
                    />
                </View>
            </Chart>
        )
        const result = screen.getByRole('flow')
        expect(result.getAttribute('class')).toBe('flow abc')
    })

    it('sets marker urls', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <FlowPath
                        points={[
                            [0, 0],
                            [1, 0],
                        ]}
                        markerStart={'abc'}
                        markerEnd={'xyz'}
                    />
                </View>
            </Chart>
        )
        const result = screen.getByRole('flow')
        expect(result.getAttribute('marker-start')).toBe('url(#abc)')
        expect(result.getAttribute('marker-end')).toBe('url(#xyz)')
    })
})
