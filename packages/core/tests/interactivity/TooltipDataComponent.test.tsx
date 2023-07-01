import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
    Chart,
    TooltipDataComponent,
    Circle,
    WithId,
    TooltipData,
    useTooltip,
    TooltipProvider,
} from '../../src'
import { chartProps } from '../props'

export const GetTooltip = ({ value }: { value: TooltipData }) => {
    const result = useTooltip().data
    value.x = result.x
    value.y = result.y
    value.title = result.title
    value.eventPosition = result.eventPosition
    value.data = result.data
    return null
}

describe('TooltipDataComponent', () => {
    it('creates a component without any event handlers', () => {
        render(
            <Chart {...chartProps}>
                <TooltipDataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'abc' }}
                />
            </Chart>
        )
        const result = screen.getByRole('abc')
        expect(result).toBeDefined()
    })

    it('creates a component with a click handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <TooltipDataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                    handlers={{ onClick: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        fireEvent.click(screen.getByRole('target'))
        expect(value).toEqual('A')
    })

    it('creates a component with double click handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <TooltipDataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                    handlers={{ onDoubleClick: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        fireEvent.doubleClick(screen.getByRole('target'))
        expect(value).toEqual('A')
    })

    it('uses custom mouse enter and mouse leave handlers', () => {
        let value: string | undefined = undefined
        const tooltip: TooltipData = {}
        const enterHandler = (data: WithId | undefined) => {
            value = data?.id
        }
        const leaveHandler = () => {
            value = undefined
        }
        render(
            <Chart {...chartProps}>
                <TooltipProvider>
                    <TooltipDataComponent
                        component={Circle}
                        data={{ id: 'A' }}
                        props={{ cx: 10, cy: 10, r: 10, variant: 'target' }}
                        handlers={{ onMouseEnter: enterHandler, onMouseLeave: leaveHandler }}
                    />
                    <TooltipDataComponent
                        component={Circle}
                        data={undefined}
                        props={{ cx: 10, cy: 10, r: 10, variant: 'empty' }}
                        handlers={{ onMouseEnter: enterHandler, onMouseLeave: leaveHandler }}
                    />
                    <GetTooltip value={tooltip} />
                </TooltipProvider>
            </Chart>
        )
        expect(value).toBeUndefined()
        expect(tooltip).toEqual({})
        // make tooltip appear
        fireEvent.mouseEnter(screen.getByRole('target'))
        expect(value).toEqual('A')
        expect(tooltip).not.toEqual({})
        fireEvent.mouseMove(screen.getByRole('target'))
        expect(value).toEqual('A')
        expect(tooltip).not.toEqual({})
        // make tooltip disappear
        fireEvent.mouseLeave(screen.getByRole('target'))
        expect(value).toBeUndefined()
        expect(tooltip).toEqual({})
        // triggering on empty data does not create a tooltip
        fireEvent.mouseEnter(screen.getByRole('empty'))
        expect(value).toBeUndefined()
        expect(tooltip).toEqual({})
    })

    it('applies style modifiers', async () => {
        render(
            <Chart {...chartProps}>
                <TooltipProvider>
                    <TooltipDataComponent
                        component={Circle}
                        data={{ id: 'A' }}
                        props={{
                            cx: 10,
                            cy: 10,
                            r: 10,
                            variant: 'A',
                            style: { fill: '#000000' },
                        }}
                        modifiers={{
                            onClick: { strokeWidth: 5 },
                            onDoubleClick: { strokeDasharray: 2 },
                            onMouseEnter: { stroke: '#ff0000' },
                            onMouseMove: { scale: 2 },
                            onMouseLeave: { opacity: 0 },
                        }}
                    />
                </TooltipProvider>
            </Chart>
        )
        expect(screen.getByRole('A').getAttribute('style')).not.toContain('stroke')
        fireEvent.mouseEnter(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('stroke')
        })
        fireEvent.mouseMove(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('scale')
        })
        fireEvent.mouseLeave(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('opacity')
        })
        fireEvent.click(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('width')
            expect(screen.getByRole('A').getAttribute('style')).toContain('5')
        })
        fireEvent.doubleClick(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('dash')
            expect(screen.getByRole('A').getAttribute('style')).toContain('2')
        })
    })
})
