import { ReactNode } from 'react'
import { Chart, BackgroundSurface, View, Axis } from '../src'

export const DivChartDecorator = (Story: () => ReactNode) => (
    <div style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}>
        <Chart width={400} height={300} padding={{ top: 40, right: 40, bottom: 40, left: 40 }}>
            <BackgroundSurface variant={'inner'} />
            {Story()}
        </Chart>
    </div>
)

export const DivChartDecoratorLargeMargin = (Story: () => ReactNode) => (
    <div style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}>
        <Chart width={400} height={300} padding={{ top: 60, right: 60, bottom: 60, left: 60 }}>
            <View
                scaleX={{
                    variant: 'linear',
                    min: 0,
                    max: 100,
                }}
                scaleY={{
                    variant: 'linear',
                    min: 0,
                    max: 100,
                }}
                data={[]}
            >
                <BackgroundSurface variant={'inner'} />
                {Story()}
            </View>
        </Chart>
    </div>
)

export const DivChartDecoratorWithAxis = (Story: () => ReactNode) => (
    <div style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}>
        <Chart width={400} height={300} padding={{ top: 60, right: 60, bottom: 60, left: 60 }}>
            <View
                scaleX={{
                    variant: 'linear',
                    min: 0,
                    max: 100,
                }}
                scaleY={{
                    variant: 'linear',
                    min: 0,
                    max: 100,
                }}
                data={[]}
            >
                <BackgroundSurface variant={'inner'} />
                <Axis variant={'bottom'} ticks={null}>
                    {Story()}
                </Axis>
            </View>
        </Chart>
    </div>
)

export const DivDecorator = (Story: () => ReactNode) => (
    <div style={{ margin: '0.5em', display: 'inline-block' }}>{Story()}</div>
)
