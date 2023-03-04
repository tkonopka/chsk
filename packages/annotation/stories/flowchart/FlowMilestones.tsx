import { useRef } from 'react'
import { Axis, ArrowMarker, Chart, ChartRef, MilestoneMotion, Surface, View } from '@chsk/core'
import { FlowPath, FlowPathProps } from '../../src'

export const FlowMilestones = ({
    points,
    curve = 'Linear',
    transition,
}: Pick<FlowPathProps, 'points' | 'curve' | 'transition'>) => {
    const ref = useRef<ChartRef>(null)
    const toggleMilestone = (m: string) => {
        ref.current?.toggleMilestone(m)
    }

    return (
        <>
            <div>
                <button onClick={() => toggleMilestone('A')}>Toggle milestone</button>
            </div>
            <Chart
                fref={ref}
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                style={{ margin: '0.5em', border: 'solid 1px #aa3333' }}
            >
                <defs>
                    <ArrowMarker
                        id="triangle"
                        variant="Triangle"
                        size={12}
                        style={{
                            fill: '#222222',
                        }}
                    />
                </defs>
                <Surface variant={'inner'} />
                <View
                    scaleX={{
                        variant: 'band',
                        domain: ['A', 'B', 'C', 'D', 'E', 'F'],
                        padding: 0.2,
                    }}
                    scaleY={{
                        variant: 'linear',
                        domain: [0, 100],
                    }}
                >
                    <Axis variant={'bottom'} />
                    <Axis variant={'left'} />
                    <MilestoneMotion initial={'invisible'} initialOn={'A'}>
                        <FlowPath points={points} curve={curve} transition={transition} />
                    </MilestoneMotion>
                </View>
            </Chart>
        </>
    )
}
