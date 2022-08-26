import { render, screen } from '@testing-library/react'
import { Chart, MilestoneMotion, OpacityMotion } from '../src'
import { chartProps } from './props'

describe('OpacityMotion', () => {
    it('creates a visible component on first render', () => {
        render(
            <Chart {...chartProps}>
                <OpacityMotion role={'example'} firstRender>
                    <rect width={10} height={10} />
                </OpacityMotion>
            </Chart>
        )
        const result = screen.getByRole('example')
        expect(result).toBeDefined()
        expect(result.getAttribute('opacity')).toEqual('1')
    })

    it('creates an invisible component for enter animation', () => {
        render(
            <Chart {...chartProps}>
                <OpacityMotion role={'example'} firstRender={false}>
                    <rect width={10} height={10} />
                </OpacityMotion>
            </Chart>
        )
        const result = screen.getByRole('example')
        expect(result).toBeDefined()
        expect(result.getAttribute('opacity')).toEqual('0')
    })
})

describe('MilestoneMotion', () => {
    it('hides content before a milestone is reached', () => {
        render(
            <Chart {...chartProps}>
                <MilestoneMotion initial={'invisible'} initialOn={'A'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeNull()
    })

    it('always displays content in first render', () => {
        render(
            <Chart {...chartProps}>
                <MilestoneMotion initial={'invisible'} initialOn={'A'} visible={true}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeDefined()
    })

    it('hides content after an exit milestone', () => {
        const setExit = new Set<string>(['exit'])
        render(
            <Chart {...chartProps} data={{ milestones: setExit }}>
                <MilestoneMotion initialOn={'entry'} exitOn={'exit'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeNull()
    })

    it('quietly accepts incorrect motion settings', () => {
        const setA = new Set<string>(['A'])
        render(
            <Chart {...chartProps} data={{ milestones: setA }}>
                <MilestoneMotion initial={'abcabc'} initialOn={'A'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeDefined()
    })

    it('toggles visibility off after exit milestone, even with default visible', () => {
        const setExit = new Set<string>(['exit'])
        render(
            <Chart {...chartProps} data={{ milestones: setExit }}>
                <MilestoneMotion initialOn={'entry'} exitOn={'exit'} visible={true}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeNull()
    })

    it('accepts custom motion settings', () => {
        const setEntry = new Set<string>(['entry'])
        render(
            <Chart {...chartProps} data={{ milestones: setEntry }}>
                <MilestoneMotion
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    initialOn={'entry'}
                    visible={false}
                >
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeDefined()
    })
})
