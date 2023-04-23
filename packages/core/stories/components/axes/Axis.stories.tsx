import { Chart, Surface, View, Axis, AxisTicks } from '../../../src'
import { ChartViewDecorator } from '../decorators'

export default {
    title: 'Core/Components/Axes/Axis',
    component: Axis,
}

export const Top = {
    name: 'top',
    args: {
        variant: 'top',
        label: 'axis label',
    },
    decorators: [ChartViewDecorator],
}

export const Right = {
    name: 'right',
    args: {
        variant: 'right',
        label: 'axis label',
    },
    decorators: [ChartViewDecorator],
}

export const Bottom = {
    name: 'bottom',
    args: {
        variant: 'bottom',
        label: 'axis label',
    },
    decorators: [ChartViewDecorator],
}

export const Left = {
    name: 'left',
    args: {
        variant: 'left',
        label: 'axis label',
    },
    decorators: [ChartViewDecorator],
}

export const AxisPadding = {
    name: 'axis padding',
    args: {
        variant: 'bottom',
        label: 'axis label',
        distance: 10,
    },
    decorators: [ChartViewDecorator],
}

export const CustomAxis = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 40, 40]}
            style={{
                margin: '0.5em',
                border: 'solid 1px #aa3333',
                display: 'inline-block',
            }}
        >
            <View>
                <Surface variant={'inner'} />
                <Axis variant={'bottom'}>
                    <AxisTicks ticks={[0, 20, 40, 60, 80, 100]} tickSize={6} labelDistance={10} />
                    <AxisTicks ticks={[10, 30, 50, 70, 90]} labelFormat={() => ''} tickSize={18} />
                </Axis>
            </View>
        </Chart>
    ),
    name: 'custom axis',
}
