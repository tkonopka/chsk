import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, View, ViewController, ContinuousAxisScale, Scales, useScales } from '../../src'
import { chartProps } from '../props'

describe('ViewController', () => {
    it('creates controller with vertical toolbar', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController itemSize={[20, 20]} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        expect(screen.queryByRole('controller-pan')).toBeNull()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
        const buttons = screen.getByRole('toolbar').querySelectorAll('g')
        expect(buttons).toHaveLength(6)
        // buttons arranged vertical, i.e. all with the same x coordinate
        expect(buttons[0].getAttribute('transform')).toBeNull()
        expect(buttons[1].getAttribute('transform')).toContain('translate(0,20)')
    })

    it('creates controller with horizontal toolbar', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController itemSize={[20, 20]} horizontal={true} />
                </View>
            </Chart>
        )
        const buttons = screen.getByRole('toolbar').querySelectorAll('g')
        expect(buttons).toHaveLength(6)
        // buttons arranged horizontal, i.e. all with the same y coordinate
        expect(buttons[0].getAttribute('transform')).toBeNull()
        expect(buttons[1].getAttribute('transform')).toContain('translate(20,0)')
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
                    <ViewController values={['none', 'zoom']} />
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
                    <ViewController value={'zoom'} values={['none', 'zoom', 'pan']} />
                </View>
            </Chart>
        )
        expect(screen.queryByRole('controller-pan')).toBeNull()
        expect(screen.queryByRole('controller-zoom')).not.toBeNull()
        // toolbar should have three buttons, zoom button should be selected
        expect(screen.getByRole('toolbar').querySelectorAll('g')).toHaveLength(3)
        const buttons = screen.getAllByRole('button')
        expect(buttons).toHaveLength(3)
        expect(buttons[0].getAttribute('class')).toBe('button none')
        expect(buttons[1].getAttribute('class')).toBe('button selected zoom')
        expect(buttons[2].getAttribute('class')).toBe('button pan')
    })

    it('creates pan-detection surface', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController value={'pan'} values={['none', 'zoom', 'pan']} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        expect(screen.queryByRole('controller-pan')).toBeDefined()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
        // pan button should be selected
        const buttons = screen.getAllByRole('button')
        expect(buttons[0].getAttribute('class')).toBe('button none')
        expect(buttons[1].getAttribute('class')).toBe('button zoom')
        expect(buttons[2].getAttribute('class')).toBe('button selected pan')
    })

    it('buttons toggle controllers', async () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController value={'pan'} values={['pan', 'zoom']} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('view-controller')).toBeDefined()
        // initially, mode is set to pan
        expect(screen.queryByRole('controller-pan')).not.toBeNull()
        expect(screen.queryByRole('controller-zoom')).toBeNull()
        const buttons = screen.getAllByRole('button')
        expect(buttons[0].getAttribute('class')).toBe('button selected pan')
        expect(buttons[1].getAttribute('class')).toBe('button zoom')
        // click on the zoom button
        fireEvent.click(buttons[1])
        await waitFor(() => {
            expect(screen.queryByRole('controller-pan')).toBeNull()
            expect(screen.queryByRole('controller-zoom')).not.toBeNull()
            const buttons = screen.getAllByRole('button')
            expect(buttons[0].getAttribute('class')).toBe('button pan')
            expect(buttons[1].getAttribute('class')).toBe('button selected zoom')
        })
    })

    it('keep current selection after reset', async () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <ViewController value={'pan'} values={['pan', 'zoom', 'reset', 'none']} />
                </View>
            </Chart>
        )
        // click the reset button
        fireEvent.click(screen.getAllByRole('button')[2])
        await waitFor(() => {
            const buttons = screen.getAllByRole('button')
            expect(buttons[0].getAttribute('class')).toBe('button selected pan')
            expect(buttons[1].getAttribute('class')).toBe('button zoom')
            expect(buttons[2].getAttribute('class')).toBe('button reset')
            expect(buttons[3].getAttribute('class')).toBe('button none')
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
                    <ViewController
                        key={0}
                        variant={'x'}
                        value={'none'}
                        values={['none', 'zoom-in', 'zoom-out']}
                    />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        // click to zoom-in, scales should change
        fireEvent.click(screen.getAllByRole('button')[1])
        await waitFor(() => {
            checkUnitScales(scales, [-50, 150], [100, 0])
        })
        // convert to zoom-out, click, should revert to former x scale
        fireEvent.click(screen.getAllByRole('button')[2])
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
                    <ViewController
                        key={0}
                        variant={'y'}
                        value={'none'}
                        values={['none', 'zoom-in', 'zoom-out']}
                    />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        // click on detector to zoom-in, scales should change
        fireEvent.click(screen.getAllByRole('button')[1])
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [150, -50])
        })
        // convert to zoom-out, click, should revert to former x scale
        fireEvent.click(screen.getAllByRole('button')[2])
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
                    <ViewController key={0} variant={'xy'} value={'zoom'} className={'abc'} />
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
                    <ViewController key={0} variant={'xy'} value={'zoom'} />
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
                    <ViewController key={0} variant={'x'} value={'zoom'} />
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
                    <ViewController key={0} variant={'y'} value={'zoom'} />
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
                    <ViewController key={0} variant={'x'} value={'zoom'} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-zoom')
        const detectorRect = detector.querySelector('rect') ?? detector
        // some arbitrary mouse movements
        fireEvent.mouseDown(detectorRect, { clientX: 25, clientY: 25 })
        fireEvent.mouseMove(detectorRect, { clientX: 75, clientY: 75 })
        // mouse leaves the view area
        fireEvent.mouseLeave(detectorRect)
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [100, 0])
            expect(screen.queryByRole('selection')).toBeNull()
        })
    })

    it('pan shifts axes left and right', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'x'} value={'pan'} values={['pan']} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        // initially, scales have domain [0, 1] and size 100
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-pan')
        const detectorRect = detector.querySelector('rect') ?? detector
        // move to the right, the origin should move to the right
        fireEvent.mouseDown(detectorRect, { clientX: 25, clientY: 25 })
        fireEvent.mouseMove(detectorRect, { clientX: 75, clientY: 75 })
        await waitFor(() => {
            checkUnitScales(scales, [50, 150], [100, 0])
        })
        // move back to original position
        fireEvent.mouseMove(detectorRect, { clientX: 25, clientY: 50 })
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [100, 0])
        })
        // mouse up to end mouse listing
        fireEvent.mouseUp(detectorRect)
        fireEvent.mouseMove(detectorRect, { clientX: 50, clientY: 50 })
        checkUnitScales(scales, [0, 100], [100, 0])
    })

    it('pan shifts axes up and down', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'y'} value={'pan'} values={['pan']} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-pan')
        const detectorRect = detector.querySelector('rect') ?? detector
        // move mouse down, i.e. origin should move down, i.e. to high coordinates
        fireEvent.mouseDown(detectorRect, { clientX: 25, clientY: 25 })
        fireEvent.mouseMove(detectorRect, { clientX: 75, clientY: 75 })
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [150, 50])
        })
        // move back to original position
        fireEvent.mouseMove(detectorRect, { clientX: 10, clientY: 25 })
        await waitFor(() => {
            checkUnitScales(scales, [0, 100], [100, 0])
        })
        fireEvent.mouseUp(detectorRect)
        fireEvent.mouseMove(detectorRect, { clientX: 50, clientY: 50 })
        checkUnitScales(scales, [0, 100], [100, 0])
    })

    it('pan ignores shifts smaller than one pixel', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} variant={'xy'} value={'pan'} values={['pan']} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-pan')
        const detectorRect = detector.querySelector('rect') ?? detector
        // move mouse down, i.e. reveal high y values
        fireEvent.mouseDown(detectorRect, { clientX: 25, clientY: 25 })
        fireEvent.mouseMove(detectorRect, { clientX: 25.1, clientY: 25.1 })
        checkUnitScales(scales, [0, 100], [100, 0])
    })

    it('pan allows mouse leave', async () => {
        let scales = {} as Scales
        const GetScales = () => {
            scales = useScales().scales
            return null
        }
        render(
            <Chart size={[100, 100]} padding={[0, 0, 0, 0]}>
                <View {...unitScales}>
                    <ViewController key={0} value={'pan'} values={['pan']} />
                    <GetScales key={1} />
                </View>
            </Chart>
        )
        checkUnitScales(scales, [0, 100], [100, 0])
        const detector = screen.getByRole('controller-pan')
        const detectorRect = detector.querySelector('rect') ?? detector
        fireEvent.mouseDown(detectorRect, { clientX: 50, clientY: 50 })
        fireEvent.mouseUp(detectorRect)
        fireEvent.mouseLeave(detectorRect)
        checkUnitScales(scales, [0, 100], [100, 0])
    })
})
