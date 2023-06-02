import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Density, DensityCells, DensityCell } from '../../src/density'
import { densityProps } from './density.props'

describe('DensityCells', () => {
    it('creates cells', () => {
        render(
            <Chart>
                <Density {...densityProps}>
                    <DensityCells />
                </Density>
            </Chart>
        )
        // dataset will have six points, but some overlap
        const cells = screen.getByRole('density-cells')
        expect(
            cells.querySelectorAll('circle').length + cells.querySelectorAll('rect').length
        ).toEqual(4)
    })

    it('creates cells without role', () => {
        render(
            <Chart>
                <Density {...densityProps}>
                    <DensityCells setRole={false} cell={DensityCell} />
                </Density>
            </Chart>
        )
        expect(screen.queryAllByRole('density-cells')).toHaveLength(0)
        expect(screen.getByRole('view-content').querySelectorAll('rect').length).toBeGreaterThan(0)
    })

    it('creates also for disabled cells', () => {
        render(
            <Chart data={{ disabledKeys: new Set<string>(['alpha', 'beta']) }}>
                <Density {...densityProps}>
                    <DensityCells cell={DensityCell} />
                </Density>
            </Chart>
        )
        // dataset will have six points, but some overlap
        const cells = screen.getByRole('density-cells')
        expect(cells.querySelectorAll('rect').length).toEqual(4)
    })
})
