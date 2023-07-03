import { useRef } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Chart, ChartRef, MilestoneMotion } from '../../src/charts'
import { chartProps } from '../props'

describe('MilestoneMotion', () => {
    it('hides content before a milestone is reached', () => {
        render(
            <Chart {...chartProps}>
                <MilestoneMotion enter={'hidden'} enterOn={'A'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeNull()
    })

    it('displays content in first render', () => {
        render(
            <Chart {...chartProps}>
                <MilestoneMotion enter={'hidden'} enterOn={'A'} visible={true}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).not.toBeNull()
        expect(screen.queryByRole('milestone-A')).not.toBeNull()
    })

    it('handles null enter and exit states', () => {
        const milestones = new Set<string>(['A'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion enterTransition={null} enterOn={'A'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeDefined()
    })

    it('displays content without role', () => {
        render(
            <Chart {...chartProps}>
                <MilestoneMotion enterOn={'A'} visible={true} setRole={false}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).not.toBeNull()
        expect(screen.queryByRole('milestone-A')).toBeNull()
    })

    it('displays content between enter and exit milestones', () => {
        const milestones = new Set<string>(['enter'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion enterOn={'enter'} exitOn={'exit'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeDefined()
        expect(screen.queryByRole('milestone-enter-exit')).not.toBeNull()
    })

    it('hides content after an exit milestone', () => {
        const milestones = new Set<string>(['exit'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion enterOn={'entry'} exitOn={'exit'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeNull()
    })

    it('quietly accepts incorrect motion settings', () => {
        const milestones = new Set<string>(['A'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion enter={'abcabc'} enterOn={'A'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeDefined()
    })

    it('toggles visibility off after exit milestone, even with default visible', () => {
        const milestones = new Set<string>(['exit'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion enterOn={'entry'} exitOn={'exit'} visible={true}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).toBeNull()
    })

    it('accepts custom motion settings', () => {
        const milestones = new Set<string>(['enter'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion
                    enter={{ opacity: 0.5, scale: 0.5 }}
                    enterOn={'enter'}
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
        const milestones = new Set<string>(['enter'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion enterOn={'enter'} visible={false} enterTransition={'default'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).not.toBeNull()
    })

    it('accepts named transition but falls back to default', () => {
        const milestones = new Set<string>(['enter'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion enterOn={'enter'} visible={false} enterTransition={'incorrect'}>
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).not.toBeNull()
    })

    it('accepts custom transition settings', () => {
        const milestones = new Set<string>(['enter'])
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion
                    enter={{ opacity: 0.5, scale: 0.5 }}
                    enterOn={'enter'}
                    visible={false}
                    enterTransition={{ type: 'spring', duration: 0.5, stiffness: 50 }}
                >
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        const result = screen.getByRole('chart-content')
        expect(result.querySelector('rect')).not.toBeNull()
    })

    it('executes custom functions on entry', () => {
        const milestones = new Set<string>(['enter'])
        let value = 0
        const onEnter = () => {
            value = value + 1
        }
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion
                    enter={{ opacity: 0.5, scale: 0.5 }}
                    enterOn={'enter'}
                    onEnter={onEnter}
                >
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        expect(screen.getByRole('chart-content').querySelector('rect')).not.toBeNull()
        expect(value).toEqual(1)
    })

    it('executes functions when milestones triggered not call functions unnecessarily', async () => {
        let value = 0
        const onEnter = () => {
            value = value + 1
        }
        const onExit = () => {
            value = value * 5 + 2
        }
        const CustomChart = () => {
            const ref = useRef<ChartRef>(null)
            const toggleA = () => {
                ref?.current?.toggleMilestone('A')
            }
            const toggleB = () => {
                ref?.current?.toggleMilestone('B')
            }
            return (
                <Chart {...chartProps} fref={ref}>
                    <rect width={10} height={10} role={'A'} onClick={toggleA} />
                    <rect width={10} height={10} role={'B'} onClick={toggleB} />
                    <MilestoneMotion
                        enter={{ opacity: 0.5, scale: 0.5 }}
                        enterOn={'A'}
                        onEnter={onEnter}
                        exitOn={'B'}
                        onExit={onExit}
                    >
                        <circle cx={0} cy={0} r={4} />
                    </MilestoneMotion>
                </Chart>
            )
        }
        render(<CustomChart />)
        expect(value).toBe(0)
        fireEvent.click(screen.getByRole('A'))
        await waitFor(() => {
            expect(value).toBe(1) // 0 + 1
        })
        fireEvent.click(screen.getByRole('B'))
        await waitFor(() => {
            expect(value).toBe(7) // (1*5)+2
        })
    })

    it('does not call functions unnecessarily', () => {
        const milestones = new Set<string>(['enter', 'exit'])
        let value = 0
        const onEnter = () => {
            value = value + 1
        }
        const onExit = () => {
            value = value * 5 + 2
        }
        render(
            <Chart {...chartProps} data={{ milestones }}>
                <MilestoneMotion
                    enter={{ opacity: 0.5, scale: 0.5 }}
                    enterOn={'enter'}
                    onEnter={onEnter}
                    exitOn={'exit'}
                    onExit={onExit}
                >
                    <rect width={10} height={10} />
                </MilestoneMotion>
            </Chart>
        )
        // the content should be invisible
        expect(screen.getByRole('chart-content').querySelector('rect')).toBeNull()
        // the config should detect there is nothing to be done, so settings should not change
        expect(value).toEqual(0)
    })
})
