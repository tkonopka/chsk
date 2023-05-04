import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, Draggable } from '../../src'
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
})
