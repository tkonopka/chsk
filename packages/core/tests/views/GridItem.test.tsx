import { render, screen } from '@testing-library/react'
import { Chart, ChartProps, Grid, GridItem, Surface } from '../../src'
import { getNumberAttr } from '../utils'

const chartProps: Partial<ChartProps> = {
    size: [400, 400],
    padding: [0, 0, 0, 0],
}

describe('GridItem', () => {
    it('creates a grid item using single-number index', () => {
        render(
            <Chart {...chartProps}>
                <Grid grid={[4, 4]}>
                    <GridItem index={1} />
                    <GridItem index={6} />
                </Grid>
            </Chart>
        )
        expect(screen.queryByRole('grid')).toBeDefined()
        expect(screen.queryAllByRole('grid-item')).toHaveLength(2)
        const items = screen.getAllByRole('grid-item')
        // index 1 is near top-left corner, 1 across
        expect(items[0]?.getAttribute('transform')).toBe('translate(100,0)')
        // index 6 in a 4x4 grid is 2 across, 1 down
        expect(items[1]?.getAttribute('transform')).toBe('translate(200,100)')
    })

    it('creates a grid item using position', () => {
        render(
            <Chart {...chartProps}>
                <Grid grid={[4, 4]}>
                    <GridItem position={[1, 2]} />
                    <GridItem position={[0, 3]} />
                </Grid>
            </Chart>
        )
        expect(screen.queryAllByRole('grid-item')).toHaveLength(2)
        const items = screen.getAllByRole('grid-item')
        expect(items[0]?.getAttribute('transform')).toBe('translate(100,200)')
        expect(items[1]?.getAttribute('transform')).toBe('translate(0,300)')
    })

    it('creates a grid item using array index', () => {
        render(
            <Chart {...chartProps}>
                <Grid grid={[4, 4]}>
                    <GridItem index={[1, 2]} />
                    <GridItem index={[0, 3]} />
                </Grid>
            </Chart>
        )
        expect(screen.queryAllByRole('grid-item')).toHaveLength(2)
        const items = screen.getAllByRole('grid-item')
        expect(items[0]?.getAttribute('transform')).toBe('translate(200,100)')
        expect(items[1]?.getAttribute('transform')).toBe('translate(300,0)')
    })

    it('creates a dimensions provider that affect children', () => {
        render(
            <Chart {...chartProps}>
                <Grid grid={[4, 4]} variant={'vertical'}>
                    <GridItem position={[1, 2]}>
                        <Surface />
                    </GridItem>
                </Grid>
            </Chart>
        )
        const surface = screen.getByRole('grid-item-content').querySelector('rect')
        expect(getNumberAttr(surface, 'x')).toEqual(0)
        expect(getNumberAttr(surface, 'y')).toEqual(0)
        expect(getNumberAttr(surface, 'width')).toEqual(100)
        expect(getNumberAttr(surface, 'height')).toEqual(100)
    })
})
