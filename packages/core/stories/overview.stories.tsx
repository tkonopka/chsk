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
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Axis variant={'bottom'} label={'x-axis (a.u.)'} />
                <Axis variant={'left'} label={'y-axis (a.u.)'} />
                <Typography position={[0, -20]} variant="title">
                    Default style
                </Typography>
            </View>
        </Chart>
    ),

    name: 'default',
}

export const Grid = {
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Axis variant={'bottom'} label={'x-axis (a.u.)'} />
                <Axis variant={'left'} label={'y-axis (a.u.)'} />
                <GridLines variant={'x'} />
                <GridLines variant={'y'} />
                <Typography position={[0, -20]} variant="title">
                    With grid
                </Typography>
            </View>
        </Chart>
    ),

    name: 'grid',
}

export const InverseGrid = {
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Surface variant={'inner'} style={{ fill: '#f0f0f0' }} />
                <Axis variant={'bottom'} label={'x-axis (a.u.)'} />
                <Axis variant={'left'} label={'y-axis (a.u.)'} />
                <GridLines variant={'x'} style={{ stroke: '#ffffff', strokeWidth: '2px' }} />
                <GridLines variant={'y'} style={{ stroke: '#ffffff', strokeWidth: '2px' }} />
                <Typography position={[0, -20]} variant="title">
                    Inverse grid
                </Typography>
            </View>
        </Chart>
    ),

    name: 'inverse grid',
}

export const Boxed = {
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Surface
                    variant={'inner'}
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
                <Typography position={[140, -22]} variant="title" style={{ textAnchor: 'middle' }}>
                    Boxed
                </Typography>
            </View>
        </Chart>
    ),

    name: 'boxed',
}

export const BoxedWithGrid = {
    render: () => (
        <Chart {...commonProps}>
            <View {...commonViewProps}>
                <Surface
                    variant={'inner'}
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
                <Typography position={[140, -26]} variant="title" style={{ textAnchor: 'middle' }}>
                    Boxed with grid
                </Typography>
            </View>
        </Chart>
    ),

    name: 'boxed with grid',
}

export const SmallLabels = {
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
                <Surface variant={'outer'} style={{ fill: '#f4f4f4' }} />
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
                <Typography position={[-6, -28]} variant={'axisLabel'}>
                    y-axis (a.u.)
                </Typography>
                <Typography position={[140, -28]} variant={'title'}>
                    Small labels
                </Typography>
            </View>
        </Chart>
    ),

    name: 'small labels',
}
