import { Chart, LinearGradient, Surface } from '../../../src'
import { DivDecorator } from '../decorators'

export default {
    title: 'Core/Components/Legends/LinearGradient',
    component: LinearGradient,
}

export const Horizontal = {
    render: () => (
        <Chart size={[400, 300]}>
            <defs>
                <LinearGradient
                    id="gradient-horizontal"
                    start={[0, 0]}
                    end={[1, 0]}
                    stops={['#dddddd', '#ffdddd']}
                />
            </defs>
            <Surface
                variant={'inner'}
                style={{
                    fill: 'url(#gradient-horizontal)',
                }}
            />
        </Chart>
    ),
    name: 'horizontal',
    decorators: [DivDecorator],
}

export const Vertical = {
    render: () => (
        <Chart size={[400, 300]}>
            <defs>
                <LinearGradient
                    id="gradient-vertical"
                    start={[0, 0]}
                    end={[0, 1]}
                    stops={['#dddddd', '#ddddff']}
                />
            </defs>
            <Surface
                variant={'inner'}
                style={{
                    fill: 'url(#gradient-vertical)',
                }}
            />
        </Chart>
    ),
    name: 'vertical',
    decorators: [DivDecorator],
}

export const Custom = {
    render: () => (
        <Chart size={[400, 300]}>
            <defs>
                <LinearGradient
                    id="gradient-custom"
                    start={[0, 1]}
                    end={[1, 0]}
                    stops={['#dddddd', '#44ffdd', '#ffff44']}
                    offsets={[0, 0.3, 0.7]}
                />
            </defs>
            <Surface
                variant={'inner'}
                style={{
                    fill: 'url(#gradient-custom)',
                }}
            />
        </Chart>
    ),
    name: 'custom',
    decorators: [DivDecorator],
}
