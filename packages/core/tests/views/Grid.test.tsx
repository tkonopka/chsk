import { render, screen } from '@testing-library/react'
import { Chart, ChartProps, Grid, GridContextProps, useGrid } from '../../src'

const chartProps: ChartProps = {
    size: [400, 400],
    padding: [0, 0, 0, 0],
}

describe('Grid', () => {
    it('creates grid context', () => {
        let grid: GridContextProps = {} as GridContextProps
        const GetGrid = () => {
            grid = useGrid()
            return null
        }
        render(
            <Chart {...chartProps}>
                <Grid>
                    <GetGrid />
                </Grid>
            </Chart>
        )
        expect(screen.getByRole('grid')).toBeDefined()
        expect(grid.grid).toEqual([2, 2]) // default grid size
        expect(grid.sizes).toHaveLength(4)
        expect(grid.sizes[0]).toEqual([200, 200])
        expect(grid.positions).toHaveLength(4)
    })

    it('computes item positions with spacing (horizontal)', () => {
        let grid: GridContextProps = {} as GridContextProps
        const GetGrid = () => {
            grid = useGrid()
            return null
        }
        render(
            <Chart {...chartProps}>
                <Grid variant={'horizontal'} grid={[5, 5]} spacing={[10, 20]} setRole={false}>
                    <GetGrid />
                </Grid>
            </Chart>
        )
        expect(screen.queryByRole('grid')).toBeNull()
        expect(screen.getByRole('chart-content').querySelectorAll('g')).toHaveLength(1)
        expect(grid.grid).toEqual([5, 5])
        expect(grid.sizes[0]).toEqual([360 / 5, 320 / 5])
        expect(grid.positions).toHaveLength(25)
        expect(grid.positions[0]).toEqual([0, 0])
        expect(grid.positions[1]).toEqual([82, 0])
        expect(grid.positions[5]).toEqual([0, 84])
    })

    it('computes item positions with spacing (vertical)', () => {
        let grid: GridContextProps = {} as GridContextProps
        const GetGrid = () => {
            grid = useGrid()
            return null
        }
        render(
            <Chart {...chartProps}>
                <Grid variant={'vertical'} grid={[5, 5]} spacing={[10, 20]} setRole={false}>
                    <GetGrid />
                </Grid>
            </Chart>
        )
        // grid context is similar as in horizontal variant, but with positions arranged differently
        expect(grid.grid).toEqual([5, 5])
        expect(grid.positions[0]).toEqual([0, 0])
        expect(grid.positions[1]).toEqual([0, 84])
        expect(grid.positions[5]).toEqual([82, 0])
    })

    it('creates grid with one row', () => {
        let grid: GridContextProps = {} as GridContextProps
        const GetGrid = () => {
            grid = useGrid()
            return null
        }
        render(
            <Chart {...chartProps}>
                <Grid grid={[4, 1]} spacing={[0, 0]}>
                    <GetGrid />
                </Grid>
            </Chart>
        )
        expect(screen.getByRole('grid')).toBeDefined()
        expect(grid.grid).toEqual([4, 1])
        expect(grid.sizes[0]).toEqual([100, 400])
        expect(grid.positions[0]).toEqual([0, 0])
        expect(grid.positions[1]).toEqual([100, 0])
    })

    it('creates grid with custom widths and heights', () => {
        let grid: GridContextProps = {} as GridContextProps
        const GetGrid = () => {
            grid = useGrid()
            return null
        }
        render(
            <Chart {...chartProps}>
                <Grid grid={[2,2]} widths={[3, 1]} heights={[1, 3]}>
                    <GetGrid />
                </Grid>
            </Chart>
        )
        expect(screen.getByRole('grid')).toBeDefined()
        expect(grid.grid).toEqual([2, 2]) // default grid size
        expect(grid.sizes).toHaveLength(4)
        expect(grid.sizes[0]).toEqual([300, 100])
        expect(grid.sizes[1]).toEqual([100, 100])
        expect(grid.sizes[2]).toEqual([300, 300])
        expect(grid.sizes[3]).toEqual([100, 300])
        expect(grid.positions).toHaveLength(4)
        expect(grid.positions[0]).toEqual([0, 0])
        expect(grid.positions[1]).toEqual([300, 0])
        expect(grid.positions[2]).toEqual([0, 100])
        expect(grid.positions[3]).toEqual([300, 100])
    })
})
