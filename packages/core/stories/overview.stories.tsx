import {
    Chart,
    Surface,
    Axis,
    AxisLabel,
    AxisLine,
    AxisTicks,
    GridLines,
    Typography,
    View,
} from '../src'
import { CharWithAxisGridProps as commonProps } from './decorators'
import { CharWithAxisGridViewProps as commonViewProps } from './decorators'

export default {
    title: 'Core/Overview',
}

export const Default = {
    name: 'default',
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Axis variant={'bottom'} label={'x-axis (a.u.)'} />
                <Axis variant={'left'} label={'y-axis (a.u.)'} />
                <Typography variant={'title'} position={[0, -20]}>
                    Default style
                </Typography>
            </View>
        </Chart>
    ),
}

export const Grid = {
    name: 'grid',
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Axis variant={'bottom'} label={'x-axis (a.u.)'} />
                <Axis variant={'left'} label={'y-axis (a.u.)'} />
                <GridLines variant={'x'} />
                <GridLines variant={'y'} />
                <Typography variant={'title'} position={[0, -20]}>
                    With grid
                </Typography>
            </View>
        </Chart>
    ),
}

export const InverseGrid = {
    name: 'inverse grid',
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Surface style={{ fill: '#f0f0f0' }} />
                <Axis variant={'bottom'} label={'x-axis (a.u.)'} />
                <Axis variant={'left'} label={'y-axis (a.u.)'} />
                <GridLines variant={'x'} style={{ stroke: '#ffffff', strokeWidth: '2px' }} />
                <GridLines variant={'y'} style={{ stroke: '#ffffff', strokeWidth: '2px' }} />
                <Typography variant={'title'} position={[0, -20]}>
                    Inverse grid
                </Typography>
            </View>
        </Chart>
    ),
}

export const Boxed = {
    name: 'boxed',
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Surface
                    style={{
                        fill: '#ffffff',
                        stroke: '#222222',
                        strokeWidth: '1px',
                    }}
                    expansion={[10, 10, 10, 10]}
                />
                <Axis variant={'bottom'} distance={10}>
                    <AxisTicks tickSize={5} labelDistance={8} style={{ strokeWidth: '1px' }} />
                    <AxisLabel distance={36}>x-axis (a.u.)</AxisLabel>
                </Axis>
                <Axis variant={'left'} distance={10}>
                    <AxisTicks tickSize={5} labelDistance={8} style={{ strokeWidth: '1px' }} />
                    <AxisLabel distance={44}>y-axis (a.u.)</AxisLabel>
                </Axis>
                <Typography
                    variant={'title'}
                    position={[140, -22]}
                    style={{ textAnchor: 'middle' }}
                >
                    Boxed
                </Typography>
            </View>
        </Chart>
    ),
}

export const BoxedWithGrid = {
    name: 'boxed with grid',
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Surface
                    style={{
                        fill: '#ffffff',
                        stroke: '#222222',
                        strokeWidth: '1px',
                    }}
                    expansion={[12, 12, 12, 12]}
                />
                <GridLines
                    variant={'x'}
                    expansion={[12, 12]}
                    style={{ stroke: '#aaaaaa', strokeDasharray: '5 5' }}
                />
                <GridLines
                    variant={'y'}
                    expansion={[12, 12]}
                    style={{ stroke: '#aaaaaa', strokeDasharray: '5 5' }}
                />
                <Axis variant={'bottom'} distance={12}>
                    <AxisTicks ticks={5} tickSize={-5} labelDistance={6} />
                    <AxisLabel distance={36}>x-axis (a.u.)</AxisLabel>
                </Axis>
                <Axis variant={'left'} distance={12}>
                    <AxisTicks ticks={5} tickSize={-5} labelDistance={6} />
                    <AxisLabel distance={44}>y-axis (a.u.)</AxisLabel>
                </Axis>
                <Axis variant={'right'} distance={12}>
                    <AxisTicks ticks={5} tickSize={-5} labelFormat={() => ''} />
                </Axis>
                <Axis variant={'top'} distance={12}>
                    <AxisTicks ticks={5} tickSize={-5} labelFormat={() => ''} />
                </Axis>
                <Typography
                    variant={'title'}
                    position={[140, -26]}
                    style={{ textAnchor: 'middle' }}
                >
                    Boxed with grid
                </Typography>
            </View>
        </Chart>
    ),
}

export const SmallLabels = {
    name: 'small labels',
    render: () => (
        <Chart
            id="small-labels"
            {...commonProps}
            padding={[50, 50, 55, 60]}
            theme={{
                text: {
                    title: {
                        textAnchor: 'middle',
                    },

                    tickLabel: {
                        fontSize: '11px',
                        fill: '#777777',
                    },

                    axisLabel: {
                        fontSize: '13px',
                        fill: '#555555',
                    },
                },
            }}
        >
            <View {...commonViewProps}>
                <Surface style={{ fill: '#f4f4f4' }} />
                <GridLines variant={'y'} style={{ stroke: '#aaaaaa', strokeWidth: '1px' }} />
                <Axis variant={'bottom'}>
                    <AxisTicks ticks={5} tickSize={5} labelDistance={10} />
                    <AxisLine
                        style={{
                            visibility: 'visible',
                            stroke: '#222222',
                            strokeWidth: '2px',
                        }}
                    />
                    <AxisLabel align={1} distance={32}>
                        x-axis (a.u.)
                    </AxisLabel>
                </Axis>
                <Axis variant={'left'}>
                    <AxisTicks ticks={5} tickSize={0} labelDistance={6} />
                </Axis>
                <Typography variant={'axisLabel'} position={[-6, -28]}>
                    y-axis (a.u.)
                </Typography>
                <Typography variant={'title'} position={[140, -28]}>
                    Small labels
                </Typography>
            </View>
        </Chart>
    ),
}
