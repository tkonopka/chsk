import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, View, ViewController } from '../../src'
import { chartProps } from '../props'

describe('ViewController', () => {
    it('creates controller', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        expect(screen.queryByRole('controller-drag')).toBeNull()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
    })

    it('creates zoom-detection surface', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController mode={'zoom'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        expect(screen.queryByRole('controller-drag')).toBeNull()
        expect(screen.queryByRole('controller-zoom')).not.toBeNull()
    })

    it('creates drag-detection surface', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController mode={'drag'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        expect(screen.queryByRole('controller-drag')).toBeDefined()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
    })

    it('buttons toggle controllers', async () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController mode={'drag'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        // initially, mode is set to drag
        expect(screen.queryByRole('controller-drag')).toBeDefined()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
        const selectButton = screen.getByRole('button-zoom')
        fireEvent.click(selectButton)
        await waitFor(() => {
            expect(screen.queryByRole('controller-drag')).toBeNull()
            expect(screen.queryByRole('controller-zoom')).toBeDefined()
        })
    })

    it('zoom only along x direction', async () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController variant={'x'} mode={'zoom in'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        // TO DO
    })

    it('zoom only along y direction', async () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController variant={'y'} mode={'zoom in'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        // TO DO
    })
})
