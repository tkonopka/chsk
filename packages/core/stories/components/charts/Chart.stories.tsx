import { Chart, Surface, emptyTheme } from '../../../src'
import { DivDecorator } from '../decorators'

export default {
    title: 'Core/Components/Charts/Chart',
    component: Chart,
}

export const CustomSize = {
    name: 'custom size',
    args: {
        size: [400, 200],
        padding: [20, 20, 20, 20],
        children: <Surface variant={'inner'} />,
    },
    decorators: [DivDecorator],
}

export const Stretch = {
    render: () => (
        <div
            style={{
                width: '100%',
                height: '200px',
                border: 'solid 1px #aaaa33',
                display: 'inline-block',
            }}
        >
            <Chart
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                stretch={true}
                stretchExpansion={[-1, -1]}
            >
                <Surface variant={'inner'} />
            </Chart>
        </div>
    ),
    name: 'stretch',
}

export const CustomTheme = {
    name: 'custom theme',
    args: {
        id: 'customTheme',
        size: [400, 200],
        padding: [20, 20, 20, 20],
        theme: {
            rect: {
                inner: {
                    fill: '#ffdddd',
                },
            },
        },
        children: <Surface variant={'inner'} />,
    },
    decorators: [DivDecorator],
}

export const BaseTheme = {
    name: 'base theme',
    args: {
        id: 'emptyTheme',
        size: [400, 200],
        padding: [20, 20, 20, 20],
        baseTheme: emptyTheme,
        children: <Surface variant={'inner'} />,
    },
    decorators: [DivDecorator],
}
