import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { UpSet, UpSetMemberships } from '../src/upset'
import { upSetProps } from './props'

describe('UpSetMemberships', () => {
    it('draws lines for all ids and keys', () => {
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
        expect(result.querySelectorAll('line')).toHaveLength(2)
    })

    it('assigns className to symbols and lines', () => {
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
        expect(circles[0].getAttribute('class')).toEqual('custom')
        expect(lines[0].getAttribute('class')).toEqual('custom')
    })
})
