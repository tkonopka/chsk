import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, View, ViewController, ContinuousAxisScale, Scales, useScales } from '../../src'
import { chartProps } from '../props'

describe('ViewController', () => {
    it('creates controller with toolbar', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        expect(screen.queryByRole('controller-pan')).toBeNull()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
        expect(screen.getByRole('toolbar').querySelectorAll('g')).toHaveLength(6)
    })

    it('creates controller without role', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController setRole={false} />
                </View>
            </Chart>
        )
        // various buttons should exist
        expect(screen.queryByText('none')).toBeDefined()
        expect(screen.queryByText('zoom')).toBeDefined()
        expect(screen.queryByText('reset')).toBeDefined()
    })

    it('creates controller with a limited toolbar', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController buttons={['none', 'zoom']} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        expect(screen.queryByRole('controller-pan')).toBeNull()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
        expect(screen.getByRole('toolbar').querySelectorAll('g')).toHaveLength(2)
    })

    it('creates zoom-detection surface', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController mode={'zoom'} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('controller-pan')).toBeNull()
        expect(screen.queryByRole('controller-zoom')).not.toBeNull()
        // toolbar should have six buttons, zoom button should be selected
        expect(screen.getByRole('toolbar').querySelectorAll('g')).toHaveLength(6)
        expect(screen.getByRole('button-none').getAttribute('class')).toBe('button none')
        expect(screen.getByRole('button-zoom').getAttribute('class')).toBe('button selected zoom')
        expect(screen.getByRole('button-pan').getAttribute('class')).toBe('button pan')
    })

    it('creates pan-detection surface', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController mode={'pan'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        expect(screen.queryByRole('controller-pan')).toBeDefined()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
        // toolbar should have six buttons, pan button should be selected
        expect(screen.getByRole('toolbar').querySelectorAll('g')).toHaveLength(6)
        expect(screen.getByRole('button-none').getAttribute('class')).toBe('button none')
        expect(screen.getByRole('button-zoom').getAttribute('class')).toBe('button zoom')
        expect(screen.getByRole('button-pan').getAttribute('class')).toBe('button selected pan')
    })

    it('buttons toggle controllers', async () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController mode={'pan'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        // initially, mode is set to pan
        expect(screen.queryByRole('controller-pan')).not.toBeNull()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
        expect(screen.getByRole('button-pan').getAttribute('class')).toBe('button selected pan')
        expect(screen.getByRole('button-zoom').getAttribute('class')).toBe('button zoom')
        const selectButton = screen.getByRole('button-zoom')
        fireEvent.click(selectButton)
        await waitFor(() => {
            expect(screen.queryByRole('controller-pan')).toBeNull()
            expect(screen.queryByRole('controller-zoom')).not.toBeNull()
            expect(screen.getByRole('button-pan').getAttribute('class')).toBe('button pan')
            expect(screen.getByRole('button-zoom').getAttribute('class')).toBe(
                'button selected zoom'
            )
        })
    })

    it('sets selection to none after reset', async () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController mode={'pan'} />
                </View>
            </Chart>
        )
        // click the reset button
        fireEvent.click(screen.getByRole('button-reset'))
        await waitFor(() => {
            expect(screen.getByRole('button-pan').getAttribute('class')).toBe('button pan')
            expect(screen.getByRole('button-zoom').getAttribute('class')).toBe('button zoom')
            expect(screen.getByRole('button-reset').getAttribute('class')).toBe('button reset')
            expect(screen.getByRole('button-none').getAttribute('class')).toBe(
                'button selected none'
            )
        })
    })

    // checks where [0, 1] intervals map using x- and y- scales
    const checkUnitScales = (
        scales: Scales,
        xValues: [number, number],
        yValues: [number, number]
    ) => {
        const xScale = scales.x as ContinuousAxisScale
        const yScale = scales.y as ContinuousAxisScale
        expect([xScale(0), xScale(1)]).toEqual(xValues)
        expect([yScale(0), yScale(1)]).toEqual(yValues)
    }

    const unitScales = {
        scaleX: { variant: 'linear' as const, domain: [0, 1] as [number, number] },
        scaleY: { variant: 'linear' as const, domain: [0, 1] as [number, number] },
    }

    it('zoom only along x direction', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'x'} mode={'zoom-in'} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        // click on detector to zoom-in, scales should change
        const detector = screen.getByRole('controller-zoom')
        const detectorRect = detector.querySelector('rect') ?? detector
        fireEvent.click(detectorRect, { clientX: 50, clientY: 50 })
        await waitFor(() => {
            checkUnitScales(scales, [-50, 150], [100, 0])
        })
        // convert to zoom-out, click, should revert to former x scale
        fireEvent.click(screen.getByRole('button-zoom-out'))
        fireEvent.click(detectorRect, { clientX: 50, clientY: 50 })
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [100, 0])
        })
    })

    it('zoom only along y direction', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'y'} mode={'zoom-in'} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        // click on detector to zoom-in, scales should change
        const detector = screen.getByRole('controller-zoom')
        fireEvent.click(detector.querySelector('rect') ?? detector, { clientX: 50, clientY: 50 })
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [150, -50])
        })
        // convert to zoom-out, click, should revert to former x scale
        fireEvent.click(screen.getByRole('button-zoom-out'))
        fireEvent.click(detector.querySelector('rect') ?? detector, { clientX: 50, clientY: 50 })
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [100, 0])
        })
    })

    it('zoom on a custom xy region', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'xy'} mode={'zoom'} className={'abc'} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-zoom')
        const detectorRect = detector.querySelector('rect') ?? detector
        fireEvent.mouseDown(detectorRect, { clientX: 25, clientY: 25 })
        fireEvent.mouseMove(detectorRect, { clientX: 75, clientY: 75 })
        await waitFor(() => {
            const selection = screen.getByRole('selection')
            expect(screen.getByRole('selection').getAttribute('width')).toBe('50px')
            expect(screen.getByRole('selection').getAttribute('height')).toBe('50px')
            expect(selection.getAttribute('class')).toContain('selection viewController abc')
        })
        checkUnitScales(scales, [0, 100], [100, 0])
        // release mouse, hide selection rectangle, change scales
        fireEvent.mouseUp(detectorRect, { clientX: 75, clientY: 75 })
        await waitFor(() => {
            checkUnitScales(scales, [-50, 150], [150, -50])
            expect(screen.queryByRole('selection')).toBeNull()
        })
    })

    it('ignores zoom on empty region', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'xy'} mode={'zoom'} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        // mouse down on detector to zoom-in, scales should change
        const detector = screen.getByRole('controller-zoom')
        const detectorRect = detector.querySelector('rect') ?? detector
        fireEvent.mouseDown(detectorRect, { clientX: 50, clientY: 50 })
        fireEvent.mouseMove(detectorRect, { clientX: 40, clientY: 75 })
        fireEvent.mouseMove(detectorRect, { clientX: 50, clientY: 80 })
        // final mouse position give zero width
        fireEvent.mouseUp(detector.querySelector('rect') ?? detector, { clientX: 50, clientY: 80 })
        // scales should be unchanged, i.e. domains [0, 1]
        checkUnitScales(scales, [0, 100], [100, 0])
    })

    it('zoom on a custom x region', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'x'} mode={'zoom'} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-zoom')
        const detectorRect = detector.querySelector('rect') ?? detector
        fireEvent.mouseDown(detectorRect, { clientX: 25, clientY: 25 })
        fireEvent.mouseMove(detectorRect, { clientX: 75, clientY: 75 })
        // selection rectangle should span whole height
        await waitFor(() => {
            const selection = screen.getByRole('selection')
            expect(selection.getAttribute('width')).toBe('50px')
            expect(selection.getAttribute('height')).toBe('100px')
        })
        // after mouse up, the scales should change
        fireEvent.mouseUp(detector.querySelector('rect') ?? detector, { clientX: 75, clientY: 75 })
        await waitFor(() => {
            checkUnitScales(scales, [-50, 150], [100, 0])
        })
    })

    it('zoom on a custom y region', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'y'} mode={'zoom'} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-zoom')
        const detectorRect = detector.querySelector('rect') ?? detector
        fireEvent.mouseDown(detectorRect, { clientX: 25, clientY: 25 })
        fireEvent.mouseMove(detectorRect, { clientX: 75, clientY: 75 })
        // selection rectangle should span whole height
        await waitFor(() => {
            const selection = screen.getByRole('selection')
            expect(selection.getAttribute('width')).toBe('100px')
            expect(selection.getAttribute('height')).toBe('50px')
        })
        // after mouse up, the scales should change
        fireEvent.mouseUp(detector.querySelector('rect') ?? detector, { clientX: 75, clientY: 75 })
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [150, -50])
        })
    })

    it('aborts zoom when mouse leaves', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'x'} mode={'zoom'} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-zoom')
        const detectorRect = detector.querySelector('rect') ?? detector
        fireEvent.mouseDown(detectorRect, { clientX: 25, clientY: 25 })
        fireEvent.mouseMove(detectorRect, { clientX: 75, clientY: 75 })
        fireEvent.mouseLeave(detectorRect)
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [100, 0])
            expect(screen.queryByRole('selection')).toBeNull()
        })
    })
})
