import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Chart, DataComponent, Circle, WithId } from '../../src'
import { chartProps } from '../props'

describe('DataComponent', () => {
    it('creates a component without any event handlers', () => {
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                />
            </Chart>
        )
        const result = screen.getByRole('target')
        expect(result).toBeDefined()
    })

    it('creates a component with a click handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                    handlers={{ onClick: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        const circle = screen.getByRole('target')
        expect(circle).toBeDefined()
        fireEvent.click(circle)
        expect(value).toEqual('A')
    })

    it('creates a component with a mouseEnter handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                    handlers={{ onMouseEnter: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        fireEvent.mouseEnter(screen.getByRole('target'))
        expect(value).toEqual('A')
    })

    it('creates a component with a mouseLeave handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                    handlers={{ onMouseLeave: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        fireEvent.mouseLeave(screen.getByRole('target'))
        expect(value).toEqual('A')
    })

    it('creates a component with a mouseMove handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                    handlers={{ onMouseMove: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        fireEvent.mouseMove(screen.getByRole('target'))
        expect(value).toEqual('A')
    })

    it('applies only one handler after click', () => {
        let click = ''
        let enter = ''
        const customOnClick = (data: WithId | undefined) => {
            click = click + (data?.id ?? '')
        }
        const customOnEnter = (data: WithId | undefined) => {
            enter = enter + (data?.id ?? '')
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                    handlers={{ onClick: customOnClick, onMouseEnter: customOnEnter }}
                />
            </Chart>
        )
        expect(click + enter).toEqual('')
        const circle = screen.getByRole('target')
        expect(circle).toBeDefined()
        fireEvent.click(circle)
        fireEvent.mouseMove(circle)
        // after click, handlers should adjust string 'click' but not string 'enter'
        expect(click).toEqual('A')
        expect(enter).toEqual('')
        // Note: behavior in the browser may be different from above
        // onMouseEnter may be called unnecessarily after click
    })

    it('applies style modifiers', async () => {
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'A', style: { fill: '#000000' } }}
                    modifiers={{
                        onClick: { strokeWidth: 5 },
                        onMouseEnter: { stroke: '#ff0000' },
                        onMouseMove: { scale: 2 },
                        onMouseLeave: { opacity: 0 },
                    }}
                />
            </Chart>
        )
        expect(screen.getByRole('A').getAttribute('style')).not.toContain('stroke')
        fireEvent.mouseEnter(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('stroke')
        })
        fireEvent.mouseLeave(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('opacity')
        })
        fireEvent.mouseMove(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('scale')
        })
        fireEvent.click(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('width')
        })
    })
})
