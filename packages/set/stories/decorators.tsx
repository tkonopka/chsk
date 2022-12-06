import { ReactNode } from 'react'
import { Chart } from '@chsk/core'
import { Venn } from '../src'

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

export const commonVenn2Props = {
    data: setData2,
}
export const commonVennDisjointProps = {
    data: setDisjoint,
}
export const commonVenn3Props = {
    data: setData3,
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
