import { ReactNode } from 'react'
import { Chart } from '@chsk/core'
import { Venn, VennSets } from '../src'

const setData2 = [
    { id: 'alpha', data: ['a', 'b', 'c'] },
    { id: 'beta', data: ['c', 'd', 'e', 'f', 'g'] },
]
const setDisjoint = [
    { id: 'alpha', data: ['a', 'b'] },
    { id: 'beta', data: ['c', 'd', 'e', 'f'] },
]
const setData3 = [
    { id: 'alpha', data: ['a', 'b', 'c', 'd'] },
    { id: 'beta', data: ['b', 'c', 'd', 'e'] },
    { id: 'gamma', data: ['c', 'd', 'e', 'f'] },
]

export const commonVenn1Props = {
    data: setData2.slice(0, 1),
}
export const commonVenn2Props = {
    data: setData2,
}
export const commonVenn2bProps = {
    data: [
        { id: 'alpha', data: ['a', 'b', 'c', 'f', 'g', 'h'] },
        { id: 'beta', data: ['a', 'b', 'c', 'd'] },
    ],
}
export const commonVennDisjointProps = {
    data: setDisjoint,
}
export const commonVenn3Props = {
    data: setData3,
}
export const commonVennASubsetProps = {
    data: [
        { id: 'alpha', data: ['a', 'b', 'c'] },
        { id: 'beta', data: ['a', 'b', 'c', 'd', 'e', 'f'] },
    ],
}
export const commonVennBSubsetProps = {
    data: [
        { id: 'alpha', data: ['a', 'b', 'c', 'd', 'e', 'f'] },
        { id: 'beta', data: ['a', 'b'] },
    ],
}

export const ChartDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[80, 60, 60, 80]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartVenn2Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[80, 60, 60, 80]} style={{ display: 'inline-block' }}>
        <Venn {...commonVenn2Props}>{Story()}</Venn>
    </Chart>
)

export const ChartVenn3Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[80, 60, 60, 80]} style={{ display: 'inline-block' }}>
        <Venn {...commonVenn3Props}>{Story()}</Venn>
    </Chart>
)

export const ChartVennSets1Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[80, 60, 60, 80]} style={{ display: 'inline-block' }}>
        <Venn {...commonVenn1Props}>
            <VennSets style={{ fillOpacity: 0.7 }} />
            {Story()}
        </Venn>
    </Chart>
)

export const ChartVennSets2Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[80, 60, 60, 80]} style={{ display: 'inline-block' }}>
        <Venn {...commonVenn2Props}>
            <VennSets style={{ fillOpacity: 0.7 }} />
            {Story()}
        </Venn>
    </Chart>
)

export const ChartVennSets2ProportionalDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[80, 60, 60, 80]} style={{ display: 'inline-block' }}>
        <Venn {...commonVenn2Props} proportional={true}>
            <VennSets style={{ fillOpacity: 0.7 }} />
            {Story()}
        </Venn>
    </Chart>
)

export const ChartVennSets2ProportionalDisjointDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[80, 60, 60, 80]} style={{ display: 'inline-block' }}>
        <Venn {...commonVennDisjointProps} proportional={true}>
            <VennSets style={{ fillOpacity: 0.7 }} />
            {Story()}
        </Venn>
    </Chart>
)

export const ChartVennSets3Decorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[80, 60, 60, 80]} style={{ display: 'inline-block' }}>
        <Venn {...commonVenn3Props}>
            <VennSets style={{ fillOpacity: 0.7 }} />
            {Story()}
        </Venn>
    </Chart>
)
