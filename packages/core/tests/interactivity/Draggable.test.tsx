import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, DragData, Draggable } from '../../src'
import { chartProps } from '../props'
import { getTransform } from '../utils'

describe('Draggable', () => {
    it('omits role', async () => {
        render(
            <Chart {...chartProps}>
                <Draggable setRole={false}>
                    <rect x={0} y={0} width={50} height={50} />
                </Draggable>
            </Chart>
        )
        expect(screen.queryByRole('draggable')).toBeNull()
    })

    it('allows dragging (xy)', async () => {
        render(
            <Chart {...chartProps}>
                <Draggable>
                    <rect x={0} y={0} width={50} height={50} />
                </Draggable>
            </Chart>
        )
        const target = screen.getByRole('draggable')
        expect(getTransform(target, 'X')).toBe(null)
        expect(getTransform(target, 'Y')).toBe(null)
        // start drag
        fireEvent.mouseDown(target, { clientX: 10, clientY: 10 })
        await waitFor(() => {
            expect(screen.getByRole('draggable-reference')).toBeDefined()
        })
        const reference = screen.getByRole('draggable-reference')
        fireEvent.mouseMove(reference, { clientX: 20, clientY: 20 })
        await waitFor(() => {
            expect(target.getAttribute('transform')).toBe('translate(10,10)')
        })
        // finish drag
        fireEvent.mouseUp(reference, { clientX: 30, clientY: 30 })
        await waitFor(() => {
            expect(target.getAttribute('transform')).toBe('translate(20,20)')
            expect(screen.queryByRole('draggable-reference')).toBeNull()
        })
    })

    it('allows dragging (x)', async () => {
        render(
            <Chart {...chartProps}>
                <Draggable variant={'x'}>
                    <rect x={0} y={0} width={50} height={50} />
                </Draggable>
            </Chart>
        )
        const target = screen.getByRole('draggable')
        expect(getTransform(target, 'X')).toBe(null)
        expect(getTransform(target, 'Y')).toBe(null)
        // start drag
        fireEvent.mouseDown(target, { clientX: 10, clientY: 10 })
        await waitFor(() => {
            expect(screen.getByRole('draggable-reference')).toBeDefined()
        })
        const reference = screen.getByRole('draggable-reference')
        fireEvent.mouseMove(reference, { clientX: 20, clientY: 20 })
        await waitFor(() => {
            expect(target.getAttribute('transform')).toBe('translate(10,0)')
        })
        // finish drag
        fireEvent.mouseUp(reference, { clientX: 30, clientY: 30 })
        await waitFor(() => {
            expect(target.getAttribute('transform')).toBe('translate(20,0)')
            expect(screen.queryByRole('draggable-reference')).toBeNull()
        })
        // after mouse up, further movement should have no effect
        fireEvent.mouseMove(target, { clientX: 40, clientY: 40 })
        await waitFor(() => {
            expect(target.getAttribute('transform')).toBe('translate(20,0)')
        })
    })

    it('allows dragging (y)', async () => {
        render(
            <Chart {...chartProps}>
                <Draggable variant={'y'}>
                    <rect x={0} y={0} width={50} height={50} />
                </Draggable>
            </Chart>
        )
        const target = screen.getByRole('draggable')
        expect(getTransform(target, 'X')).toBe(null)
        expect(getTransform(target, 'Y')).toBe(null)
        // start drag
        fireEvent.mouseDown(target, { clientX: 10, clientY: 10 })
        await waitFor(() => {
            expect(screen.getByRole('draggable-reference')).toBeDefined()
        })
        const reference = screen.getByRole('draggable-reference')
        fireEvent.mouseMove(reference, { clientX: 20, clientY: 20 })
        await waitFor(() => {
            expect(target.getAttribute('transform')).toBe('translate(0,10)')
        })
        // finish drag
        fireEvent.mouseUp(reference, { clientX: 30, clientY: 30 })
        await waitFor(() => {
            expect(target.getAttribute('transform')).toBe('translate(0,20)')
            expect(screen.queryByRole('draggable-reference')).toBeNull()
        })
        // after mouse up, further movement should have no effect
        fireEvent.mouseMove(target, { clientX: 40, clientY: 40 })
        await waitFor(() => {
            expect(target.getAttribute('transform')).toBe('translate(0,20)')
        })
    })

    const mockDragData: DragData = {
        absolute: [-1, -1],
        relative: [-1, -1],
        view: [-1, -1],
    }

    it('calls drag handlers', async () => {
        let start: DragData = mockDragData
        let move: DragData = mockDragData
        let end: DragData = mockDragData
        const handleStart = (data: DragData) => {
            start = data
        }
        const handleMove = (data: DragData) => {
            move = data
        }
        const handleEnd = (data: DragData) => {
            end = data
        }
        render(
            <Chart {...chartProps}>
                <Draggable
                    position={[5, 5]}
                    onDragStart={handleStart}
                    onDrag={handleMove}
                    onDragEnd={handleEnd}
                >
                    <rect x={0} y={0} width={50} height={50} />
                </Draggable>
            </Chart>
        )
        // mouse down and drag
        const target = screen.getByRole('draggable')
        fireEvent.mouseDown(target, { clientX: 10, clientY: 10 })
        await waitFor(() => {
            expect(screen.getByRole('draggable-reference')).toBeDefined()
        })
        const reference = screen.getByRole('draggable-reference')
        fireEvent.mouseMove(reference, { clientX: 25, clientY: 25 })
        fireEvent.mouseUp(reference, { clientX: 30, clientY: 30 })
        await waitFor(() => {
            expect(screen.queryByRole('draggable-reference')).toBeNull()
        })
        // start position should coincides with 'position' prop
        expect(start?.absolute).toEqual([5, 5])
        // move introduced a shift [15, 15] (move from [10, 10] to [25, 25])
        // so the new position would be [5,5] + [15, 15]
        expect(move?.absolute).toEqual([20, 20])
        expect(end?.absolute).toEqual([25, 25])
    })
})
