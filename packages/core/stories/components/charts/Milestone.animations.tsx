import { useRef } from 'react'
import {
    Chart,
    Surface,
    Axis,
    ChartRef,
    useMilestones,
    useDimensions,
    Typography,
    MilestoneMotion,
    View,
    NumericPositionSpec,
    X,
    Y,
    AnimationSpec,
    TransitionSpec,
} from '../../../src'

// helper component that displays an array of milestones at the bottom of a view
export const MilestonePreview = () => {
    const milestones = Array.from(useMilestones() ?? [])
    const { size } = useDimensions()
    const pos: NumericPositionSpec = [size[X] / 2, size[Y] + 20]
    return (
        <Typography
            position={pos}
            style={{ textAnchor: 'middle', alignmentBaseline: 'middle', fill: '#7777bb' }}
        >
            Milestones: {JSON.stringify(milestones)}
        </Typography>
    )
}

export const EntryMilestones = () => {
    const ref = useRef<ChartRef>(null)
    const toggleMilestone = (m: string) => {
        ref.current?.toggleMilestone(m)
    }

    return (
        <>
            <div>
                <button onClick={() => toggleMilestone('left')}>
                    Toggle milestone &lsquo;left&lsquo;
                </button>
                <button onClick={() => toggleMilestone('right')}>
                    Toggle milestone &lsquo;right&lsquo;
                </button>
            </div>
            <Chart
                fref={ref}
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                style={{ margin: '0.5em', border: 'solid 1px #aa3333' }}
            >
                <Surface variant={'inner'} />
                <View>
                    <MilestoneMotion
                        enter={'invisible'}
                        enterOn={'left'}
                        exit={null}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <Axis variant={'left'} />
                    </MilestoneMotion>
                    <MilestoneMotion
                        enter={'invisible'}
                        enterOn={'right'}
                        exit={null}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <Axis variant={'right'} />
                    </MilestoneMotion>
                </View>
                <MilestonePreview />
            </Chart>
        </>
    )
}

export const ExitMilestones = () => {
    const ref = useRef<ChartRef>(null)
    const toggleMilestone = (m: string) => {
        ref.current?.toggleMilestone(m)
    }

    return (
        <>
            <div>
                <button onClick={() => toggleMilestone('left')}>
                    Toggle milestone &lsquo;left&lsquo;
                </button>
                <button onClick={() => toggleMilestone('right')}>
                    Toggle milestone &lsquo;right&lsquo;
                </button>
            </div>
            <Chart
                fref={ref}
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                style={{ margin: '0.5em', border: 'solid 1px #aa3333' }}
            >
                <Surface variant={'inner'} />
                <View>
                    <MilestoneMotion
                        enter={null}
                        exit={'invisible'}
                        exitOn={'left'}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <Axis variant={'left'} />
                    </MilestoneMotion>
                    <MilestoneMotion
                        enter={null}
                        exit={'invisible'}
                        exitOn={'right'}
                        transition={{ type: 'tween', duration: 1 }}
                    >
                        <Axis variant={'right'} />
                    </MilestoneMotion>
                </View>
                <MilestonePreview />
            </Chart>
        </>
    )
}

export const EntryExitMilestones = ({
    enter,
    exit,
    onEnter,
    onExit,
    transition,
}: {
    enter: AnimationSpec
    exit: AnimationSpec
    onEnter?: () => void
    onExit?: () => void
    transition?: TransitionSpec
}) => {
    const ref = useRef<ChartRef>(null)
    const toggleMilestone = (m: string) => {
        ref.current?.toggleMilestone(m)
    }

    return (
        <>
            <div>
                <button onClick={() => toggleMilestone('A')}>Toggle &lsquo;A&lsquo;</button>
                <button onClick={() => toggleMilestone('B')}>Toggle &lsquo;B&lsquo;</button>
                <button onClick={() => toggleMilestone('C')}>Toggle &lsquo;C&lsquo;</button>
                <button onClick={() => toggleMilestone('D')}>Toggle &lsquo;D&lsquo;</button>
            </div>
            <Chart
                fref={ref}
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                style={{ margin: '0.5em', border: 'solid 1px #aa3333' }}
            >
                <Surface variant={'inner'} />
                <View>
                    <MilestoneMotion
                        enter={enter}
                        enterOn={'A'}
                        onEnter={onEnter}
                        exit={exit}
                        exitOn={'B'}
                        onExit={onExit}
                        transition={transition}
                    >
                        <Axis variant={'left'} />
                    </MilestoneMotion>
                    <MilestoneMotion
                        enter={enter}
                        enterOn={'C'}
                        onEnter={onEnter}
                        exit={exit}
                        exitOn={'D'}
                        onExit={onExit}
                        transition={transition}
                        visible={true}
                    >
                        <Axis variant={'right'} />
                    </MilestoneMotion>
                </View>
                <MilestonePreview />
            </Chart>
        </>
    )
}
