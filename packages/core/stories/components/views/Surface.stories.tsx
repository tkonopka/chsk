import { Chart, Surface } from '../../../src'
import { ChartDecorator } from '../decorators'

export default {
    title: 'Core/Components/Views/Surface',
    component: Surface,
}

export const InnerSurface = {
    name: 'inner surface',
    args: {
        variant: 'inner',
        style: {
            fill: '#eeeeee',
        },
    },
    decorators: [ChartDecorator],
}

export const OuterSurface = {
    name: 'outer surface',
    args: {
        variant: 'outer',

        style: {
            fill: '#eeeeee',
        },
    },
    decorators: [ChartDecorator],
}

export const MultipleSurfaces = {
    render: () => (
        <Chart size={[400, 300]} padding={[40, 40, 40, 40]}>
            <Surface
                variant={'outer'}
                style={{
                    fill: '#eeeeee',
                }}
            />
            <Surface
                variant={'inner'}
                style={{
                    fill: '#cccccc',
                }}
            />
        </Chart>
    ),
    name: 'multiple surfaces',
}

export const Expanded = {
    name: 'expanded',
    args: {
        variant: 'inner',
        style: {
            fill: '#eeeeee',
        },
        expansion: [40, 0, 0, 0],
    },
    decorators: [ChartDecorator],
}
