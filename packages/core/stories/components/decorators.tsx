import { ReactNode } from 'react'
import { Chart, Surface, View, Axis, Legend, LegendTitle, ColorScaleProps } from '../../src'

export const DivDecorator = (Story: () => ReactNode) => (
    <div style={{ margin: '0.5em', display: 'inline-block' }}>{Story()}</div>
)

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 40, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <Surface variant={'inner'} />
        {Story()}
    </Chart>
)

export const ChartViewDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 60, 60, 60]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View
            scaleX={{
                variant: 'linear',
                domain: [0, 100],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 100],
            }}
            data={[]}
        >
            <Surface variant={'inner'} />
            {Story()}
        </View>
    </Chart>
)

export const ChartBottomAxisDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 60, 60, 60]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View
            scaleX={{
                variant: 'linear',
                domain: [0, 100],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 100],
            }}
            data={[]}
        >
            <Surface variant={'inner'} />
            <Axis variant={'bottom'}>{Story()}</Axis>
        </View>
    </Chart>
)

export const ChartLeftAxisDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 60, 60, 60]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View
            scaleX={{
                variant: 'linear',
                domain: [0, 100],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 100],
            }}
            data={[]}
        >
            <Surface variant={'inner'} />
            <Axis variant={'left'}>{Story()}</Axis>
        </View>
    </Chart>
)

export const ChartBandViewDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 40, 60, 80]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View
            scaleX={{
                variant: 'band',
                domain: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
                padding: 0,
            }}
            scaleY={{
                variant: 'band',
                domain: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
                padding: 0,
            }}
            data={[]}
        >
            <Surface variant={'inner'} />
            {Story()}
            <Axis variant={'left'} />
        </View>
    </Chart>
)

export const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

export const ChartForLegendDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[80, 80, 80, 80]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys}>
            <Surface variant={'inner'} />
            {Story()}
        </View>
    </Chart>
)

export const ChartForLegend2Decorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[80, 120, 80, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys}>
            {Story()}
            <Surface variant={'inner'} />
        </View>
    </Chart>
)

export const ChartWithRightLegendDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[20, 100, 20, 20]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys}>
            <Surface variant={'inner'} />
            <Legend
                position={[280, 0]}
                units={'absolute'}
                size={[100, 80]}
                anchor={[0, 0]}
                padding={[12, 10, 12, 10]}
            >
                {Story()}
            </Legend>
        </View>
    </Chart>
)

export const ChartWithRightLegendTitleDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[20, 100, 20, 20]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys}>
            <Surface variant={'inner'} />
            <Legend
                position={[280, 0]}
                units={'absolute'}
                size={[100, 80]}
                anchor={[0, 0]}
                padding={[12, 10, 12, 10]}
            >
                <LegendTitle position={[0, 0]}>Legend title</LegendTitle>
                {Story()}
            </Legend>
        </View>
    </Chart>
)

const scaleBluesSpec: ColorScaleProps = {
    variant: 'sequential',
    colors: 'Blues',
    domain: [0, 100],
}

export const ChartForColorLegendDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 140, 120, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys} scaleColor={scaleBluesSpec}>
            <Surface variant={'inner'} />
            {Story()}
        </View>
    </Chart>
)

export const ChartWithColorLegendDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 120, 80, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys} scaleColor={scaleBluesSpec}>
            <Surface variant={'inner'} />
            <Legend variant={'color'} position={[260, 0]} anchor={[0, 0]} units={'absolute'}>
                {Story()}
            </Legend>
        </View>
    </Chart>
)

export const ChartWithSizeLegendDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[40, 120, 80, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
    >
        <View data={viewSeriesIndexesKeys} scaleColor={scaleBluesSpec}>
            <Surface variant={'inner'} />
            <Legend variant={'color'} position={[250, 0]} anchor={[0, 0]} units={'absolute'}>
                {Story()}
            </Legend>
        </View>
    </Chart>
)
