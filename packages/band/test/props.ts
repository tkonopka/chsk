import { BarProps } from '../src'
import { BarDataItem } from '../dist/types'

const dataGroups: Array<BarDataItem> = [
    {
        id: 'alpha',
        label: 'alpha',
        x: 55,
        y: 35,
        z: 10,
    },
    {
        id: 'beta',
        label: 'beta',
        x: 35,
        y: 25,
        z: 15,
    },
]

export const barProps: BarProps = {
    data: dataGroups,
    keys: ['x', 'y', 'z'],
    scaleIndex: {
        variant: 'band' as const,
        domain: ['alpha', 'beta'],
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
    },
}
