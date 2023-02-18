import { MouseEvent } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Chart, DataComponent, Circle, WithId } from '../../src'
import { chartProps } from '../props'

describe('DataComponent', () => {
    it('creates a component without any event handlers', () => {
        render(
            <Chart {...chartProps}>
                <DataComponent
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
        const customHandler = (data: WithId | undefined, event: MouseEvent) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'abc' }}
                    handlers={{ onClick: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        const circle = screen.getByRole('abc')
        expect(circle).toBeDefined()
        fireEvent.click(circle)
        expect(value).toEqual('A')
    })

    it('creates a component with a mouseEnter handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined, event: MouseEvent) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'abc' }}
                    handlers={{ onMouseEnter: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        fireEvent.mouseEnter(screen.getByRole('abc'))
        expect(value).toEqual('A')
    })

    it('creates a component with a mouseLeave handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined, event: MouseEvent) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'abc' }}
                    handlers={{ onMouseLeave: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        fireEvent.mouseLeave(screen.getByRole('abc'))
        expect(value).toEqual('A')
    })

    it('creates a component with a mouseMove handler', () => {
        let value: string | undefined = ''
        const customHandler = (data: WithId | undefined, event: MouseEvent) => {
            value = data?.id
        }
        render(
            <Chart {...chartProps}>
                <DataComponent
                    component={Circle}
                    data={{ id: 'A' }}
                    props={{ cx: 10, cy: 10, r: 10, variant: 'abc' }}
                    handlers={{ onMouseMove: customHandler }}
                />
            </Chart>
        )
        expect(value).toEqual('')
        fireEvent.mouseMove(screen.getByRole('abc'))
        expect(value).toEqual('A')
    })
})