import { useRef } from 'react'
import { Axis, Chart, ChartRef, MilestoneMotion, Surface, View } from '@chsk/core'
import { FlowPath, FlowPathProps, ArrowMarker } from '../../src'

export const FlowMilestones = ({
    points,
    curve = 'Linear',
    style,
    transition,
}: Pick<FlowPathProps, 'points' | 'curve' | 'style' | 'transition'>) => {
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
                theme={{ path: { default: { fillOpacity: 0 } } }}
            >
                <defs>
                    <ArrowMarker
                        id="triangle"
                        variant="Triangle"
                        size={20}
                        style={{
                            fill: '#222222',
                            fillOpacity: 1,
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
                    <MilestoneMotion enterOn={'A'}>
                        <FlowPath
                            points={points}
                            curve={curve}
                            transition={transition}
                            style={style}
                            markerEnd={'triangle'}
                        />
                    </MilestoneMotion>
                </View>
            </Chart>
        </>
    )
}
