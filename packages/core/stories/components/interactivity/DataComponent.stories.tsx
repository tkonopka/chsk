import { Chart, DataComponent, Surface, Circle, Typography } from '../../../src'
import { CustomDataComponent } from './CustomDataComponent'
import { CustomChart } from './CustomChart'
import { WithId } from '../../../dist/types'

const customOnClick = (data?: WithId & { value: string }) => {
    console.log('clicked: ' + JSON.stringify(data))
}

export default {
    title: 'Core/Components/Interactivity/DataComponent',
    component: DataComponent,
}

export const ClickEvents = {
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
            <DataComponent
                component={Circle}
                data={{
                    id: 'A',
                    value: 'first circle',
                }}
                props={{
                    cx: 50,
                    cy: 50,
                    r: 30,

                    style: {
                        fill: '#cccccc',
                    },
                }}
                handlers={{
                    onClick: customOnClick,
                }}
            />
            <DataComponent
                component={Circle}
                data={{
                    id: 'B',
                    value: 'second circle',
                }}
                props={{
                    cx: 50,
                    cy: 120,
                    r: 30,
                    style: {
                        fill: '#999999',
                    },
                }}
                handlers={{
                    onClick: customOnClick,
                }}
            />
            <Typography
                position={[120, 50]}
                style={{
                    textAnchor: 'start',
                }}
            >
                Click to log into console
            </Typography>
        </Chart>
    ),
    name: 'click events',
}

export const StyleModifiers = {
    render: () => <CustomChart />,
    name: 'style modifiers',
}

export const CustomImplementation = {
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
            <CustomDataComponent
                component={Circle}
                data={{
                    id: 'A',
                    value: 'first circle',
                }}
                props={{
                    cx: 50,
                    cy: 50,
                    r: 30,

                    style: {
                        fill: '#ddaaaa',
                        fillOpacity: 0.5,
                        stroke: '#ddaaaa',
                    },
                }}
            />
            <CustomDataComponent
                component={Circle}
                data={{
                    id: 'B',
                    value: 'second circle',
                }}
                props={{
                    cx: 50,
                    cy: 120,
                    r: 30,

                    style: {
                        fill: '#aaaadd',
                        fillOpacity: 0.5,
                        stroke: '#aaaadd',
                    },
                }}
            />
            <Typography
                position={[120, 50]}
                style={{
                    textAnchor: 'start',
                }}
            >
                Hover and click
            </Typography>
        </Chart>
    ),
    name: 'custom implementation',
}
