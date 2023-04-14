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
        expect(grid.size).toEqual([2, 2]) // default grid size
        expect(grid.itemSize).toEqual([200, 200])
        expect(grid.itemPositions).toHaveLength(4)
    })

    it('computes item positions with spacing (horizontal)', () => {
        let grid: GridContextProps = {} as GridContextProps
        const GetGrid = () => {
            grid = useGrid()
            return null
        }
        render(
            <Chart {...chartProps}>
                <Grid variant={'horizontal'} size={[5, 5]} spacing={[10, 20]} setRole={false}>
                    <GetGrid />
                </Grid>
            </Chart>
        )
        expect(screen.queryByRole('grid')).toBeNull()
        expect(screen.getByRole('chart-content').querySelectorAll('g')).toHaveLength(1)
        expect(grid.size).toEqual([5, 5])
        expect(grid.itemSize).toEqual([360 / 5, 320 / 5])
        expect(grid.itemPositions).toHaveLength(25)
        expect(grid.itemPositions?.[0]).toEqual([0, 0])
        expect(grid.itemPositions?.[1]).toEqual([82, 0])
        expect(grid.itemPositions?.[5]).toEqual([0, 84])
    })

    it('computes item positions with spacing (vertical)', () => {
        let grid: GridContextProps = {} as GridContextProps
        const GetGrid = () => {
            grid = useGrid()
            return null
        }
        render(
            <Chart {...chartProps}>
                <Grid variant={'vertical'} size={[5, 5]} spacing={[10, 20]} setRole={false}>
                    <GetGrid />
                </Grid>
            </Chart>
        )
        // grid context is similar as in horizontal variant, but with positions arranged differently
        expect(grid.size).toEqual([5, 5])
        expect(grid.itemPositions?.[0]).toEqual([0, 0])
        expect(grid.itemPositions?.[1]).toEqual([0, 84])
        expect(grid.itemPositions?.[5]).toEqual([82, 0])
    })

    it('creates grid with one row', () => {
        let grid: GridContextProps = {} as GridContextProps
        const GetGrid = () => {
            grid = useGrid()
            return null
        }
        render(
            <Chart {...chartProps}>
                <Grid size={[4, 1]} spacing={[0, 0]}>
                    <GetGrid />
                </Grid>
            </Chart>
        )
        expect(screen.getByRole('grid')).toBeDefined()
        expect(grid.size).toEqual([4, 1])
        expect(grid.itemSize).toEqual([100, 400])
        expect(grid.itemPositions?.[0]).toEqual([0, 0])
        expect(grid.itemPositions?.[1]).toEqual([100, 0])
    })
})
