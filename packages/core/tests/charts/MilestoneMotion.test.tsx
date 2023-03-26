import { render, screen } from '@testing-library/react'
import { Chart, MilestoneMotion } from '../../src/charts'
import { chartProps } from '../props'

describe('MilestoneMotion', () => {
    it('hides content before a milestone is reached', () => {
        render(
            <Chart {...chartProps}>
                <MilestoneMotion initial={'hidden'} initialOn={'A'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeNull()
    })

    it('displays content in first render', () => {
        render(
            <Chart {...chartProps}>
                <MilestoneMotion initial={'hidden'} initialOn={'A'} visible={true}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeDefined()
        expect(screen.queryByRole('milestone-A')).toBeDefined()
    })

    it('handles null initial and exit states', () => {
        const milestones = new Set<string>(['A'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion initial={null} exit={null} transition={null} initialOn={'A'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeDefined()
    })

    it('displays content without role', () => {
        render(
            <Chart {...chartProps}>
                <MilestoneMotion initialOn={'A'} visible={true} setRole={false}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeDefined()
        expect(screen.queryByRole('milestone-A')).toBeNull()
    })

    it('displays content between entry and exit milestones', () => {
        const setExit = new Set<string>(['entry'])
        render(
            <Chart {...chartProps} data={{ milestones: setExit }}>
                <MilestoneMotion initialOn={'entry'} exitOn={'exit'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeDefined()
        expect(screen.queryByRole('milestone-entry-exit')).toBeDefined()
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

    it('accepts named transition configuration', () => {
        const setEntry = new Set<string>(['entry'])
        render(
            <Chart {...chartProps} data={{ milestones: setEntry }}>
                <MilestoneMotion initialOn={'entry'} visible={false} transition={'default'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).not.toBeNull()
    })

    it('accepts named transition but falls back to default', () => {
        const setEntry = new Set<string>(['entry'])
        render(
            <Chart {...chartProps} data={{ milestones: setEntry }}>
                <MilestoneMotion initialOn={'entry'} visible={false} transition={'incorrect'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).not.toBeNull()
    })

    it('accepts custom transition settings', () => {
        const setEntry = new Set<string>(['entry'])
        render(
            <Chart {...chartProps} data={{ milestones: setEntry }}>
                <MilestoneMotion
                    initial={{ opacity: 0.5, scale: 0.5 }}
                    initialOn={'entry'}
                    visible={false}
                    transition={{ duration: 0.5, stiffness: 50 }}
                >
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).not.toBeNull()
    })
})
