import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import {
    Chart,
    PersistentTooltipDataComponent,
    Circle,
    TooltipData,
    TooltipProvider,
} from '../../src'
import { chartProps } from '../props'
import { GetTooltip } from './TooltipDataComponent.test'

describe('PersistentTooltipDataComponent', () => {
    it('creates a component', () => {
        render(
            <Chart {...chartProps}>
                <PersistentTooltipDataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'abc' }}
                />
            </Chart>
        )
        const result = screen.getByRole('abc')
        expect(result).toBeDefined()
    })

    it('toggles tooltip data on click', () => {
        const result: TooltipData = {}
        render(
            <Chart {...chartProps}>
                <TooltipProvider>
                    <PersistentTooltipDataComponent
                        component={Circle}
                        data={{ id: 'A' }}
                        props={{ cx: 10, cy: 10, r: 10, variant: 'A' }}
                    />
                    <PersistentTooltipDataComponent
                        component={Circle}
                        data={{ id: 'B' }}
                        props={{ cx: 10, cy: 10, r: 10, variant: 'B' }}
                    />
                    <GetTooltip value={result} />
                </TooltipProvider>
            </Chart>
        )
        expect(result).toEqual({})
        // make tooltip appear
        fireEvent.click(screen.getByRole('A'))
        expect(result).not.toEqual({})
        // change tooltip
        fireEvent.click(screen.getByRole('B'))
        expect(result).not.toEqual({})
        // make tooltip disappear
        fireEvent.click(screen.getByRole('B'))
        expect(result).toEqual({})
    })

    it('applies style modifiers upon click', async () => {
        render(
            <Chart {...chartProps}>
                <TooltipProvider>
                    <PersistentTooltipDataComponent
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
    })

    it('applies style modifiers for mouse enter and mouse leave', async () => {
        render(
            <Chart {...chartProps}>
                <TooltipProvider>
                    <PersistentTooltipDataComponent
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
                            onMouseEnter: { stroke: '#ff0000' },
                            onMouseLeave: { opacity: 0 },
                        }}
                    />
                </TooltipProvider>
            </Chart>
        )
        expect(screen.getByRole('A').getAttribute('style')).not.toContain('stroke')
        fireEvent.click(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('stroke')
        })
        fireEvent.click(screen.getByRole('A'))
        await waitFor(() => {
            expect(screen.getByRole('A').getAttribute('style')).toContain('opacity')
        })
    })
})
