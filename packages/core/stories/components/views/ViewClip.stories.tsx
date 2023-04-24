import { ViewClip } from '../../../src'
import { ChartViewDecorator } from '../decorators'
import { ReactNode } from 'react'

export default {
    title: 'Core/Components/Views/ViewClip',
    component: ViewClip,
}

export const WithClip = {
    name: 'clipped',
    args: {
        id: 'clipped',
        children: <circle cx={0} cy={0} r={30} style={{ fill: '#dd0000' }} />,
    },
    decorators: [ChartViewDecorator],
}

export const WithoutClip = {
    name: 'unclipped',
    args: {
        children: <circle cx={0} cy={0} r={30} style={{ fill: '#dd0000' }} />,
    },
    component: ({ children }: { children: ReactNode }) => <g>{children}</g>,
    decorators: [ChartViewDecorator],
}

export const Expansion = {
    name: 'expansion',
    args: {
        id: 'clip-expansion',
        expansion: [10, 10, 10, 10],
        children: <circle cx={0} cy={0} r={30} style={{ fill: '#dd0000' }} />,
    },
    decorators: [ChartViewDecorator],
}
