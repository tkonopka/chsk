import { ReactNode } from 'react'
import { Chart, Axis } from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapProps } from '../src/'
import { generateCategoricalHeatMapData, generateContinuousHeatMapData } from './generators'

const continuous4x3 = generateContinuousHeatMapData(
    ['alpha', 'beta', 'gamma', 'delta'],
    ['x', 'y', 'z'],
    [0, 35]
)
const categorical4x3 = generateCategoricalHeatMapData(
    ['alpha', 'beta', 'gamma', 'delta'],
    ['x', 'y', 'z'],
    ['a', 'b', 'c', 'd', 'e']
)

export const commonProps: Pick<HeatMapProps, 'data' | 'keys'> = {
    data: continuous4x3,
    keys: ['x', 'y', 'z'],
}

export const commonCategoricalProps: Pick<HeatMapProps, 'data' | 'keys' | 'scaleColor'> = {
    data: categorical4x3,
    keys: ['x', 'y', 'z'],
    scaleColor: { variant: 'categorical', colors: 'Category10' },
}

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartDecoratorEqualPadding = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 40, 40, 40]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartHeatMapDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <HeatMap {...commonProps}>
            <Axis variant={'top'} />
            <Axis variant={'left'} />
            {Story()}
        </HeatMap>
    </Chart>
)

export const ChartHeatMapCellsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <HeatMap {...commonProps}>
            <Axis variant={'top'} />
            <Axis variant={'left'} />
            <HeatMapCells />
            {Story()}
        </HeatMap>
    </Chart>
)

export const ChartHeatMapPaddedCellsDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[60, 40, 40, 60]} style={{ display: 'inline-block' }}>
        <HeatMap
            {...commonProps}
            scaleX={{ variant: 'band', padding: 0.15, paddingOuter: 0.075 }}
            scaleY={{ variant: 'band', padding: 0.15, paddingOuter: 0.075 }}
        >
            <Axis variant={'top'} />
            <Axis variant={'left'} />
            <HeatMapCells />
            {Story()}
        </HeatMap>
    </Chart>
)
