import { Chart, Axis, Legend, LegendTitle, LegendColorScale } from '@chsk/core'
import { interpolateReds } from 'd3-scale-chromatic'
import { HeatMap, HeatMapCells } from '../../src'
import { commonProps, ChartHeatMapDecorator } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMapCells',
    component: HeatMapCells,
}

export const SelectedIds = {
    name: 'selected ids',
    args: {
        ids: ['alpha', 'beta'],
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartHeatMapDecorator],
}

export const SelectedKeys = {
    name: 'selected keys',
    args: {
        keys: ['x', 'y'],
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartHeatMapDecorator],
}

export const SelectedCells = {
    name: 'selected cells',
    args: {
        cells: [
            ['alpha', 'y'],
            ['beta', 'x'],
            ['delta', 'z'],
        ],
        style: {
            strokeWidth: 1,
            stroke: '#222222',
        },
    },
    decorators: [ChartHeatMapDecorator],
}

export const CustomScales = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[60, 40, 40, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <HeatMap {...commonProps}>
                <Axis variant={'top'} />
                <Axis variant={'left'} />
                <HeatMapCells ids={['alpha', 'beta']} />
                <HeatMapCells
                    ids={['gamma', 'delta']}
                    scaleColor={{
                        variant: 'sequential',
                        colors: interpolateReds,
                        domain: [0, 50],
                    }}
                />
            </HeatMap>
        </Chart>
    ),

    name: 'custom scales',
}

export const CustomLegends = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[60, 80, 40, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <HeatMap {...commonProps}>
                <Axis variant={'top'} />
                <Axis variant={'left'} />
                <HeatMapCells ids={['alpha', 'beta']} />
                <Legend
                    variant={'color'}
                    position={[280, -30]}
                    positionUnits={'absolute'}
                    size={[60, 60]}
                    title={'Colors 1'}
                />
                <HeatMapCells
                    ids={['gamma', 'delta']}
                    scaleColor={{
                        variant: 'sequential',
                        colors: interpolateReds,
                        domain: [0, 50],
                    }}
                >
                    <Legend variant={'color'} position={[280, 110]} positionUnits={'absolute'}>
                        <LegendTitle position={[0, 0]}>Colors 2</LegendTitle>
                        <LegendColorScale
                            variant="right"
                            size={[8, 80]}
                            position={[0, 20]}
                            gradientId="second-scale"
                        />
                    </Legend>
                </HeatMapCells>
            </HeatMap>
        </Chart>
    ),

    name: 'custom legends',
}
