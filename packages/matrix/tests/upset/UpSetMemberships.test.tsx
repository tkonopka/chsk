import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { UpSet, UpSetMemberships } from '../../src/upset'
import { upSetProps } from '../props'

describe('UpSetMemberships', () => {
    it('draws memberships on horizontal chart', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} horizontal={true}>
                    <UpSetMemberships />
                </UpSet>
            </Chart>
        )
        // the dataset has four ids, four keys
        // items are shared between ids (beta, gamma) and (alpha, beta, gamma)
        const result = screen.getByRole('upset-memberships')
        const lines = result.querySelectorAll('line')
        expect(lines).toHaveLength(2)
        expect(lines[0].getAttribute('x1')).toEqual(lines[0].getAttribute('x2'))
    })

    it('draws memberships on vertical chart', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} horizontal={false}>
                    <UpSetMemberships />
                </UpSet>
            </Chart>
        )
        const result = screen.getByRole('upset-memberships')
        const lines = result.querySelectorAll('line')
        expect(lines).toHaveLength(2)
        expect(lines[0].getAttribute('y1')).toEqual(lines[0].getAttribute('y2'))
    })

    it('draws memberships without role', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} horizontal={true}>
                    <UpSetMemberships setRole={false} />
                </UpSet>
            </Chart>
        )
        expect(screen.queryAllByRole('upset-memberships')).toHaveLength(0)
        expect(screen.getByRole('view-content').querySelectorAll('line').length).toBeGreaterThan(0)
    })

    it('avoids work outside of UpSet context', () => {
        render(
            <Chart>
                <UpSetMemberships />
            </Chart>
        )
        expect(screen.queryByRole('upset-memberships')).toBeNull()
    })

    it('assigns base className to symbols and lines', () => {
        render(
            <Chart>
                <UpSet {...upSetProps}>
                    <UpSetMemberships />
                </UpSet>
            </Chart>
        )
        // the dataset has four ids, four keys
        // items are shared between ids (beta, gamma) and (alpha, beta, gamma)
        const result = screen.getByRole('upset-memberships')
        const circles = result.querySelectorAll('circle')
        const lines = result.querySelectorAll('line')
        const expected = 'upSetMembership'
        expect(circles[0].getAttribute('class')).toEqual(expected)
        expect(lines[0].getAttribute('class')).toEqual(expected)
    })

    it('assigns custom className to symbols and lines', () => {
        render(
            <Chart>
                <UpSet {...upSetProps}>
                    <UpSetMemberships className={'custom'} />
                </UpSet>
            </Chart>
        )
        // the dataset has four ids, four keys
        // items are shared between ids (beta, gamma) and (alpha, beta, gamma)
        const result = screen.getByRole('upset-memberships')
        const circles = result.querySelectorAll('circle')
        const lines = result.querySelectorAll('line')
        const expected = 'upSetMembership custom'
        expect(circles[0].getAttribute('class')).toEqual(expected)
        expect(lines[0].getAttribute('class')).toEqual(expected)
    })
})
