import { ReactNode } from 'react'
import { Chart, View, Surface, Axis, AxisTicks, Label } from '../../../src'
import { Grid, GridItem } from '../../../src/views'

export const ChartForControllerDecorator = (Story: () => ReactNode) => (
    <Chart
        size={[400, 300]}
        padding={[60, 80, 40, 40]}
        style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
        theme={{
            g: {
                button: { cursor: 'pointer' },
            },
        }}
    >
        <View
            scaleX={{ variant: 'linear', domain: [0, 100], nice: false }}
            scaleY={{ variant: 'linear', domain: [0, 100], nice: true }}
        >
            <Surface key={0} variant={'inner'} />
            <Axis key={1} variant={'left'} />
            <Axis key={2} variant={'bottom'} />
            {Story()}
        </View>
    </Chart>
)

export const ChartWithBandsForControllerDecorator = (Story: () => ReactNode) => {
    return (
        <Chart
            size={[400, 300]}
            padding={[60, 80, 40, 40]}
            style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
            theme={{
                g: {
                    button: { cursor: 'pointer' },
                },
            }}
        >
            <View
                scaleX={{
                    variant: 'band',
                    domain: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
                    nice: false,
                }}
                scaleY={{ variant: 'linear', domain: [0, 100], nice: false }}
            >
                <Surface key={0} variant={'inner'} />
                <Axis key={1} variant={'left'} />
                <Axis key={2} variant={'bottom'} />
                {Story()}
            </View>
        </Chart>
    )
}

export const ChartWithTimeForControllerDecorator = (Story: () => ReactNode) => {
    const now = Date.now()
    const fiveDays = 1000 * 3600 * 24 * 5
    const dateString = (v: unknown) => {
        const ymd = new Date(Number(v)).toISOString().split('T')[0]
        return ymd.slice(2, ymd.length)
    }
    return (
        <Chart
            size={[400, 300]}
            padding={[60, 80, 40, 40]}
            style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
            theme={{
                g: {
                    button: { cursor: 'pointer' },
                },
            }}
        >
            <View
                scaleX={{
                    variant: 'time',
                    domain: [new Date(now - fiveDays), new Date(now)],
                    nice: false,
                }}
                scaleY={{
                    variant: 'log',
                    domain: [1, 10000],
                    nice: 0,
                }}
            >
                <Surface key={0} variant={'inner'} />
                <Axis key={1} variant={'left'} ticks={4} />
                <Axis key={2} variant={'bottom'}>
                    <AxisTicks variant={'bottom'} labelFormat={dateString} />
                </Axis>
                {Story()}
            </View>
        </Chart>
    )
}

export const GridFiller3x3 = () => {
    const indexes = Array.from(Array(9).keys())
    return indexes.map(i => {
        return (
            <GridItem key={i} position={i}>
                <Surface style={{ stroke: '#222222', strokeWidth: 1 }} />
                <Label position={[0, 0]} size={[20, 20]} anchor={[0, 0]} align={[0.5, 0.5]}>
                    {i}
                </Label>
            </GridItem>
        )
    })
}

export const ChartWithGridDecorator = (Story: () => ReactNode) => {
    return (
        <Chart
            size={[400, 300]}
            padding={[20, 20, 20, 20]}
            style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
        >
            <Grid size={[3, 3]}>{Story()}</Grid>
        </Chart>
    )
}
