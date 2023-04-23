import { useRef } from 'react'
import { Chart, ChartRef, MilestoneMotion, Surface, View } from '@chsk/core'
import { BackgroundColorFilter, FlowTypography, FlowTypographyProps } from '../../src'

export const FlowTypographyDemo = ({
    position = [60, 60],
    rate,
    style,
    children,
}: Pick<FlowTypographyProps, 'position' | 'rate' | 'children' | 'style'>) => {
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
                <BackgroundColorFilter
                    id={'bg'}
                    floodColor={'#333333'}
                    expansion={[0.3, 0, 0.3, 0]}
                />
                <Surface variant={'inner'} />
                <View
                    scaleX={{ variant: 'linear', domain: [0, 100] }}
                    scaleY={{ variant: 'linear', domain: [0, 100] }}
                >
                    <MilestoneMotion enterOn={'A'}>
                        <FlowTypography position={position} rate={rate} style={style}>
                            {children}
                        </FlowTypography>
                    </MilestoneMotion>
                </View>
            </Chart>
        </>
    )
}
