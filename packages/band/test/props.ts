import dataGroups from '../stories/dataGroups.json'
import { BarProps } from '../src'

export const chartProps = {
    size: [400, 300] as [number, number],
    padding: [40, 40, 40, 40] as [number, number, number, number],
}

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
