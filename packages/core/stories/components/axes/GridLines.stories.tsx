import { GridLines } from '../../../src'
import { ChartViewDecorator, ChartBandViewDecorator } from '../decorators'

export default {
    title: 'Core/Components/Axes/GridLines',
    component: GridLines,
}

export const GridX = {
    name: 'grid x',
    args: {
        variant: 'x',
    },
    decorators: [ChartViewDecorator],
}

export const GridY = {
    name: 'grid y',
    args: {
        variant: 'y',
    },
    decorators: [ChartViewDecorator],
}

export const DashedGridLines = {
    render: () => (
        <>
            <GridLines
                variant="y"
                values={4}
                style={{
                    strokeDasharray: '4 4',
                    stroke: '#555555',
                }}
            />
            <GridLines
                variant="x"
                values={5}
                style={{
                    strokeDasharray: '4 4',
                    stroke: '#555555',
                }}
            />
        </>
    ),
    name: 'dashed grid lines',
    decorators: [ChartViewDecorator],
}

export const NegativeLines = {
    render: () => (
        <>
            <GridLines
                variant="y"
                values={5}
                style={{
                    strokeWidth: 2,
                    stroke: '#ffffff',
                }}
            />
            <GridLines
                variant="x"
                values={8}
                style={{
                    strokeWidth: 2,
                    stroke: '#ffffff',
                }}
            />
        </>
    ),
    name: 'negative lines',
    decorators: [ChartViewDecorator],
}

export const CustomPositions = {
    render: () => (
        <>
            <GridLines
                variant={'y'}
                values={[0, 10, 20, 50, 80, 90, 100]}
                style={{
                    stroke: '#777777',
                }}
            />
            <GridLines
                variant={'x'}
                values={[0, 65, 85, 95, 100]}
                style={{
                    stroke: '#777777',
                }}
            />
        </>
    ),
    name: 'custom positions',
    decorators: [ChartViewDecorator],
}

export const LineExtent = {
    name: 'line extent',
    args: {
        expansion: [10, 25],
        style: {
            stroke: '#555555',
        },
    },
    decorators: [ChartViewDecorator],
}

export const Band = {
    name: 'band',
    args: {
        variant: 'y',
        style: {
            stroke: '#aaaaaa',
        },
    },
    decorators: [ChartBandViewDecorator],
}

export const BetweenBands = {
    name: 'between bands',
    args: {
        variant: 'y',
        shift: [-0.5, 0.5],
        style: {
            stroke: '#aaaaaa',
        },
    },
    decorators: [ChartBandViewDecorator],
}
