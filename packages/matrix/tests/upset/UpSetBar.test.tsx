import { render, screen, within } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { Bars } from '@chsk/band'
import { UpSet, UpSetBar, UpSetMemberships } from '../../src/upset'
import { upSetProps } from '../props'

describe('UpSetBar', () => {
    it('creates a sub-view for a bar chart on a horizontal upset', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} horizontal={true}>
                    <UpSetBar size={50}>
                        <Bars />
                    </UpSetBar>
                </UpSet>
            </Chart>
        )
        const result = within(screen.getByRole('view-bar')).getByRole('view-content')
        expect(result).not.toBeNull()
        // the upset grid should have four keys, so four bars
        expect(result.querySelectorAll('rect')).toHaveLength(4)
    })

    it('creates a sub-view for a bar chart on a vertical upset', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} horizontal={false}>
                    <UpSetBar size={50}>
                        <Bars />
                    </UpSetBar>
                </UpSet>
            </Chart>
        )
        const result = within(screen.getByRole('view-bar')).getByRole('view-content')
        expect(result).not.toBeNull()
        expect(result.querySelectorAll('rect')).toHaveLength(4)
    })

    it('avoids work without upset data', () => {
        render(
            <Chart>
                <UpSetBar size={50}>
                    <Bars />
                </UpSetBar>
            </Chart>
        )
        expect(screen.queryByRole('view-bar')).toBeNull()
    })

    it('accepts custom color for bars', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} scaleColor={{ variant: 'categorical', colors: ['#00f'] }}>
                    <UpSetMemberships />
                    <UpSetBar size={50} scaleColor={{ variant: 'categorical', colors: ['#f00'] }}>
                        <Bars />
                    </UpSetBar>
                </UpSet>
            </Chart>
        )
        // membership symbols should have one color
        const membership = screen.getByRole('upset-memberships')
        expect(membership.querySelectorAll('circle')[0]?.getAttribute('style')).toContain('#00f')
        // bars should have a different color
        const bar = within(screen.getByRole('view-bar')).getByRole('view-content')
        expect(bar.querySelectorAll('rect')[0]?.getAttribute('style')).toContain('#f00')
    })

    it('inherits custom color from UpSet component', () => {
        render(
            <Chart>
                <UpSet {...upSetProps} scaleColor={{ variant: 'categorical', colors: ['#f00'] }}>
                    <UpSetBar size={50}>
                        <Bars />
                    </UpSetBar>
                </UpSet>
            </Chart>
        )
        const result = within(screen.getByRole('view-bar')).getByRole('view-content')
        expect(result.querySelectorAll('rect')[0]?.getAttribute('style')).toContain('#f00')
    })
})
