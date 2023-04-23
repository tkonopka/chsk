import { Chart, Surface, View, Axis } from '../../../src'

export default {
    title: 'Core/Components/Views/View',
    component: View,
}

export const WithoutView = {
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
            <Axis variant={'bottom'} />
        </Chart>
    ),
    name: 'without view',
}

export const WithView = {
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
            <View
                container={{
                    padding: [20, 20, 0, 0],
                }}
            >
                <Axis variant={'bottom'} />
            </View>
        </Chart>
    ),
    name: 'with view',
}
