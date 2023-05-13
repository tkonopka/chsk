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

    it('creates a component with a mouse enter and mouse leave handlers', () => {
        let value: string | undefined = undefined
        let tooltipData: TooltipData = {}
        const enterHandler = (data: WithId | undefined) => {
            value = data?.id
        }
        const leaveHandler = () => {
            value = undefined
        }
        const CustomGetter = () => {
            const { data } = useTooltip()
            tooltipData = data
            return null
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
                    <CustomGetter />
                </TooltipProvider>
            </Chart>
        )
        expect(value).toBeUndefined()
        expect(tooltipData).toEqual({})
        // make tooltip appear
        fireEvent.mouseEnter(screen.getByRole('target'))
        expect(value).toEqual('A')
        expect(tooltipData).not.toEqual({})
        fireEvent.mouseMove(screen.getByRole('target'))
        expect(value).toEqual('A')
        expect(tooltipData).not.toEqual({})
        // make tooltip disappear
        fireEvent.mouseLeave(screen.getByRole('target'))
        expect(value).toBeUndefined()
        expect(tooltipData).toEqual({})
        // triggering on empty data does not create a tooltip
        fireEvent.mouseEnter(screen.getByRole('empty'))
        expect(value).toBeUndefined()
        expect(tooltipData).toEqual({})
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
                            onMouseEnter: { stroke: '#ff0000' },
                            onMouseMove: { scale: 2 },
                            onMouseLeave: { opacity: 0 },
                        }}
                    />
                </TooltipProvider>
            </Chart>
        )
        expect(screen.getByRole('A').getAttribute('style')).not.toContain('stroke')
        fireEvent.click(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('width')
        })
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
    })
})
