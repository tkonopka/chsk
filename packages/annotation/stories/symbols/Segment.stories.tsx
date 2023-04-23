import { Chart, Surface, View, Legend } from '@chsk/core'
import { Segment } from '../../src'
import { viewSeriesIndexesKeys } from './decorators'

export default {
    title: 'Addons/Annotation/Symbols/Segment',
    component: Segment,
}

export const InLegend = {
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
            <Surface variant={'inner'} />
            <View data={viewSeriesIndexesKeys}>
                <Legend
                    position={[10, 10]}
                    positionUnits={'absolute'}
                    itemSize={[90, 20]}
                    symbol={Segment}
                />
            </View>
        </Chart>
    ),

    name: 'legend',
}

export const Styled = {
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
            <Surface variant={'inner'} />
            <View data={viewSeriesIndexesKeys}>
                <Legend
                    position={[10, 10]}
                    positionUnits={'absolute'}
                    itemSize={[90, 20]}
                    symbol={Segment}
                    symbolStyle={{
                        strokeWidth: 4,
                        strokeDasharray: '5 5',
                    }}
                />
            </View>
        </Chart>
    ),

    name: 'styled',
}
