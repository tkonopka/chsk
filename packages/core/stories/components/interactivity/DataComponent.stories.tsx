import { Chart, DataComponent, Surface, Circle, Typography, WithId } from '../../../src'
import { CustomDataComponent } from './CustomDataComponent'

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

const keyframes = [
    '@keyframes colorChange {',
    'from {fill: #999999 }',
    'to {fill: #dd4444 }',
    '}',
].join('')

export const StyleModifiers = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 40, 40]}
            style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
        >
            <style>{keyframes}</style>
            <Surface variant={'inner'} />
            <DataComponent
                component={Circle}
                data={{ id: 'A', value: 'first circle' }}
                props={{ cx: 50, cy: 50, r: 30, style: { fill: '#cccccc' } }}
                modifiers={{
                    onMouseEnter: { strokeWidth: 2, stroke: '#0000dd' },
                    onMouseLeave: {},
                }}
            />
            <Typography position={[90, 50]} style={{ textAnchor: 'start' }}>
                hover to change stroke
            </Typography>
            <DataComponent
                component={Circle}
                data={{ id: 'B', value: 'second circle' }}
                props={{ cx: 50, cy: 120, r: 30, style: { fill: '#999999' } }}
                modifiers={{
                    onClick: { animation: 'colorChange 0.5s ease-in 0s 4 alternate none running' },
                }}
            />
            <Typography position={[90, 120]} style={{ textAnchor: 'start' }}>
                click for 2x color pulse
            </Typography>
        </Chart>
    ),
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
