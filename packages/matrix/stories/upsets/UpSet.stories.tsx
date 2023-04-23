import { Chart, Axis } from '@chsk/core'
import { UpSet, UpSetGrid, HeatMapSurface } from '../../src'
import { ChartDecorator, commonUpSetProps } from '../decorators'

const rowExpansion: [[number, number], [number, number]] = [
    [0.625, 0.625],
    [0.625, 0.625],
]

const outlineStyle = { fillOpacity: 0, stroke: '#2222dd', strokeWidth: 4 }
const rowStyleOdd = { fill: '#f2f2f2' }
const rowStyleEven = { fill: '#dedede' }

export default {
    title: 'Addons/Matrix/UpSets/UpSet',
    component: UpSet,
}

export const Default = {
    name: 'default',
    args: {
        ...commonUpSetProps,
        children: (
            <>
                <Axis variant="left" />
                <UpSetGrid
                    symbolStyle={{
                        fill: '#ccc',
                    }}
                />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const Vertical = {
    name: 'vertical',
    args: {
        ...commonUpSetProps,
        horizontal: false,
        children: (
            <>
                <Axis variant="top" />
                <UpSetGrid
                    symbolStyle={{
                        fill: '#ccc',
                    }}
                />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const LargePadding = {
    name: 'large padding',
    args: {
        ...commonUpSetProps,
        scaleIndex: {
            variant: 'band',
            padding: 0.5,
        },
        scaleMembership: {
            variant: 'band',
            padding: 0.5,
        },

        children: (
            <>
                <Axis variant="left" />
                <UpSetGrid
                    symbolStyle={{
                        fill: '#ccc',
                    }}
                />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const Outline = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 40, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <UpSet {...commonUpSetProps}>
                <Axis variant="left" />
                <UpSetGrid
                    symbolStyle={{
                        fill: '#ccc',
                    }}
                />
                <HeatMapSurface expansion={rowExpansion} style={outlineStyle} />
            </UpSet>
        </Chart>
    ),

    name: 'outline',
}

export const BackgroundStripes = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 40, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <UpSet {...commonUpSetProps}>
                <Axis variant="left" />
                <HeatMapSurface ids={['alpha']} expansion={rowExpansion} style={rowStyleOdd} />
                <HeatMapSurface ids={['beta']} expansion={rowExpansion} style={rowStyleEven} />
                <HeatMapSurface ids={['gamma']} expansion={rowExpansion} style={rowStyleOdd} />
                <HeatMapSurface ids={['delta']} expansion={rowExpansion} style={rowStyleEven} />
                <UpSetGrid
                    symbolStyle={{
                        fill: '#ccc',
                    }}
                />
            </UpSet>
        </Chart>
    ),

    name: 'background stripes',
}
