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
} from '../../src'

// helper component that displays an array of milestones at the bottom of a view
export const MilestonePreview = () => {
    const milestones = Array.from(useMilestones() ?? [])
    const dimensions = useDimensions()
    const pos: NumericPositionSpec = [dimensions.innerSize[X] / 2, dimensions.innerSize[Y] + 20]
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
                <button onClick={() => toggleMilestone('left')}>Toggle milestone 'left'</button>
                <button onClick={() => toggleMilestone('right')}>Toggle milestone 'right'</button>
            </div>
            <Chart
                fref={ref}
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                style={{ margin: '0.5em', border: 'solid 1px #aa3333' }}
            >
                <Surface variant={'inner'} />
                <View>
                    <MilestoneMotion initial={'invisible'} initialOn={'left'}>
                        <Axis variant={'left'} />
                    </MilestoneMotion>
                    <MilestoneMotion initial={'invisible'} initialOn={'right'}>
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
                <button onClick={() => toggleMilestone('left')}>Toggle milestone 'left'</button>
                <button onClick={() => toggleMilestone('right')}>Toggle milestone 'right'</button>
            </div>
            <Chart
                fref={ref}
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                style={{ margin: '0.5em', border: 'solid 1px #aa3333' }}
            >
                <Surface variant={'inner'} />
                <View>
                    <MilestoneMotion exit={'invisible'} exitOn={'left'}>
                        <Axis variant={'left'} />
                    </MilestoneMotion>
                    <MilestoneMotion exit={'invisible'} exitOn={'right'}>
                        <Axis variant={'right'} />
                    </MilestoneMotion>
                </View>
                <MilestonePreview />
            </Chart>
        </>
    )
}

export const EntryExitMilestones = ({
    initial,
    exit,
}: {
    initial: AnimationSpec
    exit: AnimationSpec
}) => {
    const ref = useRef<ChartRef>(null)
    const toggleMilestone = (m: string) => {
        ref.current?.toggleMilestone(m)
    }

    return (
        <>
            <div>
                <button onClick={() => toggleMilestone('A')}>Toggle 'A'</button>
                <button onClick={() => toggleMilestone('B')}>Toggle 'B'</button>
                <button onClick={() => toggleMilestone('C')}>Toggle 'C'</button>
                <button onClick={() => toggleMilestone('D')}>Toggle 'D'</button>
            </div>
            <Chart
                fref={ref}
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                style={{ margin: '0.5em', border: 'solid 1px #aa3333' }}
            >
                <Surface variant={'inner'} />
                <View>
                    <MilestoneMotion initial={initial} initialOn={'A'} exit={exit} exitOn={'B'}>
                        <Axis variant={'left'} />
                    </MilestoneMotion>
                    <MilestoneMotion
                        initial={initial}
                        initialOn={'C'}
                        exit={exit}
                        exitOn={'D'}
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
