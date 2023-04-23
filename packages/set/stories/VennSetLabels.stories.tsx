import { Chart } from '@chsk/core'
import { Venn, VennSets, VennSetLabels } from '../src'
import { ChartVennSets2Decorator, commonVenn2Props } from './decorators'

export default {
    title: 'Addons/Set/VennSetLabels',
    component: VennSetLabels,
}

export const Default = {
    name: 'default',
    decorators: [ChartVennSets2Decorator],
}

export const OneSet = {
    name: 'one set',
    args: {
        ids: ['alpha'],
    },
    decorators: [ChartVennSets2Decorator],
}

export const LabelsUnderSets = {
    name: 'labels under sets',
    args: {
        rs: [1, 1],
        angles: [-Math.PI / 3, Math.PI / 3],
        offset: [0, -28],
    },
    decorators: [ChartVennSets2Decorator],
}

export const LabelsAtCustomAngles = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[80, 60, 60, 80]}
            style={{
                display: 'inline-block',
            }}
        >
            <Venn {...commonVenn2Props}>
                <VennSets
                    style={{
                        fillOpacity: 0.7,
                    }}
                />
                <VennSetLabels ids={['alpha']} rs={[1]} angles={[-Math.PI / 3]} offset={[0, -28]} />
                <VennSetLabels
                    ids={['beta']}
                    rs={[1]}
                    angles={[(+2 * Math.PI) / 3]}
                    offset={[0, 28]}
                />
            </Venn>
        </Chart>
    ),

    name: 'labels at custom angles',
}

export const CustomFormat = {
    name: 'custom format',
    args: {
        format: (x: string) => x.substring(0, 1).toLocaleUpperCase(),
    },
    decorators: [ChartVennSets2Decorator],
}

export const Styled = {
    name: 'styled',
    args: {
        style: {
            fontWeight: 600,
            fontSize: 24,
            fill: '#555555',
        },
        rs: [1.2, 1.2],
        angles: [0, 0],
    },
    decorators: [ChartVennSets2Decorator],
}
