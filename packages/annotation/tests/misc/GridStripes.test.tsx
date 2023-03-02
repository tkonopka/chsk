import { render, screen } from '@testing-library/react'
import { Chart, View } from '@chsk/core'
import { chartProps, viewProps } from '../props'
import { GridStripes } from '../../src'

describe('GridStripes', () => {
    it('creates even stripes along x-axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridStripes variant={'x'} values={[0, 20, 40, 60, 80, 100]} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('grid-stripes-x')
        // stripes should be [0-20], [40-60], [80-100] -> 3 rectangles
        expect(result.querySelectorAll('rect')).toHaveLength(3)
    })

    it('creates odd stripes along y-axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridStripes variant={'x'} values={[0, 20, 40, 60, 80, 100]} parity={'odd'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('grid-stripes-x')
        // stripes should be [20-40], [60-80] -> 2 rectangles
        expect(result.querySelectorAll('rect')).toHaveLength(2)
    })

    it('creates even stripes along y-axis', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridStripes variant={'y'} />
                </View>
            </Chart>
        )
        const result = screen.getByRole('grid-stripes-y')
        expect(result.querySelectorAll('rect').length).toBeGreaterThan(1)
    })

    it('creates stripes without role', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <GridStripes variant={'y'} setRole={false} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('grid-stripes-y')).toBeNull()
        expect(screen.getByRole('chart-content').querySelectorAll('rect').length).toBeGreaterThan(2)
    })
})
